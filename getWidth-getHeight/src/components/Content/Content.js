/*
the loading would not work right now for new fetchs, it would clear the hole screen and start over
Get the media size to render either one or two or three, but not always three
Animate the slide up for each batch, not all of them
*/

import React from "react";
import "./Content.css";

const productsPerPage = 3;

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD":
      return {
        ...state,
        isLoading: true
      };
    case "RENDER":
    	return {
    		...state,
    		products: [...state.products, ...action.payload],
    		isLoading: false,
    		hasMore: action.payload.length === productsPerPage,
    		currentIndex: state.currentIndex + action.payload.length
    	}
    default:
    	throw new ReferenceError(`Action type ${action.type} is not defined`);
  }
};

const Loading = () => (
  <span id="loading">Loading...</span>
);

const Products = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    products: [],
    isLoading: false,
    hasMore: true,
    currentIndex: 0
  });
  const [isApiLoading, setApiIsLoading] = React.useState(true);
  const [apiProducts, setApiProducts] = React.useState(null);

  const startOperation = React.useCallback(() => {
    dispatch({ type: "LOAD" });
    setTimeout(() => {
      dispatch({
        type: "RENDER",
        payload: apiProducts.slice(
          state.currentIndex,
          state.currentIndex + productsPerPage
        )
      });
    }, 1000);
  }, [state.currentIndex, apiProducts]);

  const starter = React.useRef(startOperation);
  const observer = React.useRef(new IntersectionObserver(entries => {
  	if (entries[0].isIntersecting) starter.current();
  }, { threshold: 1 }));
  const [trigger, setTrigger] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(res => res.json())
      .then(data => {
        setApiProducts(data.products);
        setApiIsLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  React.useEffect(() => {
  	starter.current = startOperation;
  }, [startOperation]);

  React.useEffect(() => {
    const currentObserver = observer.current
  	if (trigger) currentObserver.observe(trigger);
  	return () => {
  		if (trigger) currentObserver.unobserve(trigger);
  	}
  }, [trigger]);

  if (isApiLoading) {
    return (
      <ul id="products-list">
        <li id="loading-element">
          <Loading />
        </li>
      </ul> 
    );
  }

  return (
  	<ul id="products-list">
      <div className="products-grid">
    		{state.products.map((product, index) => 
    			<li key={index} id="product-element">
    				product {index + 1}
    			</li>
    		)}
      </div>
  		{state.isLoading && <li id="loading-element"><Loading/></li>}
  		{!state.isLoading && state.hasMore && <li id="ref-element" ref={setTrigger}></li>}
  	</ul>
  );
};

export default Products;