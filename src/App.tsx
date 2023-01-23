import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

import styles from "./App.module.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { ITask } from "./interfaces/Task";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>Qual a tarefa?</h2>

          <TaskForm btnText="Criar Tarefa" />
        </div>
        <div>
          <h2>Tarefas</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
