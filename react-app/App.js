import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }
  }
  render() {
    return (
      <>
        <div className='field'>{this.state.counter}</div>
        <button onClick = {this.plus} className='button green'></button>
        <button onClick = {this.refresh} className='button yellow'></button>
        <button onClick = {this.minus} className='button red'></button>
      </>
    )
  }
  plus = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  minus = () => {
    this.setState({
      counter: this.state.counter -1
    })
  }
  refresh = () => {
    this.setState({
      conter: this.state.counter = 0
    })
  }
}

export default App;
