import React from 'react'

var $ = `function`;

const ProjectList = (props) => {
    const listofProjects = props.list.map((item) => {
        return (
            // <a href="/">{item.name}</a>
            <a class="open-project" id='{item._id}' href="/edit/{item._id}">{item.name} <button class="del-btn">x</button></a>
        )
    })
    return (
        <div >
            {listofProjects}
        </div>
    )
}


export default ProjectList