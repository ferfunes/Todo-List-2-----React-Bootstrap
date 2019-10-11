import React from "react";
import PropTypes from "prop-types";

export class TodoItem extends React.Component {
	render() {
		const { title, handleDelete, handleEdit } = this.props;
		return (
			<li className="list-group-item text-capitalize d-flex justify-content-between my-2">
				<h6>{title}</h6>
				<div className="todo-icon">
					<span className="mx-2 text-succes" onClick={handleEdit}>
						<i className="fas fa-pen" />
					</span>
					<span className="mx-2 text-danger" onClick={handleDelete}>
						<i className="fas fa-trash" />
					</span>
				</div>
			</li>
		);
	}
}
TodoItem.propTypes = {
	title: PropTypes.string,
	handleDelete: PropTypes.string,
	handleEdit: PropTypes.string
};
