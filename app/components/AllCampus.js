import React from 'react';
import {Link } from 'react-router-dom';
import store from '../store';
import { deleteCampusTC } from '../reducers';
const tag = 'IN ALLCAMPUS';

export default class AllCampus extends React.Component {

	constructor() {
		super();
		this.state = store.getState();
	}

	componentDidMount () {
		this.unsubscribe = store.subscribe( () => this.setState(store.getState()));
	}

	handleDelete(event) {
		event.preventDefault();
		event.stopPropagation();
		const campusId = event.target.value;
		console.log('HANDLE DELETE', campusId);
		store.dispatch( deleteCampusTC(campusId) );
	}

  render() {
		const campuses = this.state.campuses;
		// console.log(tag, 'RENDERING', campuses);
		return (
			<div className="all-campuses">
				<div className="add-campus">
					<Link to={'./addcampus'}><button> + </button></Link>
				</div>
					{campuses.map( campus => {
						return (
							<div className="col-md-3 col-sm-6 col-xs-12" key={ campus.id }>
								<Link className="thumbnail" to={`/campuses/${campus.id}`}>
									<img src={ campus.imageUrl } className="img-fluid logo" alt="Responsive image" />
										<div className="text-to-inline-block"><p>{ campus.name }</p></div>
										<button
										value={ campus.id }
										className="btn btn-danger pull-right"
										onClick={this.handleDelete}
										>x</button>
								</Link>
							</div>
						);
					})}
				</div>

		);
	}
}

