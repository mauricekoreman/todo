import { FC, FormEvent, useRef } from "react";

import { nanoid } from "nanoid";

import "./input-todo.styles.scss";

interface Props {
  className?: string;
  submit(todo: object): void;
}

const InputTodo: FC<Props> = ({ className, submit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (inputRef.current?.value) {
      submit({ id: nanoid(), text: inputRef.current?.value });
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className={`input__todo ${className}`}
        type='text'
        placeholder='Some task...'
      />
    </form>
  );
};

export default InputTodo;

