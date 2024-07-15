function Footer({ currentView, setCurrentView }) {
    return (
        <footer className="footer">
            {currentView == 'home' && <a className="uk-text-medium" onClick={() => setCurrentView('about')}>About</a>}
            {currentView == 'about' && <a className="uk-text-medium" onClick={() => setCurrentView('home')}>&lt; Home</a>}
        </footer>
    );
}

export default Footer;