import React from 'react';
import store from '../store';
import { addCampusTC } from '../reducers';

export default class AddCampus extends React.Component {
	constructor () {
		super();
		this.state = store.getState();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.unsubscribe = store.subscribe( () => this.setState(store.getState()));
	}

	handleSubmit(event) {
		this.unsubscribe1 = store.subscribe( () => this.setState(store.getState()));
		const campusName = event.target.campusName.value;
		const imageUrl = event.target.image.value;
		store.dispatch(
			addCampusTC( {campusName: campusName, imageUrl: imageUrl })
		);
	}

	render() {
		return (
			<div className="container add-campus">
				<form onSubmit={this.handleSubmit}>
					<h3>Add a Campus</h3>
					<hr />
					<h4>Campus Name</h4>
					<input name="campusName" />
					<h4>Image</h4>
					<input name="image" />
					<button className="btn btn-submit" type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

