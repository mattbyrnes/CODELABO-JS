import React from 'react'

var $ = `function`;

const ProjectTitle = (props) => {
    const titleOfProject = props.list.map((item) => {
        return (
            <a href="/">{item.name}</a>
        )
    })
    return (
        <div >
            {titleOfProject}
        </div>
    )
}

export default ProjectTitle