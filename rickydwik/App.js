// import logo from './logo.svg';
// import './App.css';
import React from 'react';
class App extends React.Component{
  constructor(prop){
    super(prop)
    this.state = {count:0, name:'budi'}//state === property
    
  }

  handleClick(){
    this.setState({count: this.state.count +1})//state change
  }
  render(){
    return(
      <div className='rt'>
        <p>
           Halo {this.state.count} {/*menampilkan komponen */}
        </p>
        <button onClick={()=>{this.handleClick()}}> + </button>
      </div>
    )
  }
}


export default App;
