import React from "react";
import { ITask } from "../interfaces/Task";

import styles from "./TaskList.module.css";

interface Props {
  taskList: ITask[];
}

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length !== 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            <div>
              <h4>{task.title}</h4>
              <p>Prioridade: {task.priority}</p>
            </div>
            <div>
              <i className="bi bi-pencil"></i>
              <i className="bi bi-trash"></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não tem tarefa</p>
      )}
    </>
  );
};

export default TaskList;
