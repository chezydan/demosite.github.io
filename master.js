
//this function includes all necessary js files for the application
function include(file)
{

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}

/* include any js files here */
include('file1.js');

document.getElementsByTagName('body'.item)

$(document).ready(function()
{
$("#p1").text("text from script  בדיקה של אותיות ")

var txt2 = $("<p id='tuki'><i></i></p>").text("jquery ");
$("ul").after(txt2);
$("#tuki").text("another text");
});
