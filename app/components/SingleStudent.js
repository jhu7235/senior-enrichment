import React from 'react';
import store from '../store';

export default class SingleStudent extends React.Component{
	constructor() {
		super();
		this.state = store.getState();
	}

	componentDidMount(){
		this.unsubscribe = store.subscribe( () => this.setState(store.getState()) );
	}

	handleUpdate(event) {
		store.dispatch( updateStudentTC( event.target.campus.value)); //thunk creator not written yet
	}

	render() {
		const studentId = this.props.match.params.studentId;
		const student = this.state.students.find( student => {
			console.log('ON RENDER', student.id, studentId);
			return student.id == studentId;
		});
		// console.log('SELECT RENDER', this.campuses);
		if (student) {
			return (
				<div className="container">
					<h2>{ student.name }</h2>
					<h3>Student Id</h3>
					<p>{ student.id }</p>
					<form onSubmit={this.handleUpdate.bind(this)/*Should do binding in your constructor*/}>
							<h3>Campus Id</h3>
							<select name="campus">
							{
								this.state.campuses.map( campus => {
									let selected = ''
									if (student.campusId == campus.id) selected = 'selected';
								return <option selected={selected} value={campus.id} key={campus.id}>{campus.name}</option>;
							}) }
							</select>
					</form>
					<button className="btn btn-submit" type="submit">Update</button>
				</div>
			);
		} else {
			return (<p>didn't find student</p>);
		}

	}
}
