import React from 'react';
import axios from 'axios';

export default class SingleStudent extends React.Component {
	constructor() {
		super();
		this.state = {
			student: {}
		};
	}

	componentDidMount () {
		const studentId = this.params.mathc.studentId;
    axios.get(`/api/student/${studentId}`)
      .then(res => res.data)
      .then(student => this.setState({ student }));
  }

	render() {
		const student = this.state.student;
		return (
			<div>
				<table>
					<th>{student.name}</th>
					<tr>
						<td>{student.campus}</td>
						<td>{student.id}</td>
					</tr>
				</table>
			</div>
		);
	}

}
