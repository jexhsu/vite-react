import React, { Component } from 'react';

// resource : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.num = 0;
    console.log('Component is being constructed');
  }

  static getDerivedStateFromProps() {
    console.log('Component is receiving new props');
    return null;
  }

  componentDidMount() {
    console.log('Component has been mounted');
    this.num
      ? console.log('%c>>>>>>>>>>mounting<<<<<<<<<<<<', 'color : green')
      : (this.num += 1);
  }

  shouldComponentUpdate() {
    console.log('Should component update?');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('Before the DOM is updated');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component has been updated');
    console.log('Previous props:', prevProps);
    console.log('Previous state:', prevState);
    console.log('Snapshot:', snapshot);
    console.log('%c>>>>>>>>>>updating<<<<<<<<<<<<', 'color : pink');
  }

  componentWillUnmount() {
    console.log('Component is about to be unmounted');
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log('Component is being rendered');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;
