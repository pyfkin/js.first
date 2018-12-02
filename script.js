// var users = Object.create(null);
    var models = {
        modalAdd: document.querySelector('.modalAdd'),
        modalEdit: document.querySelector('.modalEdit'),
        editDelete: document.querySelector('.edit-delete')
    };
    function User (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.userIndex = -1;
        // __proto__ = models;
    }
     User.prototype = models;

//         userIndex : -1,
//         data : [
//         {firstName: 'Ashton',lastName: 'Kutcher', age: 40},
//         {firstName: 'Bradley', lastName: 'Pitt', age: 54},
//         {firstName: 'Hannah',lastName: 'Dakota', age: 24}
//     ]
// };
function createTable(u){
    var table = document.querySelector('tbody');
    // table.innerHTML = '';
    // for(var i = 0; i < this.data.length; i++){
        table.innerHTML += '<tr class="row"><td>' + u.firstName +
            '</td><td>'+u.lastName +'</td><td>'+ u.age +'</td></tr>';
    // }
}
// users.clearForm = function(mod){
//     var input;
//     if (mod === 'Add') input = this.modalAdd.querySelectorAll('input');
//         else input = this.modalEdit.querySelectorAll('input');
//     for (let i = 0; i < input.length; i++) {
//         input[i].value = '';
//     }
// };
// users.add  = function(){
//     var input = this.modalAdd.querySelectorAll('input');
//     var newUser = {};
//     for (let i = 0; i < input.length; i++) {
//         newUser[input[i].getAttribute('name')] = input[i].value;
//     }
//     this.data.push(newUser);
// };
// users.choiceEditDelete = function(){
//     this.editDelete.classList.add('active');
//     var s = this.editDelete.getElementsByTagName('p');
//     s[0].innerHTML = 'Выберите действие для элемента № ' + (this.userIndex + 1);
// };
// users.delete = function(){
//     this.data.splice(this.userIndex, 1);
//     this.userIndex = -1;
// };
// users.beforeEdit = function(){
//     var input = this.modalEdit.querySelectorAll('input');
//     input[0].value = this.data[this.userIndex].firstName;
//     input[1].value = this.data[this.userIndex].lastName;
//     input[2].value = this.data[this.userIndex].age;
// };
// users.edited = function(){
//     var input = this.modalEdit.querySelectorAll('input');
//     this.data[this.userIndex].firstName = input[0].value;
//     this.data[this.userIndex].lastName = input[1].value;
//     this.data[this.userIndex].age = input[2].value;
// };
function defaultColor(){
    target.parentElement.style.cssText = "background-color: '';";
}
User.prototype.action = function(){
    document.addEventListener("click", function (ev) {
        var target = ev.target;
        if (target.classList.contains('add')){
            models.modalAdd.classList.add('active');
        }
        if(target.parentElement.classList.contains('row')){
            // for (let i = 0; i < _this.data.length; i++) {
            //     if (_this.data[i].firstName === target.parentElement.firstElementChild.innerHTML){
                    target.parentElement.style.backgroundColor = "red";
                    // _this.userIndex = i;
                    // _this.choiceEditDelete();
                // }
            // }
        }
    });
};
//  function action(){
//     // var _this = this;
//     document.addEventListener("click", function (ev) {
//         var target = ev.target;
//         if (target.classList.contains('add')){
//             _this.modalAdd.classList.add('active');
//         }
//         if (target.classList.contains('cancel')){
//             _this.editDelete.classList.remove('active');
//             defaultColor();
//         }
//         if (target.classList.contains('cancelAdd')){
//             _this.modalAdd.classList.remove('active');
//             _this.clearForm('Add');
//         }
//         if (target.classList.contains('cancelEdit')){
//             _this.modalEdit.classList.remove('active');
//             _this.clearForm('');
//             defaultColor();
//         }
//         if(target.parentElement.classList.contains('row')){
//             for (let i = 0; i < _this.data.length; i++) {
//                 if (_this.data[i].firstName === target.parentElement.firstElementChild.innerHTML){
//                     target.parentElement.style.backgroundColor = "red";
//                     _this.userIndex = i;
//                     _this.choiceEditDelete();
//                 }
//             }
//         }
//         if (target.classList.contains('delete')){
//             _this.delete();
//             // _this.createTable();
//             _this.editDelete.classList.remove('active');
//         }
//         if (target.classList.contains('edit')){
//             _this.editDelete.classList.remove('active');
//             _this.modalEdit.classList.add('active');
//             _this.beforeEdit();
//         }
//         if (target.classList.contains('sendEdit')){
//             _this.edited();
//             // _this.createTable();
//             _this.clearForm('');
//             _this.modalEdit.classList.remove('active');
//         }
//         if (target.classList.contains('sendAdd')){
//             _this.add();
//             // _this.createTable();
//             _this.clearForm('Add');
//             _this.modalAdd.classList.remove('active');
//         }
//     })
// }
// users.init = function(){
//     this.createTable();
//     this.action();
// };
// users.init();

var Ashton = new User('kakashka','Kutcher',40);
var Bradley = new User('Bradley', 'Pitt', 54);
var Hannah = new User('Hannah','Dakota', 24);
createTable(Ashton);
Ashton.action();
createTable(Bradley);
createTable(Hannah);
