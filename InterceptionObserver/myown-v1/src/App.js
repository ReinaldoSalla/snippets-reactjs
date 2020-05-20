import React from "react";
import "./App.css";

const data = Array(100).fill(0).map((_, index) => `Product #${index + 1}`);
const productsPerPage = 10;
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
  	if (element) observer.current.observe(element);
  	return () => {
  		if (element) observer.current.unobserve(element);
  	}
  }, [element]);

  return (
  	<React.Fragment>
	  	<ul>
	  		{products.map((product, index) => 
	  			<li key={index} style={{ background: "orange" }}>
	  				{product}
	  			</li>
	  		)}
	  		{isLoading && <li>Loading...</li>}
	  		{!isLoading && hasMore && (
	  			<li ref={setElement} style={{ background: "transparent" }}></li>
	  		)}
	  	</ul>
	  </React.Fragment>
  );
}

const Wrapper = () => (
	<ProductProvider>
		<Products />
	</ProductProvider>
);

export default Wrapper;