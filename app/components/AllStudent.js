import React from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';

export default class AllStudent extends React.Component {

	constructor() {
		super();
		this.state = {
			students: []
		};
	}

  componentDidMount () {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => this.setState({ students }));
  }

  render() {
		const students = this.state.students;
		return (
			<div>
				{students.map( student => {
					return (
						<div className="col-3-md" key={ student.id }>
							<Link className="thumbnail" to={` /cmapuses/${student.id} `}>
								<img src="{ student.imageUrl }" />
								<p>{ student.name }</p>
							</Link>
						</div>
						);
				})}
			</div>
		);
  }
}
