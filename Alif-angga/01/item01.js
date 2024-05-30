import React from 'react'

class Item01 extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return (
            <div>
                <p>Halo saya adalah buah : {this.props.name} </p>
            </div>
        )
    }
}

export default Item01 // CommonJs | MS module
