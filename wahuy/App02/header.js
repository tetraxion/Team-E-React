import React from 'react'

class Header extends React.Component{

    render(){
        return(
            <header style={styles.header}>
                <h1>Welcome to App</h1>
            </header>
        )
    }
}

const styles = {
    header: {
        backgroundColor: "#282c34",
        padding: "20px",
        color: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
};

export default Header

