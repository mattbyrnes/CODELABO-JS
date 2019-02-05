import React, { Component } from 'react';
import axios from 'axios';
import '../style.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { UnControlled as CodeMirror } from 'react-codemirror2';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

const ProjectHTML = (props) => {
	return (
		<p>
			{props.value.html}
		</p>
	)
}

export default ProjectHTML;