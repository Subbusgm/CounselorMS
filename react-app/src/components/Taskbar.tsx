import React from 'react';

const Taskbar: React.FC = () => {
    return (
        <nav style={taskbarStyle}>
            <ul style={listStyle}>
                <li><a href="#home">Home</a></li>
                <li><a href="#students">Students</a></li>
                <li><a href="#reports">Reports</a></li>
                <li><a href="#settings">Settings</a></li>
            </ul>
        </nav>
    );
};

const taskbarStyle: React.CSSProperties = {
    backgroundColor: '#333',
    padding: '10px',
};

const listStyle: React.CSSProperties = {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-around',
    padding: 0,
    margin: 0,
};

export default Taskbar;
