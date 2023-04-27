import Context from "~/store/Context";
import { useContext } from "react";

export const useStoreTodo = () => {
  const [state, dispatch] = useContext(Context)

  return [state, dispatch]
}