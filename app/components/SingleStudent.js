import React from 'react';

export default function SingleStudent (props) {
	if (props.student) {return (
		<div>
			<h2>{ props.student.name}</h2>
			<table>
				<tr>
					<th>Campus Id</th>
					<th>Student Id</th>
				</tr>
				<tr>
					<td>{ props.student.campusId}</td>
					<td>{ props.student.id}</td>
				</tr>
			</table>
		</div>
		);}
	else {return (<div> no students to load </div>);}
}
