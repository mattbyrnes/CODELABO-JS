import React from 'react';

const ProjectPreview = () => {

	var code = ("#htmlEditor")[0];
	var cssCode = ("#cssEditor")[0];
	var jsCode = ("#jsEditor")[0];

	//HTML Change
	code.on('change', function () {
		clearTimeout(delay);
		delay = setTimeout(updatePreview, 300);
		var msg = {
			html: code.getValue(),
		};
	});

	// Preview
	var delay;

	function updatePreview() {
		var previewFrame = document.getElementById('preview');
		var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
		preview.open();
		preview.write(code.getValue());
		preview.write(cssCode.getValue());
		preview.write(jsCode.getValue());
		preview.close();
	}
	setTimeout(updatePreview, 300);


	return (
		<iframe title="preview" id="preview"></iframe>
	)
}

export default ProjectPreview;