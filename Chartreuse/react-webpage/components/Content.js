import { Component } from "react";

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p style={styles.p}>{this.props.name}: {this.props.text}</p>
        );
    }
}

const styles= {
    p: {
        border: "1px solid royalblue",
    }
};

export default Content;