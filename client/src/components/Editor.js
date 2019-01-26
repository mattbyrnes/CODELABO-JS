import React from 'react'

import CodeMirror from './codemirror/lib/codemirror.js';
import 'codemirror/lib/codemirror.css';

import 'codemirror/theme/material.css';
import 'codemirror/theme/neat.css';

import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/javascript/javascript.js';


const Editor = () => {

    // const socket = io();

    var code = (props) => ("#htmlEditor")[0];

    // HTML Editor
    var testeditor = CodeMirror.fromTextArea(code, {
        mode: "xml",
        theme: "monokai",
        lineNumbers: true,
        autoCloseTags: true,
        lineWrapping: true,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
    });

//     //HTML Change
//   editor.on('change', function () {
//     clearTimeout(delay);
//     delay = setTimeout(updatePreview, 300);
//     var msg = {
//       html: editor.getValue(),
//     };
//     socket.emit("update-html", msg);
//   });


}

export default Editor