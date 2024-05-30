import React from 'react'

class Item01 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>- Region : {this.props.name} </p>
            </div>
        )
    }
}

export default Item01