import { nanoid } from "nanoid";
import { FC, useState } from "react";

import Todo from "../../components/todo/todo.component";
import InputTodo from "../../components/input-todo/input-todo.component";

import { TodoInterface } from "../../helpers/interfaces";

import "./home.styles.scss";

const Home: FC = () => {
  const [todos, setTodos] = useState<Array<TodoInterface>>([
    { id: nanoid(), text: "item" },
    { id: nanoid(), text: "mij dan" },
  ]);

  const addTodo = (todo: TodoInterface) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (todoId: string) => {
    setTodos(todos.filter((item) => item.id !== todoId));
  };

  return (
    <div className='home__container'>
      <ul className={"todo__list"}>
        {todos.map((el, i) => (
          <Todo el={el} key={i} deleteElement={removeTodo} />
        ))}
      </ul>
      <InputTodo className={"home__todo-input"} submit={addTodo} />
    </div>
  );
};

export default Home;

