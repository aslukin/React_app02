import React from 'react';

import './App-Header.css'

export default class AppHeader extends React.Component {
    

    render(){

        return(
            <div className="app-header">
                <h1 className="text-primary">Things to do today</h1>
                <h2> X done, Y still to do</h2>
            </div>
        )
    
    }
};


