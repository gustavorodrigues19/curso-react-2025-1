import { Component } from "react";

export default class Relogio extends Component {
  constructor(props) {
    super(props);
    this.state = { hora: new Date(), counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.setState({ hora: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleClick() {
    // this.setState((prevState) => ({
    //   counter: prevState.counter + 1,
    // }));
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Click me</button>
        <h3>{this.state.counter}</h3>
        <h1>Hora atual:{this.state.hora.toLocaleTimeString()}</h1>
      </>
    );
  }
}
