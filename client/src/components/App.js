import React, { Component } from 'react';
import axios from 'axios';
import '../codemirror.css';
import '../monokai.css';
import '../reset.css';
import '../style.css';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import ProjectList from './ProjectList';
// import ProjectPreview from './ProjectPreview';
require('codemirror/mode/xml/xml');
require('codemirror/mode/css/css');
require('codemirror/mode/javascript/javascript');

export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			projectList: [],
			html: {},
			css: {},
			javascript: {},
			selectedProject: {}
		}
	};

	componentDidMount() {
		this.getAllProjects();
		this.getProject();
		this.updatePreview();
		this.updateProject();
	}

	// Update Preview
	updatePreview = value => {

		// var html = ("#htmlEditor")[0];
		// var css = ("#cssEditor")[0];
		// var javascript = ("#jsEditor")[0];

		var previewFrame = document.getElementById('preview');
		var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
		preview.open();

		// preview.write({selectedProject: value});
		preview.write(this.state.selectedProject.html);
		preview.write(this.state.selectedProject.css);
		preview.write(this.state.selectedProject.javascript);

		preview.close();
	}

	// Get All Projects
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

	// Delete Function
	deleteProject = Id => {
		console.log("Delete Button Click");
		axios.get(`/api/project/${Id}`)
			.then((item) => {
				axios.delete({
					selectedProject: item.data
				})
			})
			.catch(function (err) {
				console.log(err)
			})
	}

	// Update Functions
	updateProject = value => {
		axios.put(`/api/project/${this.state.selectedProject._id}`, { name: value })
			.then(res => console.log(res))
	}
	updateHTML = value => {
		axios.put(`/api/project/${this.state.selectedProject._id}`, { html: value })
			.then(res => console.log(res))
	}
	updateCSS = value => {
		axios.put(`/api/project/${this.state.selectedProject._id}`, { css: value })
			.then(res => console.log(res))
	}
	updateJS = value => {
		axios.put(`/api/project/${this.state.selectedProject._id}`, { javascript: value })
			.then(res => console.log(res))
	}

	// Get Selected Project
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

	render() {
		return (
			<section>
				<form>
					<div className="edit-col">
						<div className="title-input">
							<CodeMirror
								name="title"
								value={this.state.selectedProject.name}
								options={{
									mode: 'text/html',
									lineNumbers: false
								}}
								onChange={(editor, data, value) => {
									this.updateProject(value)
								}}
							/>
						</div>
						<div id="htmlEditor">
							<CodeMirror
								value={this.state.selectedProject.html}
								options={{
									mode: 'xml',
									theme: 'monokai',
									lineNumbers: true,
									autoCloseTags: true,
									lineWrapping: true,
									foldGutter: true
								}}
								onChange={(editor, data, value, preview) => {
									this.updateHTML(value)
									this.updatePreview(preview)
								}}
							/>
						</div>
						<div id="cssEditor">
							<CodeMirror
								value={this.state.selectedProject.css}
								options={{
									mode: 'css',
									theme: 'monokai',
									lineNumbers: true,
									autoCloseTags: true,
									lineWrapping: true,
									foldGutter: true
								}}
								onChange={(editor, data, value) => {
									this.updateCSS(value)
								}}
							/>
						</div>
						<div id="jsEditor">
							<CodeMirror
								value={this.state.selectedProject.javascript}
								options={{
									mode: 'javascript',
									theme: 'monokai',
									lineNumbers: true,
									autoCloseTags: true,
									lineWrapping: true,
									foldGutter: true
								}}
								onChange={(editor, data, value) => {
									this.updateJS(value)
								}}
							/>
						</div>
					</div>
					<div className="preview-col">
						<label>Preview</label>
						<div className="device">
							{/* <ProjectPreview /> */}
							<iframe title="preview" id="preview"></iframe>
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
								clickhandler2={this.deleteProject}
							/>
						</div>
					</div>
				</div>

			</section>
		)
	}

}

export default App;

