import React from 'react';
import store from '../store';
import { submitAddStudent } from '../reducers';
// use react with redux

export default class SingleStudent extends React.Component {
	constructor() {
		super();
		this.state = store.getState();
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.handleChange = this.handleChange.bind(this);
		console.log('ADD STUDENT', this.state.campuses);
	}

	componentDidMount () {
		this.unsubscribe = store.subscribe( () => this.setState(store.getState()));
		//don't forget to unsubscribe when unmounting
	}

	handleSubmit(event) {
		console.log('COMPONENT HANDLE SUBMIT');
		event.preventDefault();
		store.dispatch(
			submitAddStudent({
				student: event.target.student.value,
				campusId: event.target.campus.value
			})
		);
		this.props.history.push('/home');
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<h3>Add a Student</h3>
					<hr />
					<h4>Student</h4>
					<input name="student" onChange={this.props.handleChange}  />
					<h4>Campus</h4>
					<select name="campus">
						{this.state.campuses.map(
							campus => (<option value={campus.id} key={campus.id}>
							{campus.name}
							</option>))}
					</select>
						<button className="btn btn-submit" type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

