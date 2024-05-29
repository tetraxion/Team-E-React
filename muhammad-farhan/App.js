import React from 'react';


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {hitung: 0} 
    }

    click(){
        this.setState({hitung: this.state.hitung + 1}) 
    }

    render(){
        return(
          <div className='main'>
           <div className='content'>
             <h1>Hello {this.state.hitung}</h1> 

            <button className='styleButton' onClick={() => {this.click()}}> + </button> 
           </div>
          </div>

        )
    }
}


export default App;
