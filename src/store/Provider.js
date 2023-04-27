import { useReducer } from "react";
import Context from "./Context";
import todoReducer, { initialState } from './reducer'

function Provider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
}

export default Provider;