import React from 'react'

const ProjectList = (props) => {
    const listofProjects = props.list.map((item) => {
        return (
            <span>{item.name}</span>
        )
    })
    return (
        <div >
            {listofProjects}
        </div>
    )
}

export default ProjectList