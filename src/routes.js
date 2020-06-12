import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';

export default function Routes() {

    return(
    
    <BrowserRouter>

        <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/contact" exact component={Contact} />

        </Switch>

    </BrowserRouter>

    )
}
