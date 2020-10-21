// bad example

// import React from 'react';
// import styled from 'styled-components';

// const AppWrapper = styled.div`
//   padding: 16px;
//   margin: 16px;
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   border: 1px solid black;
// `;

// const TextWrapper = styled.div`
//   padding: 16px;
//   margin: 16px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-evenly;
//   border: 1px solid black;
// `;

// const Text = styled.span`
//   font-size: 16px;
//   border: 1px solid black;
// `

// const App = () => {
//   return (
//     <AppWrapper>
//       <TextWrapper>
//         <Text>First</Text>
//       </TextWrapper>
//       <TextWrapper>
//         <Text>Second</Text>
//       </TextWrapper>
//       <TextWrapper>
//         <Text>Third</Text>
//       </TextWrapper>
//     </AppWrapper>
//  );
// };

// export default App;

// .chXQHk {
//  padding:16px;
//  margin:16px;
//  display:-webkit-box;
//  display:-webkit-flex;
//  display:-ms-flexbox;
//  display:flex;
//  -webkit-align-items:center;
//  -webkit-box-align:center;
//  -ms-flex-align:center;
//  align-items:center;
//  -webkit-box-pack:space-evenly;
//  -webkit-justify-content:space-evenly;
//  -ms-flex-pack:space-evenly;
//  justify-content:space-evenly;
//  border:1px solid black;
// }
// .laVpnz {
//  padding:16px;
//  margin:16px;
//  display:-webkit-box;
//  display:-webkit-flex;
//  display:-ms-flexbox;
//  display:flex;
//  -webkit-flex-direction:column;
//  -ms-flex-direction:column;
//  flex-direction:column;
//  -webkit-align-items:center;
//  -webkit-box-align:center;
//  -ms-flex-align:center;
//  align-items:center;
//  -webkit-box-pack:space-evenly;
//  -webkit-justify-content:space-evenly;
//  -ms-flex-pack:space-evenly;
//  justify-content:space-evenly;
//  border:1px solid black;
// }
// .dwAIgo {
//  font-size:16px;
//  border:1px solid black;
// }


/******************************************** */

// good example

import React from 'react';
import styled from 'styled-components';

const SharedWrapper = styled.div`
  padding: 16px;
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid black;
`;

const TextWrapper = styled(SharedWrapper)`
  flex-direction: column;
`;

const Text = styled.span`
  font-size: 16px;
  border: 1px solid black;
`

const App = () => {
  return (
    <SharedWrapper>
      <TextWrapper>
        <Text>First</Text>
      </TextWrapper>
      <TextWrapper>
        <Text>Second</Text>
      </TextWrapper>
      <TextWrapper>
        <Text>Third</Text>
      </TextWrapper>
    </SharedWrapper>
 );
};

export default App;

// .chXQHk {
//  padding:16px;
//  margin:16px;
//  display:-webkit-box;
//  display:-webkit-flex;
//  display:-ms-flexbox;
//  display:flex;
//  -webkit-align-items:center;
//  -webkit-box-align:center;
//  -ms-flex-align:center;
//  align-items:center;
//  -webkit-box-pack:space-evenly;
//  -webkit-justify-content:space-evenly;
//  -ms-flex-pack:space-evenly;
//  justify-content:space-evenly;
//  border:1px solid black;
// }
// .cxRNDp {
//  -webkit-flex-direction:column;
//  -ms-flex-direction:column;
//  flex-direction:column;
// }
// .dwAIgo {
//  font-size:16px;
//  border:1px solid black;
// }