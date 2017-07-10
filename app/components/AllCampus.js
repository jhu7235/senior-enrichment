import React from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';
const tag = 'IN ALLCAMPUS';

export default class AllCampus extends React.Component {

	constructor() {
		super();
		this.state = {
			campuses: []
		};
	}

  componentDidMount () {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => this.setState({ campuses }));
  }

  render() {
		const campuses = this.state.campuses;
		console.log(tag, campuses);
		return (
			<div>
				{campuses.map( campus => {
					return (
						<div className="col-3-md" key={ campus.id }>
	            <Link className="thumbnail" to={` api/cmapuses/${campus.id} `}>
								<img src="{ campus.imageUrl }" />
								<p>{ campus.name }</p>
							</Link>
						</div>
						);
				})}
			</div>
		);
	}
}
