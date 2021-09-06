import React, { useState, useContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const initialState = {
    quoteData: [],
    total: 0
  };

  const toggleType = () => {
    setIsMonthly(!isMonthly);
  };

  const addAddon = item => {
    dispatch({ type: 'ADD_ADDON', payload: item });
  };

  const removeAddon = item => {
    dispatch({ type: 'REMOVE_ADDON', payload: item });
  };

  const [addonState, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        isMonthly,
        toggleType,
        ...addonState,
        addAddon,
        removeAddon
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
