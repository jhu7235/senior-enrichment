import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import store from '../store';

const initialState = {
	studentEntry: '',
	campuses: [],
	students: [],
	selectedStudents: [],
	selectedCampus: {},
};

// ACTION TYPE
const ADD_STUDENT = 'ADD_STUDENT';
const UPDATE_STUDENT_ENTRY = 'UPDATE_STUDENT_ENTRY';
const ADD_CAMPUS = 'ADD_CAMPUS';
const FETCH_CAMPUSES = 'FETCH_CAMPUSES';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const FETCH_STUDENT_FOR_CAMPUS = 'FETCH_STUDENT_FOR_CAMPUS';
const FETCH_STUDENT = 'FETCH_STUDENT';
const FETCH_STUDENTS = 'FETCH_STUDENTS';
const DELETE_STUDENT = 'DELETE_STUDENT';

// ACTION CREATOR
// const actionName = (payload) => ( {type: *string*, payload});
const addStudent = (student) => ({ type: ADD_STUDENT, student });
const addCampus = (campus) => ({ type: ADD_CAMPUS, campus });
const fetchCampuses = (campuses) => ( {type: FETCH_CAMPUSES, campuses} );
const deleteCampus = campusId => ( {type: DELETE_CAMPUS, campusId});
const fetchStudent = (student) => ( {type: FETCH_STUDENT, student} );
const fetchStudents = students => ( {type: FETCH_STUDENTS, students} );
const deleteStudent = studentId => ( {type: DELETE_STUDENT, studentId} );
const getCampusStudents = (campusId, students) => ({ type: FETCH_STUDENT_FOR_CAMPUS, payload: { students, campusId } });

// REDUCER!!!!
export default function(state = initialState, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {

		case ADD_STUDENT:
			// console.log('ADD STUDENT REDUCER');
			newState.studentEntry = '';
			newState.students = [newState.students, action.student];
			return newState;

		case UPDATE_STUDENT_ENTRY:
			newState.studentEntry = action.studentEntry;
			return newState;

		case ADD_CAMPUS:
			newState.campus = [...newState.campus, newState.campus];
			return newState;

		case FETCH_CAMPUSES:
			newState.campuses = action.campuses;
			return newState;

		case DELETE_CAMPUS:
			newState = newState.campuses.filter( campus => {
				return campus.id != action.campusId;
			});
			return newState;

		case FETCH_STUDENT:
			// console.log('FETCH STUDENT');
			newState.selectedStudent = action.selectedStudent;
			return newState;

		case FETCH_STUDENT_FOR_CAMPUS:
			console.log('FETCH_STUDENT_FOR_CAMPUS', action);
			newState.selectedStudents = action.payload.students;
			return newState;

		case FETCH_STUDENTS:
			// console.log('FETCH STUDENTS');
			newState.students = action.students;
			return newState;

		case DELETE_STUDENT:
			// console.log('DELETE STUDENT');
			newState.students = newState.students.filter( student => {
				return student.id != action.studentId;
			});
			return newState;

    default: return newState;
  }
}

// THUNK CREATOR
export const submitAddStudent = ( data ) => (dispatch) => {
	axios.post('/api/students', data);
};

export const fetchCampusesTC = () => (dispatch) => {
	axios.get(`/api/campuses`)
	  .then(res => res.data)
	  .then(campuses => {
			// console.log('COMPONENT DID MOUNT', campuses);
			store.dispatch(fetchCampuses(campuses));
		});
};

export const setSelectedStudentTC = (student) => (dispatch) => {
	store.dispatch(fetchStudent(student));
};

export const deleteStudentTC = (studentId) => (dispatch) => {
	// console.log(`/api/students/${studentId}`);
	axios.delete(`/api/students/${studentId}`)
		.then( () => store.dispatch(deleteStudent(studentId)));
};

export const fetchStudentsTC = () => (dispatch) => {
	axios.get('/api/students')
		.then( res => store.dispatch(fetchStudents(res.data)))
		.catch( console.log('ERROR FETCHING STUDENTS TC'));
};

export const deleteCampusTC = (campusId) => (dispatch) => {
	axios.delete(`/api/campuses/${campusId}`)
		.then( () => store.dispatch(deleteCampus(campusId	)));
};

export const getCampusStudentsTC = (campusId) => (dispatch) => {
  axios.get(`/api/campuses/${campusId}`)
    .then( res => {
			console.log('GET CAMPUS STUDENTS TC', res.data);
			store.dispatch( getCampusStudents(campusId, res.data)
    );})
		// console.log('SINGLECAMPUS, SETTING STATE', campus, students);
		.catch( console.log("ERROR FETCHING CAMPUS'S STUDENTS") );

};

export const addCampusTC = ( campusInfo ) => (dispatch) => {
	console.log('ADD CAMPUS TC')
	axios.post('/api/campuses/add', {campusInfo} )
		// expect to get campus object back
		.then( res => store.dispatch());
		// update store via diapatch
};
