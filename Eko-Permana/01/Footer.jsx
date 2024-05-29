import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer style={styles.footer}>
                <div style={styles.container}>
                    <p style={{ ...styles.text, ...styles.textBold }}>Test</p>
                    <p style={{ ...styles.text, ...styles.copyright }}>&copy; 2024</p>
                    <div>
                        <a href="#item" style={styles.link}>
                            Item
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

let styles = {
    footer: {
        backgroundColor: '#cccccc',
        padding: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100px',
    },
    container: {
        maxWidth: '700px',
        margin: '0 auto',
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        margin: '0.5rem',
    },
    textBold: {
        fontWeight: 'bold',
    },
    copyright: {
        fontSize: '0.8rem',
    },
    link: {
        color: '#999',
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        border: '1px solid #ddd',
        borderRadius: '4px',
    },
}

export default Footer
