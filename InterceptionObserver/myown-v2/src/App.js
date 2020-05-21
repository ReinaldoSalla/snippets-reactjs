import React from "react";
import "./App.css";
import { data } from "./data";

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

const Loading = () => (
  <span id="loading">Loading...</span>
);

function Products() {
  const {products, isLoading, hasMore, startOperation} = React.useContext(ProductContext);
  const starter = React.useRef(startOperation);
  const observer = React.useRef(new IntersectionObserver(entries => {
  	if (entries[0].isIntersecting) starter.current();
  }, { threshold: 1 }));
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

  return (
  	<ul id="products-list">
  		{products.map((product, index) => 
  			<li key={index} id="product-element">
  				product {index + 1}
  			</li>
  		)}
  		{isLoading && <li id="loading-element"><Loading/></li>}
  		{!isLoading && hasMore && <li id="ref-element" ref={setElement}></li>}
  	</ul>
  );
}

const Wrapper = () => (
	<ProductProvider>
		<Products />
	</ProductProvider>
);

export default Wrapper;