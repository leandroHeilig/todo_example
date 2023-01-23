import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

import { ITask } from "../interfaces/Task";

import styles from "./TaskForm.module.css";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [priority, setPriority] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = { id, title, priority };
    setTaskList!([...taskList, newTask]);

    setTitle("");
    setPriority(0);

    console.log(taskList);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setPriority(parseInt(e.target.value));
    }
    //console.log(title);
    //console.log(priority);
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="Title">Título da Tarefa:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="priority">Prioridade da Tarefa:</label>
        <input
          type="text"
          name="priority"
          placeholder="Prioridade da tarefa"
          onChange={handleChange}
          value={priority}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
