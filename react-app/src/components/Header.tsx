import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={headerStyle}>
            <h1>Counsellor Management System</h1>
            <p>Welcome to the CMS Dashboard</p>
        </header>
    );
};

const headerStyle: React.CSSProperties = {
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
};

export default Header;
