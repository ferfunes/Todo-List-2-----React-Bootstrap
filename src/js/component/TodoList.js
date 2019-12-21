import React from "react";
import { TodoItem } from "./TodoItem";
import PropTypes from "prop-types";

export class TodoList extends React.Component {
	render() {
		const { items, clearList, handleDelete, handleEdit } = this.props;
		return (
			<ul className="list-group my-5">
				<h3 className="text-capitalize text-center ">todo list</h3>
				{items.map(item => {
					return (
						<TodoItem
							key={item.id}
							title={item.title}
							handleDelete={() => handleDelete(item.id)}
							handleEdit={() => handleEdit(item.id)}
						/>
					);
				})}

				<button
					onClick={clearList}
					className="btn btn-danger btn-block text-capitalize mt-5">
					clear list
				</button>
			</ul>
		);
	}
}

TodoList.propTypes = {
	items: PropTypes.string,
	clearList: PropTypes.string,
	handleDelete: PropTypes.string,
	handleEdit: PropTypes.string
};
