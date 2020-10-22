import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Content from './components/Content';
import Forms from './components/Forms/Forms';
import Palette from './components/Palette/Palette';


function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapp'>
                <div className='app-content'>
                    <Content />
                    <Route path='/forms' component={Forms} />
                    <Route path='/palette' component={Palette} />
                    {/* <Navlink /> */}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
