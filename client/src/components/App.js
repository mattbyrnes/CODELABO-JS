import React, { Component } from 'react';
import axios from 'axios';
import '../codemirror.css';
import '../monokai.css';
import '../reset.css';
import '../style.css';
import { UnControlled as CodeMirror } from 'react-codemirror2';

import ProjectList from './ProjectList';
import ProjectTitle from './ProjectTitle';
import ProjectPreview from './ProjectPreview';

require('codemirror/mode/xml/xml');
require('codemirror/mode/css/css');
require('codemirror/mode/javascript/javascript');

export class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			projectList: [],
			projectTitle: [],
			projectPreview: [],
			selectedProject: {}
		}
	};

	componentDidMount() {
		this.getAllProjects();
		this.getProject();
	}

	getProject = Id => {
		axios.get(`/api/project/${Id}`)
			.then((item) => {
				this.setState({
					selectedProject: item.data
				})
			})
			.catch(function (err) {
				console.log(err)
			})
	}

	getAllProjects() {
		axios.get(`/api/project`)
			.then((list) => {
				this.setState({
					projectList: list.data
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
					<div className="edit-col">
						<div className="title-input">
							<ProjectTitle
								title={this.state.selectedProject}
							/>
						</div>
						<div id="htmlEditor">
							<CodeMirror
								value={this.state.selectedProject.html}
								options={{
									mode: 'xml',
									theme: 'monokai',
									lineNumbers: true
								}}
								onChange={(editor, data, value) => {
								}}
							/>
						</div>
						<div id="cssEditor">
							<CodeMirror
								value={this.state.selectedProject.css}
								options={{
									mode: 'css',
									theme: 'monokai',
									lineNumbers: true
								}}
								onChange={(editor, data, value) => {
								}}
							/>
						</div>
						<div id="jsEditor">
							<CodeMirror
								value={this.state.selectedProject.javascript}
								options={{
									mode: 'javascript',
									theme: 'monokai',
									lineNumbers: true
								}}
								onChange={(editor, data, value) => {
								}}
							/>
						</div>
					</div>

					<div className="preview-col">

						<label>Preview</label>
						<div className="device">
							{/* <ProjectPreview /> */}
						</div>

					</div>
				</form>

				<button id="myBtn" className="projects-btn">My Projects</button>

				<div id="myModal" className="modal">
					<div className="modal-content">
						<span className="close">&times;</span>
						<h2>My Projects</h2><br /><br />
						<div id="projectlist">
							<ProjectList
								list={this.state.projectList}
								clickhandler={this.getProject}
							/>
						</div>
					</div>
				</div>

			</section>
		)
	}
}

export default App;

