import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <ShoppingListContainer/>
    </div>
  );
}



class ShoppingListContainer extends React.Component {
  constructor(props) {
  super(props)
  this.state = { amount1: 0, amount2: 0, amount3: 0, amount4: 0 }
  this.AddAmount1 = this.AddAmount1.bind(this);
  this.AddAmount2 = this.AddAmount2.bind(this);
  this.AddAmount3 = this.AddAmount3.bind(this);
  this.AddAmount4 = this.AddAmount4.bind(this);
}
  AddAmount1() {
    var newAmount = this.state.amount1 + Math.floor((Math.random() * 5) + 1);
    this.setState({ amount1:  newAmount})
}
  AddAmount2() {
    var newAmount = this.state.amount2 + Math.floor((Math.random() * 5) + 1);
    this.setState({ amount2: newAmount})
}
  AddAmount3() {
    var newAmount = this.state.amount3 + Math.floor((Math.random() * 5) + 1);
    this.setState({ amount3: newAmount})
}
  AddAmount4() {
    var newAmount = this.state.amount4 + Math.floor((Math.random() * 5) + 1);
    this.setState({ amount4: newAmount})
}
  render () {
    return (
      <div>
        <ShoppingListIntroduction/>
        <br></br>
        <br></br>
        <div>
          <Product amount={this.state.amount1} unit="pcs" productName="carrots"/>
          <Product amount={this.state.amount2} unit="pcs" productName="strawberries"/>
          <Product amount={this.state.amount3} unit="kg" productName="yogurt"/>
          <Product amount={this.state.amount4} unit="x" productName="beer"/>
        </div>
        <br></br>
        <br></br>
        <div>
          <ProductButton productName="carrots" onAmountChange={this.AddAmount1}/>
          <ProductButton productName="strawberries" onAmountChange={this.AddAmount2}/>
          <ProductButton productName="yogurt" onAmountChange={this.AddAmount3}/>
          <ProductButton productName="beer" onAmountChange={this.AddAmount4}/>
        </div>
      </div>
    );
  }
}

function ShoppingListIntroduction() {
  return (
    <div>
      Create react app shopping list<br></br>
      The best shopping list,now built with create-react-app
    </div>
  );
}

function Product(props) {
  return (
    <div>
      <span>{props.amount}{props.unit}</span> {props.productName}
    </div>
  );
}

class ProductButton extends React.Component {
  constructor(props) {
  super(props)
  this.AddAmount = this.AddAmount.bind(this);
}
  AddAmount(e){
    this.props.onAmountChange();
}
  render () {
    return(
      <button onClick={this.AddAmount}>
        Add more {this.props.productName}!
      </button>
    )
  }
}

export default App;
