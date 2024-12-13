import React from 'react';

const MainContent: React.FC = () => {
    return (
        <main style={mainContentStyle}>
            <h2>Welcome to the Counsellor Management System</h2>
            <p>Here, you can manage students, track progress, and generate reports efficiently.</p>
        </main>
    );
};

const mainContentStyle: React.CSSProperties = {
    padding: '20px',
    textAlign: 'center',
};

export default MainContent;
