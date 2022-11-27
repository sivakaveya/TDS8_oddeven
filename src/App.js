import './App.css';
import React, { Component } from 'react';
// import styled from 'styled-components'

class App extends Component {

  constructor() {
    super()
    this.state = {
      number: '',
      odd_even:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }


  //Funxtion to handle the change in input and update the state
  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
    // console.log(this.state.gender)
  }

  //function after the form is submitted
  handleSubmit(event) {
    alert(
      'Number: ' + this.state.number 
    );
    event.preventDefault();
    if (this.state.number==='' || isNaN(this.state.number)){
      alert('Number is invalid!')
    }
    else{
      let number=parseFloat(this.state.number);
      if (number%2===0){
        this.setState({odd_even:'Even'});
      }
      
      else{
        this.setState({odd_even:'Odd'});
      }
    }
  }
    

  //function to increase the age
  // handlePlus(e) {
  //   e.preventDefault();
  //   this.setState(prevState => {
  //     return {
  //       age: prevState.age + 1
  //     }
  //   })
  // }

  //funtcion to decrease the age
  // handleMinus(e) {
  //   e.preventDefault();
  //   this.setState(prevState => {
  //     return {
  //       age: prevState.age - 1
  //     }
  //   })
  //   console.log(this.state.age);
  // }


  render() {
    return (
      <div className='box'>
        <form >
          <h2>ODD EVEN
          </h2>
          <br />


          <label>
          <span style={{marginRight:10}}>Number: </span> 
            <input
              type="text"
              className='inputt'
              value={this.state.number}
              name="number"
              placeholder="Enter a number"
              onChange={this.handleChange}
            />
          
          </label>



          <br />


          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <p>
        {this.state.odd_even===''?
        ''
        :'The entered Number is: '+this.state.odd_even+'.'
        }
        </p>
      </div>

    )
  }
}

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

export default App;
