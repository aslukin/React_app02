import React from "react";
import { FILTER_STATUS_ALL, FILTER_STATUS_ACTIVE, FILTER_STATUS_DONE } from './../../consts'

import "./App-Filter.css";


export default class AppFilter extends React.Component {

  // state = {
  //   filterString: '',
  //   filterStatus: FILTER_STATUS_ALL
  // }

  // onFilterChange = () => {

  // }

  onAllClick = () => {
  }

  onActiveClick = () => {

  }

  onDoneClick = () => {
    return this.props.onFilterDone
  }


  render() {

    const btn1ClassName = "btn btn-info" 
    // (this.state.filterStatus === FILTER_STATUS_ALL) ? "btn btn-info" : "btn btn-outline-secondary";
    const btn2ClassName = "btn btn-outline-secondary"
    //  (this.state.filterStatus === FILTER_STATUS_ACTIVE) ? "btn btn-info" : "btn btn-outline-secondary"
    const btn3ClassName = "btn btn-outline-secondary"
    // (this.state.filterStatus === FILTER_STATUS_DONE) ? "btn btn-info" : "btn btn-outline-secondary"
    
    return (
      <div className="SearchFilter">
        <input
          className="form-control search-input"
          type="text"
          placeholder="Filter string"
        ></input>

        <div className="btn-group">
          <button type="button" className={btn1ClassName}
            onClick={this.onAllClick}>
            All
          </button>
          <button type="button" className={btn2ClassName}
            onClick={this.onActiveClick}>
            Active
          </button>
          <button type="button" className={btn3ClassName}
            onClick={this.onDoneClick}>
            Done
          </button>
        </div>
      </div>
    );
  }

}

