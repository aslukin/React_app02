import React from "react";
import './Todo-List-Item.css';

export default class TodoListItem extends React.Component {


  render() {

    const { label, done, important, onItemDelete, onToggleDone, onToggleImportant } = this.props;

    let className = "todo-list-item-label";
    if (done) className += " item-done"
    if (important) className += " item-important"

    return (
      <div className="todo-list-item">
        <span className={className}
          onClick={onToggleDone}
        >
          {label}
        </span>
        <div>
          <button
            type="button"
            className="btn btn-outline-warning todo-list-item-button"
            onClick={onToggleImportant}
          >
            <i className="fa fa-exclamation" />
          </button>
          <button
            type="button"
            className="btn btn-outline-danger todo-list-item-button"
            onClick={onItemDelete}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

