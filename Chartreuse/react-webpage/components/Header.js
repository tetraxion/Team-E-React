import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header style={styles.header}>
                <h1 style={styles.h1}>Information!</h1>
            </header>
        );
    }
}

const styles = {
    header: {
        backgroundColor: "papayawhip",
        color: "tomato",
        textAlign: "center",
        height: "60px",
        marginBottom: "30px"
    },
    h1: {
        margin: "0"
    }
};

export default Header;