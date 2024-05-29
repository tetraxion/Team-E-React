import React from 'react';
import Item01 from './item01' // Import wajib
import Headd from './header';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {output: true}
  }

  handleClick(){
    this.setState({output: !this.state.output})
  }
  

  render(){
    let abc = [
      {name: 'Appel', id: 1},
      {name: 'manggo', id: 2},
      {name: 'papaya', id: 3},
      {name: 'star fruit', id: 4},
      {name: 'banana', id:5},
    ]

    return(
     <div>
      <Headd />
       <div style={styles.in}>
          <div style={styles.inC}>

        {this.state.output? 
        abc.map((item) => { return(

        <p style={styles.inP}> 
        
        <Item01 name={item.name}/>  {/* <==== Pemanggilan component lain */}
        
        </p>
      )
                }) : ""}
      </div>
      <button onClick={() => {this.handleClick()}}> Ubah State </button>
      </div>

      <Headd />
     </div>
    )
  }
}

let styles = {
  in: {display: 'flex', justifyContent: 'center'},
  inC: {display: 'flex', border: '1px solid red', width: '50%'},
  inP: {padding: '10', color: 'red'},
}

export default App