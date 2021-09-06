const reducer = (state, action) => {
  if (action.type === 'ADD_ADDON') {
    let tempData = [...state.quoteData];
    tempData.push(action.payload);
    return {
      ...state,
      quoteData: [...tempData]
    };
  }

  if (action.type === 'REMOVE_ADDON') {
    let tempData = state.quoteData.filter(
      quoteItem => quoteItem.id !== action.payload
    );
    return {
      ...state,
      quoteData: [...tempData]
    };
  }

  return state;
};

export default reducer;
