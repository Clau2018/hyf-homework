function toggle_visibility(id) {
   var el = document.getElementById(id);
   if(el.style.display == 'block')
      el.style.display = 'none';
   else
      el.style.display = 'block';
}

function change(id) {
var el = document.getElementById(id);
if (el.value=="read more ...") el.value = "close";
else el.value = "read more ...";
}
