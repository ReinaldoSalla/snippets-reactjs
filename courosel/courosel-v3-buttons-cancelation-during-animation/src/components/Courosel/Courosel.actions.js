const moveToFirstItem = (state) => {
  return {
    ...state,
    indexesStackOrderTwo: [state.indexesStackOrderTwo[1], 0]
  };
};

const moveToSecondItem = (state) => {
  return {
    ...state,
    indexesStackOrderTwo: [state.indexesStackOrderTwo[1], 1]
  };
};

const moveToThirdItem = (state) => {
  return {
    ...state,
    indexesStackOrderTwo: [state.indexesStackOrderTwo[1], 2]
  };
};

const freeAllButtons = (state) => {
  return {
    ...state,
    isFirstButtonActivated: true,
    isSecondButtonActivated: true,
    isThirdButtonActivated: true
  };
};

const lockOnFirstButton = (state) => ({
  ...state,
  isFirstButtonActivated: true,
  isSecondButtonActivated: false,
  isThirdButtonActivated: false
});

const lockOnSecondButton = (state) => ({
  ...state,
  isFirstButtonActivated: false,
  isSecondButtonActivated: true,
  isThirdButtonActivated: false
});

const lockOnThirdButton = (state) => ({
  ...state,
  isFirstButtonActivated: false,
  isSecondButtonActivated: false,
  isThirdButtonActivated: true
})

export {
  moveToFirstItem,
  moveToSecondItem,
  moveToThirdItem,
  freeAllButtons,
  lockOnFirstButton,
  lockOnSecondButton,
  lockOnThirdButton
};