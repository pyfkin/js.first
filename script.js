var users = Object.create(null);
    users = {
    modalAdd : document.querySelector('.modalAdd'),
    modalEdit : document.querySelector('.modalEdit'),
    editDelete : document.querySelector('.edit-delete'),
    userIndex : -1,
    data : [
        {firstName: 'Ashton',lastName: 'Kutcher', age: 40},
        {firstName: 'Bradley', lastName: 'Pitt', age: 54},
        {firstName: 'Hannah',lastName: 'Dakota', age: 24}
    ]
};


users.createTable = function(){
    var table = document.querySelector('tbody');
    table.innerHTML = '';
    for(var i = 0; i < this.data.length; i++){
        table.innerHTML += '<tr class="row"><td>' + this.data[i].firstName + '</td><td>'+ this.data[i].lastName +'</td><td>'+ this.data[i].age +'</td></tr>'
    }
}

users.clearForm = function(mod){
    var input;
    if (mod == 'Add') input = this.modalAdd.querySelectorAll('input');
        else input = this.modalEdit.querySelectorAll('input');
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }

}

users.add  = function(){
    var input = this.modalAdd.querySelectorAll('input');
    var newUser = {};
    for (let i = 0; i < input.length; i++) {
        newUser[input[i].getAttribute('name')] = input[i].value;
    }
    this.data.push(newUser);
}

users.choiceEditDelete = function(){
    this.editDelete.classList.add('active');
    var s = this.editDelete.getElementsByTagName('p');
    s[0].innerHTML = 'Выберите действие для элемента № ' + (this.userIndex + 1);
}

users.delete = function(){
    this.data.splice(this.userIndex, 1);
    this.userIndex = -1;
}
users.beforeEdit = function(){
    var input = this.modalEdit.querySelectorAll('input');
    // this.modalEdit.querySelector('.modalEdit .firstName').innerHTML = 'asdfvd';
    input[0].value = this.data[this.userIndex].firstName;
    input[1].value = this.data[this.userIndex].lastName;
    input[2].value = this.data[this.userIndex].age;
}
users.edited = function(){
    var input = this.modalEdit.querySelectorAll('input');
    this.data[this.userIndex].firstName = input[0].value;
    this.data[this.userIndex].lastName = input[1].value;
    this.data[this.userIndex].age = input[2].value;
}

users.action = function(){
    var _this = this;
    document.addEventListener("click", function (ev) {
        var target = ev.target;
        if (target.classList.contains('add'))
        {
            _this.modalAdd.classList.add('active');
            // _this.modalAdd.className.
        }
        if (target.classList.contains('cancel'))
        {
            _this.editDelete.classList.remove('active');
        }
        if (target.classList.contains('cancelAdd'))
        {
            _this.modalAdd.classList.remove('active');
            _this.clearForm();
        }
        if (target.classList.contains('cancelEdit'))
        {
            _this.modalEdit.classList.remove('active');
            _this.clearForm();
        }
        if (target.classList.contains('sendAdd'))
        {
            _this.add();
            _this.createTable();
            _this.clearForm();
            _this.modalAdd.classList.remove('active');
        }
        if(target.parentElement.classList.contains('row')) {
            for (let i = 0; i < _this.data.length; i++) {
                if (_this.data[i].firstName == target.parentElement.firstElementChild.innerHTML){
                    _this.userIndex = i;
                    _this.choiceEditDelete();
                }
            }
        }
        if (target.classList.contains('delete')){
            _this.delete();
            _this.createTable();
            _this.editDelete.classList.remove('active');
        }
        if (target.classList.contains('edit')) {
            _this.editDelete.classList.remove('active');
            _this.modalEdit.classList.add('active');
            _this.beforeEdit();

        }
        if (target.classList.contains('sendEdit')) {


            _this.edited();
            _this.createTable();
            _this.clearForm();
            _this.modalEdit.classList.remove('active');
        }
    })
}
users.init = function(){
    this.createTable();
    this.action();
}
users.init();


var animal = {
    eats: true
};

var rabbit = {
    jumps: true,
    __proto__: animal
};

for (var key in rabbit) {
    if (rabbit.hasOwnProperty(key)) alert( key + " = " + rabbit[key] ); // выводит только "jumps"
}