import { useContext } from "react";
import ToDoContext from "./ToDoProvider";

const useToDos = () => {
  const context = useContext(ToDoContext);

  return context;
};
export default useToDos;






// import { useContext } from "react";
// import ToDoContext from "./ToDoProvider";

// export const useToDos = () => {
//   const context = useContext(ToDoContext);

//   return context;
// };
