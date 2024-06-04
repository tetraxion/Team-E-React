import React from 'react'

class Footer extends React.Component{

    render(){
        return(
            <footer style={styles.footer}>
                <p>&copy; 2024 wahyu App</p>
            </footer>
        )
    }
}

const styles = {
    footer: {
        backgroundColor: "#282c34",
        padding: "10px",
        color: "white",
        textAlign: "center",
        boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.2)",
        position: "sticky",
        bottom: "0",
        width: "100%",
    },
};

export default Footer
