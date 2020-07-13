import React from 'react';

import './App-Header.css'

export default class AppHeader extends React.Component {


    render() {

        const doneCount = this.props.doneCount
        const openCount = this.props.openCount
        const openImportantCount = this.props.openImportantCount

        return (
            <div className="app-header">
                <h1 className="text-primary">Things to do today</h1>
                <h2> {doneCount} done, {openCount} still to do, out of them {openImportantCount} are important</h2>
            </div>
        )

    }
};


