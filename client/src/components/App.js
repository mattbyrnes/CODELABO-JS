import React, { Component } from 'react';
import axios from 'axios';
import ProjectTitle from './ProjectTitle';
import ProjectList from './ProjectList';
import '../style.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			projectList: [],
			projectTitle: []
		}
	}

	componentDidMount() {
		this.getProjects();
		this.getTitle();
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

	getTitle() {
		axios.get('/api/project/:Id')
			.then((list) => {
				this.setState({
					projectTitle: list.data
				})
			})
			.catch(function (err) {
				console.log(err)
			})
	}

	render() {
		return (
			<section>
				<form>
					<div class="edit-col">

						<div class="title-input">
						<ProjectTitle tit={this.state.projectTitle} />
							{/* <input id="project-title" value="" /> */}
						</div>
						
						<div id="htmlEditor">
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
						</div>
					</div>
					<div class="preview-col">
						<label>Preview</label>
						<div class="device">
							<iframe id="preview"></iframe>
						</div>
					</div>
				</form>

				<button id="myBtn" class="projects-btn">My Projects</button>
				<div id="myModal" class="modal">
					<div class="modal-content">
						<span class="close">&times;</span>
						<h2>My Projects</h2><br /><br />
						<div id="projectlist">
							<ProjectList list={this.state.projectList} />
						</div>
					</div>
				</div>

			</section>

		)
	}

}

export default App;
