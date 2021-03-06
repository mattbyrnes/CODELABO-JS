const path = require('path');
var express = require('express');

module.exports = function (app) {

    // app.get('/editor', (req, res) => {
    //     res.sendFile(path.join(__dirname + '/../public/editor.html'));
    // })

    // app.get('/editor/:id', function (req, res) {
    //     res.sendFile(path.join(__dirname, '/../public/editor.html'));
    // })

    app.get('/edit', (req, res) => {
        res.sendFile(path.join(__dirname + '/../public/edit.html'));
    })

    app.get('/edit/:id', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/edit.html'));
    })

    //Default to index.html
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

}