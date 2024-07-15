function Footer({ currentView, setCurrentView }) {
    return (
        <footer className="footer">
            {currentView == 'home' && <a className="uk-link-muted uk-text-small" onClick={() => setCurrentView('about')}>About</a>}
            {currentView == 'about' && <a className="uk-link-muted uk-text-small" onClick={() => setCurrentView('home')}>Home</a>}
        </footer>
    );
}

export default Footer;