/**
 * Created by Den on 29.06.2017.
 */
var c = console.log;
var btnAdd          = document.getElementById('add'),
    textField       = document.getElementById('text_field'),
    tasksContainer  = document.getElementById('tasks_container'),
    dontShow        = true;

btnAdd.addEventListener('click', function() {
    toggle(textField);
});

textField.onkeydown = function(e) {
    if (e.keyCode === 13) {
        addTask(textField.value);
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

function addTask(task) {

    var parent  = tasksContainer;
    var newTask = document.createElement('li');
    newTask.classList.add('task');

    newTask.innerHTML = task + "<i class='fa fa-trash delete' aria-hidden='true'></i>";
    parent.appendChild(newTask);

}
