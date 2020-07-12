import React from "react";
import './Todo-List-Item.css';

export default class TodoListItem extends React.Component {

  constructor() {
    super();

    this.state = {
      important: false,
      done: false
    }

  }

  onLabelClick = () => {
    this.setState({
      done: true
    })
  }

  onExclamationClick = () => {
    this.setState({
      important: true
    })
  }

  render() {

    const { label, id } = this.props;
    const { done, important } = this.state;

    let className = "todo-list-item-label";
    if (done) className += " item-done"
    if (important) className += " item-important"

    return (
      <div  className="todo-list-item">
        <span className={className} 
          onClick={this.onLabelClick}
        >
          {label}
        </span>
        <div>
          <button
            type="button"
            className="btn btn-outline-warning todo-list-item-button"
            onClick={this.onExclamationClick}
          >
            <i className="fa fa-exclamation" />
          </button>
          <button
            type="button"
            className="btn btn-outline-danger todo-list-item-button"
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

//const TodoListItemfunc = ({ label, important = false, id }) => { };
// export default TodoListItem
