import './App.css';

import { useState } from "react";

import Header from './components/header';
import HomeView from './components/home-view';
import AboutView from './components/about-view';
import Footer from './components/footer';

function App() {
    const [currentView, setCurrentView] = useState('home');

    return (
        <div className="App">
            {currentView == 'home' && <HomeView />}
            {currentView == 'about' && <AboutView />}
            <Footer currentView={currentView} setCurrentView={setCurrentView} />
        </div>
    );
}

export default App;
