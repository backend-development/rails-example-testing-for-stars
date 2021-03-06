// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function(){
  $('.info').append('<button class="load_info">load info from api</button>');
  $('.info').append('<div class="output"></div>');
  console.log('done preparing page for ajax-requests');

  $('.load_info').on('click', function() {
    $.getJSON("/users/count.json", function(data){
      $('.info .output').html("There are " + data.count + " Users in the Database");
      console.log('done loading!');
    });
  });
});

