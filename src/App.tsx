import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

import styles from "./App.module.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { ITask } from "./interfaces/Task";
import Modal from "./components/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    // incluir checagem do banco
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      //Exibe
      modal!.classList.remove("hide");
    } else {
      // esconde modal
      modal!.classList.add("hide");
    }
  };

  const editTask = (): void => {
    hideOrShowModal(true);
  };
  return (
    <div>
      <Modal
        children={<TaskForm btnText="Editar Tarefas" taskList={taskList} />}
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>Qual a tarefa?</h2>

          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
