import React from 'react'
import './App-Filter.css'



const AppFilter = () => {
    return (
        <div className="SearchFilter">
            <input className = "form-control search-input" type="text" placeholder="Filter string"></input>
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

export default AppFilter;

