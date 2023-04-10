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

  handleCountDecrease= () =>{
    //this.state.count+=1;
    if (this.state.count===0){
      return <h1>gjghj</h1>
    }else{
      this.setState({count:this.state.count-1})
    }
    
  }

  render() {
    return (
      <React.Fragment>
       <div>
        <button
          onClick={this.handleCount}
          className="btn btn-secondary btn-lg m-2"
        >
          Increment
        </button>
        <button onClick={this.handleCountDecrease} className="btn btn-primary btn-lg m">Decrement</button>
        </div>
        <span className={this.classChange()}>{this.onclickCount()}</span>

      </React.Fragment>
    );
  }

  onclickCount() {
    if (this.state.count === 0) {
      return 'Zero';
    } else {
      return this.state.count;
    }
  }


  changeClss(){
    return this.state.count===0 ? 'testClass' : 'testClass1';
  }

  classChange() {
    let classe = "badge m-2 class1 badge-" ;
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
