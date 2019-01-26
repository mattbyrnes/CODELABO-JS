import React from 'react'

import CodeMirror from './codemirror/lib/codemirror.js';
import 'codemirror/lib/codemirror.css';

import 'codemirror/theme/material.css';
import 'codemirror/theme/neat.css';

import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/javascript/javascript.js';


import {UnControlled as CodeMirror} from 'react-codemirror2'
 
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


export default Editor