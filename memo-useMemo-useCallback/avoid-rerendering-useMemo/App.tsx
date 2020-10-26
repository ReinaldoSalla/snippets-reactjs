import React, { 
  useReducer,
  useMemo, 
  FunctionComponent 
} from 'react';

let nCallsParent = 0,
    nCallsChild = 0;
  
interface MemoChildProps {
  count: number;
  handleClick: () => void;
}

const Child: FunctionComponent<MemoChildProps> = ({ 
  count,
  handleClick 
}) => {
  nCallsChild++;
  console.log(`Rendering Child for the ${nCallsChild} time`);
  return (
    <>
      <button onClick={handleClick}>add</button>
      <h1>child count: {count}</h1>
    </>
  );
};

const addNumber = (state) => {
  return { ...state, count: state.count + 1 };
}

const changeInput = (state, payload) => {
  return {
    ...state,
    input: payload
  }
}

const ParentReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return addNumber(state);
    case 'CHANGE_INPUT':
      return changeInput(state, action.payload);
    default:
      throw new Error('err');
  }
}

const Parent = () => {
  const [state, dispatch] = useReducer(ParentReducer, {
    count: 0,
    input: ''
  });

  const handleChange = (event) => {
    dispatch({ type: 'CHANGE_INPUT', payload: event.target.value });
  };

  const memoChild = useMemo(() => {
    const handleClick = () => {
      dispatch({ type: 'ADD_NUMBER' });
    };
    return <Child count={state.count} handleClick={handleClick} />
  }, [state.count]);

  nCallsParent++;
  console.log('-'.repeat(50));
  console.log(`Rendering Parent for the ${nCallsParent} time`);
  return (
    <>
      <input 
        type='text' 
        value={state.input} 
        onChange={handleChange}
      />
      <h1> parent count: {state.count} </h1>
      {memoChild}
    </>
  );
};

export default Parent;