import React, { Component } from 'react';
import axios from 'axios';
import ProjectList from './ProjectList';
import Editor from './Editor';


// import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projectList: [],
            codeEditor: []
        }
    }

    componentDidMount() {
        this.getProjects()
    }

    getProjects() {
        axios.get('/api/project')
            .then((list) => {
                this.setState({
                    projectList: list.data
                })
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    getCode() {
        axios.get('/api/project/:Id')
            .then((code) => {
                this.setState({
                    codeEditor: code.data
                })
            })
            .catch(function (err) {
                console.log(err)
            })
    }



    render() {
        return (

            <section>
                <ProjectList list={this.state.projectList}/>
                <Editor code={this.state.codeEditor}/>
            </section>
    
    )
    }

}

export default App;
