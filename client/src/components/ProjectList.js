import React from 'react';

const ProjectList = (props) => {
	const listofProjects = props.list.map((item) => {
		console.log(item)
		return (
			<button onClick={() => props.clickhandler(item._id)} 
			className="open-project" id={item._id}>{item.name} 
			<button className="del-btn">x</button></button>
		)
	})
	return (
		<div >
			{listofProjects}
		</div>
	)
}

export default ProjectList;