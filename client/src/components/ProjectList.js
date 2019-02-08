import React from 'react';

const ProjectList = (props) => {
	const listofProjects = props.list.map((item) => {
		console.log(item)
		return (
			<div className="project-item">
			<button onClick={() => props.clickhandler(item._id)} className="open-btn" id={item._id}>{item.name}</button>
			<button onClick={() => props.clickhandler2(item._id)} className="del-btn" id={item._id}> X </button>
			</div>
		)

	})
	return (
		<div >
			{listofProjects}
		</div>
	)
}

export default ProjectList;