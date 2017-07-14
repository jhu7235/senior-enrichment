import React from 'react';
import store from '../store';
import { getCampusStudentsTC } from '../reducers';

export default class SingleCampus extends React.Component {
	constructor() {
		super();
		this.state = store.getState();
		console.log('SINGLE CAMPUS CONSTRUCTOR', this.state)
	}

	componentDidMount () {
		// console.log('COMPONENT DID MOUNT, SINGLECAMPUS');
		this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
		const campusId = this.props.match.params.campusId;
		store.dispatch( getCampusStudentsTC(campusId) );
  }

  

	render() {
		const campus = this.state.campuses;
		const selectedStudents = this.state.selectedStudents;
		console.log('RENDERING SINGLE STUDETN', selectedStudents)
		// console.log('RENDERING SIGNLE CAMPUS', campus, students);
		// console.log(this.state);
		return (
			<div className="container">
				<h3>{campus.name}</h3>
				<table>
					<tbody>
						<tr>
							<th>Student</th>
							<th>ID </th>
						</tr>
							{selectedStudents.map( student => {
								return (
										<tr key={student.id}>
											<td >{student.name}</td>
											<td>{student.id}</td>
										</tr>
									);
								})}
					</tbody>
				</table>
			</div>
		);
	}
}
