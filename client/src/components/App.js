import React, { Component } from 'react';
import axios from 'axios';
import ProjectList from './ProjectList';
// import Editor from './Editor';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import {UnControlled as CodeMirror} from 'react-codemirror2'

// import CodeMirror from 'react-codemirror2';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

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
                <ProjectList list={this.state.projectList} />
                <h1>HELLO?</h1>
                <CodeMirror
                    value='<h1>I ♥ react-codemirror2</h1>'
                    options={{
                        mode: 'xml',
                        theme: 'material',
                        lineNumbers: true
                    }}
                    onChange={(editor, data, value) => {
                    }}
                />

            </section>

        )
    }

}

export default App;
