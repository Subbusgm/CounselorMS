import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; {new Date().getFullYear()} Counsellor Management System</p>
            <p>All rights reserved.</p>
        </footer>
    );
};

const footerStyle: React.CSSProperties = {
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
};

export default Footer;
