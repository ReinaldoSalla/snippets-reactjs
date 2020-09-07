import React, { 
  useState,
  useCallback,
  memo, 
  FunctionComponent 
} from 'react';

let nCallsParent = 0,
    nCallsChild = 0;
  
interface MemoChildProps {
  count: number;
  handleClick: () => void;
}

const MemoChild: FunctionComponent<MemoChildProps> = memo(({ 
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
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  nCallsParent++;
  console.log('-'.repeat(50));
  console.log(`Rendering Parent for the ${nCallsParent} time`)
  return (
    <>
      <input 
        type='text' 
        value={name} 
        onChange={event => setName(event.target.value)}
      />
      <h1> parent count: {count} </h1>
      <MemoChild count={count} handleClick={handleClick}/>
    </>
  );
};

export default Parent;