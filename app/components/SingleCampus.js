import React from 'react';
import axios from 'axios';

export default class SingleCampus extends React.Component {
	constructor() {
		super();
		this.state = {
			campus: {}
		};
	}

	componentDidMount () {
		const campusId = this.params.mathc.campusId;
    axios.get(`/api/campus/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({ campus }));
  }

	render() {
		const campus = this.state.campus;
		return (
			<div>
				<table>
					<th>{campus.name}</th>
					<tr>
						<td>{campus.campus}</td>
						<td>{campus.id}</td>
					</tr>
				</table>
			</div>
		);
	}
}
