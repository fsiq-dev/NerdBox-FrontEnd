import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
//Views
import Home from './views/home';
import BoxesPage from './views/boxes';
import Sobre from './views/sobre';

// componentes basicos
import Layout from './components/layout';


const Routers = () => {
    return(
        <Router>
            <Switch>
                <Layout>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/boxes/:id' component={BoxesPage}/>
                    <Route exact path='/sobre' component={Sobre}/>
                </Layout>
            </Switch>
        </Router>
    )
};

export default Routers;