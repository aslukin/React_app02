import React from 'react'
import './App-Filter'



const appFilter = () => {
    return (
        <div className="SearchFilter">
            <input className = "search-input" type="text" placeholder="Filter string"></input>
            <p>some text</p>
            <div className="btn-group">
                <button type="button"
                    className="btn btn-info">All</button>
                <button type="button"
                    className="btn btn-outline-secondary">Active</button>
                <button type="button"
                    className="btn btn-outline-secondary">Done</button>
            </div>
        </div>
    )
}

export default appFilter;

