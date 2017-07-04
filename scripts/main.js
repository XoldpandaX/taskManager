/**
 * Created by Den on 29.06.2017.
 */
var c = console.log;
var btnAdd     = document.getElementById('add'),
    textField  = document.getElementById('text_field'),
    dontShow   = true,
    tasks      = [];

btnAdd.addEventListener('click', function() {
    toggle(textField);
});

textField.onkeydown = function(e) {
    if (e.keyCode === 13) {
        alert('hello');
    }
};


function toggle(elem) {
    if (dontShow) {
        elem.style.display = 'block';
        dontShow = false;
    } else {
        elem.style.display = 'none';
        dontShow = true;
    }
}

