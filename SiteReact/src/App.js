import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Historia from './components/Historia';
import FaleConosco from './components/FaleConosco';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/historia" component={Historia} />
                <Route path="/faleconosco" component={FaleConosco} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;