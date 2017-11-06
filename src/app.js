'use strict';
require('./stylesheets/style1.less');
var var1 = require('./scripts/script1.js');

init();

function init() {
    bindEvents();
}

function bindEvents() {
    document.getElementById('form1Button').addEventListener('click', function () {
        submitForm();
    });
}

function submitForm() {
    var formChildren = ($('.formContainer').children('.formInput'));
    var formData = {};
    for (var i = 0; i < formChildren.length; i++) {
        formData[formChildren[i].id] = formChildren[i].value;
    }
    console.log(formData);
    $.ajax({
        url: 'http://localhost:8080/api',
        method: 'POST',
        data: formData,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        success: function (response) {
            console.log('success!');
        },
        error: function () {
            console.log(err);
        }
    })
}