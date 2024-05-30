import { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer style={styles.footer}>
                <div>Made with ❤️</div>
            </footer>
        );
    }
}

const styles = {
    footer: {
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        height: "52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#eee"
    }
};

export default Footer;