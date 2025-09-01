import { createContext } from 'react';
import useFetch from '../Hooks/useFetch';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const { request, fetchData, loading, error, response, jsonReturn } =
    useFetch();

  return (
    <GlobalContext.Provider
      value={{
        request,
        fetchData,
        loading,
        error,
        response,
        jsonReturn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
