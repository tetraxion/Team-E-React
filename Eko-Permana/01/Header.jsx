import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav style={styles.navbar}>
                <div style={styles.container}>
                    <h5 style={styles.logo}>Test</h5>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}>
                            <a href="#item" style={{ ...styles.navLink, ...styles.navLinkHover }}>
                                Item
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

let styles = {
    navbar: {
        backgroundColor: '#cccccc',
        padding: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        maxWidth: '700px',
        margin: '0 auto',
    },
    logo: {
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    navList: {
        display: 'flex',
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    navItem: {
        margin: '0 1rem',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    },
    navLinkHover: {
        color: '#999',
    },
}

export default Header
