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
    },
    h1: {
        margin: "0"
    }
};

export default Header;