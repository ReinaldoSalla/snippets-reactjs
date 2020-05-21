/*
1-the space bellow
2-how to animate only after its loaded, the first three slide up in the right time
3-how to animate three at the time, and not all the products at once
*/

import React from "react";
import { data } from "./data";
import { FaCartPlus } from "react-icons/fa";
import "./App.css";

const productsPerPage = 3;
const ProductContext = React.createContext();

function reducer(state, action) {
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
}

function ProductProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, {
    products: [],
    isLoading: false,
    hasMore: true,
    currentIndex: 0
  });
  return (
    <ProductContext.Provider value={{
      products: state.products,
      isLoading: state.isLoading,
      hasMore: state.hasMore,
      startOperation: () => {
        dispatch({ type: "LOAD" });
        setTimeout(() => {
        	dispatch({
        		type: "RENDER",
        		payload: data.slice(
        			state.currentIndex,
        			state.currentIndex + productsPerPage
        		)
        	});
        }, 1000);
      }
    }}>
    	{props.children}
    </ProductContext.Provider>
  );
}

function Loading() {
  return (
    <span id="loading" >Loading...</span>
  )
}

function Products() {
  const {products, isLoading, hasMore, startOperation} = React.useContext(ProductContext);
  const starter = React.useRef(startOperation);
  const observer = React.useRef(new IntersectionObserver(entries => {
  	if (entries[0].isIntersecting) starter.current();
  }, { threshold: 0.5 }));
  const [element, setElement] = React.useState(null);

  React.useEffect(() => {
  	starter.current = startOperation;
  }, [startOperation]);

  React.useEffect(() => {
    const currentObserver = observer.current
  	if (element) currentObserver.observe(element);
  	return () => {
  		if (element) currentObserver.unobserve(element);
  	}
  }, [element]);

  /*
  return (
  	<React.Fragment>
      <ul id="products-grid">
    		{products.map((product, index) => 
    			<li key={index} id="product">
    				product #{index + 1}
    			</li>
    		)}
    		{isLoading && <li><Loading /></li>}
    		{!isLoading && hasMore && (
    			<li ref={setElement}></li>
    		)}
      </ul>
  	</React.Fragment>
  );
  */
  
  // Convert this into a list so it starts to be more predictable
  return (
  	<React.Fragment>
  		<div className="products-overflow">	
  			<div className="products-grid">
  				{products.map((product, index) => 
  					<div className="product-info">
  						
  					</div>
  				)}
  				{isLoading && <Loading />}
  				{!isLoading && hasMore && <div ref={setElement}/>}
  			</div>
  		</div>
  	</React.Fragment>
  )

  /*
  return (
    <React.Fragment>
      <div className="products-overflow">
        <div className="products-grid">
          {products.map((product, index) => 
            <div key={index} className="product-info">
              <img id="product-img" src={product.img} alt={product.name}/>
              <div className="product-text">
                <span id="product-price">${product.price}</span>
                <span id="product-name">{product.name}</span>
                <FaCartPlus id="product-icon" />
              </div>
            </div>
          )}
        </div>
      </div>
      {isLoading && <Loading />}
      {!isLoading && hasMore && <span ref={setElement}></span>}
    </React.Fragment>
  );
  */
}

const Wrapper = () => (
	<ProductProvider>
		<Products />
	</ProductProvider>
);

export default Wrapper;