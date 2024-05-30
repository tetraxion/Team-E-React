import React from 'react'
import "./App.css"
class Headd extends React.Component{

    render(){
        return(
            <div style={styles.ctn}>
                <h1>Halo saya adalah header</h1>
            </div>
        )
    }
}

let styles = {
    ctn: {backgroundColor: 'black', margin: '0px', padding:'0px'}
}

export default Headd