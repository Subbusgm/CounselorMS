import React from 'react';
import Header from './components/Header';
import Taskbar from './components/Taskbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div style={appStyle}>
            <Header />
            <Taskbar />
            <MainContent />
            <Footer />
        </div>
    );
};

const appStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
};

export default App;
