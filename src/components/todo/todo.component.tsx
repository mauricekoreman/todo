import { FC } from "react";
import { TodoInterface } from "../../helpers/interfaces";

import "./todo.styles.scss";

interface Props {
  el: TodoInterface;
  deleteElement(todoId: string): void;
}

const Todo: FC<Props> = ({ el, deleteElement }: Props) => {
  return (
    <li className={"todo__list__el"}>
      <span>{el.text}</span>
      <button onClick={() => deleteElement(el.id)} className={"todo__list__el__btn"}>
        X
      </button>
    </li>
  );
};

export default Todo;

