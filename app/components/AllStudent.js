/*disable-eslint*/
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { deleteStudentTC } from '../reducers';
import store from '../store';

export default class AllStudent extends React.Component {

	constructor() {
		super();
		this.state = store.getState();
		this.handleDelete = this.handleDelete.bind(this);
	}

  componentDidMount () {
		this.unsubscribe = store.subscribe(
			() => this.setState(store.getState())
			);
  }

  handleDelete(event) {
		console.log('ON DELETES');
		event.preventDefault();
		event.stopPropagation();
		store.dispatch( deleteStudentTC( event.target.value ) );
		// this.unsubscribe = store.subscribe( () => this.setState(store.getState()))
  }

  render() {
		const students = this.state.students;
		return (
			<div className="allstudent" id="all-student">
				<div className="addstudent">
					<Link to={'/addstudent'}>
						<button className="btn btn-success pull-right" id="addstudent"> + </button>
						</Link>
				</div>
				{students.map( student => {
					return (
						<div className="col-md-3 col-sm-6" key={ student.id }>
							<Link className="thumbnail" to={`/students/${student.id}`}>
								<img src={ student.imageUrl } />
								<div className="text-to-inlin-block"><p>{ student.name }</p></div>
								<button
								value={ student.id }
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

