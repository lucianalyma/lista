import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  state = {
    tarefa: "",
    listaTarefas: []
  };

  buscarTarefa = (event) => {
    this.setState({
      tarefa: event.target.value
    });
  };

  add = () => {
    this.setState({
      listaTarefas: this.state.listaTarefas.concat(this.state.tarefa)
    });
  };

  render() {
    return (
      <div>
        <h1>Lista de Tarefas</h1>
        <input
          onChange={this.buscarTarefa}
          value={this.state.tarefa}
          type="text"
          placeholder="Insira um valor"
        />

        <button onClick={this.addTarefa}>Adicionar</button>

        {this.state.listaTarefas.map((item) => (
          <div key={item.id}>
            <p>{item.tarefa}</p>
            <button onClick={() => this.removerTarefa(item.id)}>
              Remover tarefa
            </button>
          </div>
        ))}
      </div>
    );
  }
}
