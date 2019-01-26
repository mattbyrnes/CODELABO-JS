$(document).ready(function () {

  const socket = io();

  var proId;
  var url = window.location.href;
  var docId = url.split("/");
  var docId = docId[4];

  if (docId) {
    proId = docId

    var testproject = function (res) {
      title.setValue(res.name)
      editor.setValue(res.html)
      editorCSS.setValue(res.css)
      editorJS.setValue(res.javascript)
    }
    
    $.get(`/api/project/${proId}`)
    .then((res) => testproject(res))

    // $.get(`/api/project/${proId}`)
    //   .then(res => {
    //     title.setValue(res.name);
    //   })

    // $.get(`/api/project/${proId}`)
    //   .then(res => {
    //     editor.setValue(res.html);
    //   })

    // $.get(`/api/project/${proId}`)
    //   .then(res => {
    //     editorCSS.setValue(res.css);
    //   })

    // $.get(`/api/project/${proId}`)
    //   .then(res => {
    //     editorJS.setValue(res.javascript)
    //   })


  }

  //Get ALL Projects and List in Finder
  const getAllProjects = function () {
    $.getJSON('/api/project')
      .then(function (data) {
        const projectItem = data.map((e) =>
          `<a class="open-project" id='${e._id}' href="/edit/${e._id}">${e.name}</a><br />`
        )
        $('#projectlist').html(projectItem);
        $('.fa-times').on('click', deleteDoc);
      })
  };
  getAllProjects();

  // Update on Keyup
  $(document).keyup(function () {
    console.log("project id", proId)
    if (!proId) {
      proId = 1;
      createProject();
    } else {
      console.log("updating")
      $.ajax({
        url: `/api/project/${proId}`,
        type: "PUT",
        data: { name: title.getValue(), html: editor.getValue(), css: editorCSS.getValue(), javascript: editorJS.getValue() }
      }).then(res => console.log(res));
    }
  })

  // Create Project
  const createProject = function () {
    console.log('Create');
    const newProject = {
      projectTitle: "",
      projectContent: ""
    };
    $.ajax({ url: '/api/project', method: 'POST', data: newProject }).then(function (res) {
      console.log(res)
      proId = res._id;
    });
  };

});
