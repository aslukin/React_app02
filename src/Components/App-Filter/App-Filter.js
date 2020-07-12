import React from "react";
import "./App-Filter.css";

export default class AppFilter extends React.Component {



  render() {
    
    return (
      <div className="SearchFilter">
        <input
          className="form-control search-input"
          type="text"
          placeholder="Filter string"
        ></input>
        
        <div className="btn-group">
          <button type="button" className="btn btn-info">
            All
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Active
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Done
          </button>
        </div>
      </div>
    );
    }

}

