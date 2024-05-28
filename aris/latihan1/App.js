import React from "react";
import './App.css';

class App extends React.Component {
  constructor(param){
    super(param);
    this.state ={count: 0}
  }

handleClick(){
  this.setState({count: this.state.count+1})
}

hiya(){
  let ret =""
  
  console.log(typeof(parseInt(this.state.count)))
  for (let index = 0; index < parseInt(this.state.count); index++) {
    ret = ret + "hiya ..."
    
  }
  return ret;
}

render(){
  return(
    <div className="container-screen">
        <div className="container-main">
          <p>{this.state.count}</p>
          <button onClick={()=>{this.handleClick()}}>tambahkan count</button>
          
          <p className="haah">{`${this.hiya()}`}</p>
        </div>
    </div>
  )
}

}

export default App;
