import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>Qual a tarefa?</h2>
          <p>Formulário</p>
        </div>
        <div>
          <h2>Tarefas</h2>
          <p>Lista</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
