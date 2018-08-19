import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 3},
      {id: 3, value: 4},
      {id: 4, value: 0},
      {id: 5, value: 2},
    ]
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
    console.log('Event handler called', counterId);
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    counters[index] = {...counter};
    counters[index].value++;

    console.log(this.state.counters[0]);
    this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters })
    console.log('reset');
  }

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter((c) => c.value>0).length}/>
        <main className="container">
          <Counters counters={this.state.counters}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDelete={this.handleDelete}
                    />
        </main>
      </React.Fragment>
      
    );
  }
}

export default App;