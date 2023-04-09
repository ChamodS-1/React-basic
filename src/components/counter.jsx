import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["1", "2", "3"],
   
  };

  handleCount= () =>{
    //this.state.count+=1;
    this.setState({count:this.state.count+1})
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.classChange()}>{this.onclickCount()}</span>
        <button
          onClick={this.handleCount}
          className="btn btn-secondary btn-lg"
        >
          Increment
        </button>
        {this.selected()}
      </React.Fragment>
    );
  }

  onclickCount() {
    if (this.state.count == 0) {
      return <h5>Zero</h5>;
    } else {
      return <h5>{this.state.count}</h5>;
    }
  }



  classChange() {
    let classe = "badge m-2 badge-";
    classe += this.state.count === 0 ? "warning" : "primary";
    return classe;
  }

  selected() {
    if (this.state.tags.length === 0) {
      return <p>Empty Array</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map((items) => (
            <li key={items}>{items}</li>
          ))}
        </ul>
      );
    }
  }
}

export default Counter;
