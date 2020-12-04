
const processCN = (
  state: boolean, 
  block: string, 
  element: string, 
  modifier: string
): string => {
  const baseCN = `${block}__${element}`;
  return state ? `${baseCN} ${baseCN}--${modifier}` : baseCN;
};

export default processCN;