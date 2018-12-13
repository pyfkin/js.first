let jQ = jQuery.noConflict();
    var models = {
        modalAdd: document.querySelector('.modalAdd'),
        modalEdit: document.querySelector('.modalEdit'),
        editDelete: document.querySelector('.edit-delete')
    };

    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

function createTable(u){
    var table = document.querySelector('tbody');
    table.innerHTML += '<tr class="row"><td>' + u.firstName +
                       '</td><td>'+u.lastName +'</td><td>'+ u.age +'</td></tr>';
}
function clearForm(mod){
    var input;
    if (mod === 'Add') input = models.modalAdd.querySelectorAll('input');
        else input = models.modalEdit.querySelectorAll('input');
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
}
function add(){
    var input = models.modalAdd.querySelectorAll('input');
    var newUser = {};
    for (let i = 0; i < input.length; i++) {
        newUser[input[i].getAttribute('name')] = input[i].value;
    }
    createTable(newUser);
}
function choiceEditDelete(rowIndex){
    models.editDelete.classList.add('active');
    var headerTextSpan = models.editDelete.getElementsByTagName('span');
    headerTextSpan[0].innerText = rowIndex;
}
function deleteRow(){
    var indexRow = models.editDelete.getElementsByTagName('span');
    tableBodyId.deleteRow(indexRow[0].innerText - 1);

}
function beforeEdit(rowIndex){
    var input = models.modalEdit.querySelectorAll('input');
    var headerTextSpan = models.modalEdit.getElementsByTagName('span');
    headerTextSpan[0].innerText = rowIndex;
    input[0].value = tableBodyId.rows[rowIndex - 1].cells[0].innerText;
    input[1].value = tableBodyId.rows[rowIndex - 1].cells[1].innerText;
    input[2].value = tableBodyId.rows[rowIndex - 1].cells[2].innerText;
}
function edited(rowIndex){
    var input = models.modalEdit.querySelectorAll('input');
    tableBodyId.rows[rowIndex - 1].cells[0].innerText = input[0].value;
    tableBodyId.rows[rowIndex - 1].cells[1].innerText = input[1].value;
    tableBodyId.rows[rowIndex - 1].cells[2].innerText = input[2].value;
}
function defaultColor(rowIndex){
    tableBodyId.rows[rowIndex - 1].style.cssText = "background-color: '';";
}

    buttonCancelAdd.addEventListener("click", function() {
        clearForm('Add');
        models.modalAdd.classList.remove('active');
    });
    buttonSendAdd.addEventListener("click", function() {
        add();
        clearForm('Add');
        models.modalAdd.classList.remove('active');
});
    buttonEdit.addEventListener("click", function () {
        var indexRow = models.editDelete.getElementsByTagName('span')[0];
        models.editDelete.classList.remove('active');
        models.modalEdit.classList.add('active');
        beforeEdit(indexRow.innerText);
});
    buttonDelete.addEventListener("click", function() {
        deleteRow();
        models.editDelete.classList.remove('active');
});
    var tbl = document.getElementById('tableBodyId');
    tbl.addEventListener("click", function (event) {
        var target = event.target;
        tableBodyId.rows.style.backgroundColor = "white";
        target.parentElement.style.backgroundColor = "red";
        choiceEditDelete(target.parentElement.rowIndex);
});
    sendEdit.addEventListener("click", function () {
        var indexRow = models.modalEdit.getElementsByTagName('span')[0];
        edited(indexRow.innerHTML);
        clearForm('');
        models.modalEdit.classList.remove('active');
});
    cancelEdit.addEventListener("click", function () {
        var indexRow = models.modalEdit.getElementsByTagName('span')[0];
        clearForm('');
        defaultColor(indexRow.innerText);
        models.modalEdit.classList.remove('active');
    });
    buttonCancelEditDelete.addEventListener("click", function () {
        var indexRow = models.editDelete.getElementsByTagName('span')[0];
        defaultColor(indexRow.innerText);
        models.editDelete.classList.remove('active');
    });





    var Ashton = new User('Andrey','Adar',40);
var Bradley = new User('Bradley', 'Pitt', 54);
var Hannah = new User('Hannah','Dakota', 24);
createTable(Ashton);
createTable(Bradley);
createTable(Hannah);

    //
    // var showingTooltip;
    //
    // document.onmouseover = function(e) {
    //     var target = e.target;
    //
    //     var tooltip = target.getAttribute('data-tooltip');
    //     if (!tooltip) return;
    //
    //     var tooltipElem = document.createElement('div');
    //     tooltipElem.className = 'tooltip';
    //     tooltipElem.innerHTML = tooltip;
    //     document.body.appendChild(tooltipElem);
    //
    //     var coords = target.getBoundingClientRect();
    //
    //     var left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    //     if (left < 0) left = 0; // не вылезать за левую границу окна
    //
    //     var top = coords.top - tooltipElem.offsetHeight - 5;
    //     if (top < 0) { // не вылезать за верхнюю границу окна
    //         top = coords.top + target.offsetHeight + 5;
    //     }
    //
    //     tooltipElem.style.left = left + 'px';
    //     tooltipElem.style.top = top + 'px';
    //
    //     showingTooltip = tooltipElem;
    // };
    //
    // document.onmouseout = function(e) {
    //
    //     if (showingTooltip) {
    //         document.body.removeChild(showingTooltip);
    //         showingTooltip = null;
    //     }
    //
    // };

    var btn = document.getElementById('message');


function createMessage(elem, text) {
    var koords = elem.target.getBoundingClientRect();
    let mess = document.createElement("div");
    //var mess = document.querySelector('.tooltip-bottom');

    mess.classList.add('tooltip-bottom');
    mess = document.body.appendChild(mess);

    mess.style.top = koords.top - mess.offsetHeight + "px";
    mess.style.left = koords.left + "px";
    mess.innerHTML = 'Всплывающая подсказка для "' + text + '"';
}

function showHideMessage(e){
    if (!e.target.hasAttribute('data-tooltip')) return;
    createMessage(e, e.innerHTML);
}
function clickCounter(e){
    if (!e.target.hasAttribute('data-counter')) return;
    var counter = e.target;
    counter.innerHTML++;
}

document.addEventListener("mouseover", function(e){
    showHideMessage(e);
});
document.addEventListener("mouseout", function(e){
    document.querySelector('.tooltip-bottom').remove();

});
document.addEventListener("click" , function(e){
    clickCounter(e);
    });

    var rec = document.getElementById('rect');
    var rec2 = document.getElementById('rect2');
    var rec_shiftY, rec_shiftX;
    var rec2_shiftY, rec2_shiftX;
    var draggable = false;
    rec.onmousedown = function (e) {
        draggable = true;
        var recXY = rec.getBoundingClientRect();
        var rec2_XY = rec2.getBoundingClientRect();
        // var rec2LeftFace = rec2_XY.left;

        rec_shiftY = e.pageY - recXY.top + pageYOffset;
        rec_shiftX = e.pageX - recXY.left + pageXOffset;

       recTop = recXY.top - e.pageY + pageYOffset;
       recRight = recXY.right - e.pageX + pageXOffset;
       recLeft = recXY.left - e.pageX + pageXOffset;
       recBottom = recXY.bottom - e.pageY + pageYOffset;


        rec2_shiftY = e.pageY - rec2_XY.top + pageYOffset;
        rec2_shiftX = e.pageX - rec2_XY.left + pageXOffset;

    };
    document.onmouseup = function () {
        draggable = false;
    };
    document.onmousemove = function (e) {
        if (draggable){
            var r1XY = rec.getBoundingClientRect();
            var rec2_XY2 = rec2.getBoundingClientRect();
            var _width = rec2_XY2.right - rec2_XY2.left;
            var _height = rec2_XY2.bottom - rec2_XY2.top;

            rec.style.top = e.pageY -  rec_shiftY  + 'px';
            rec.style.left = e.pageX - rec_shiftX + 'px';



            // слева
            if (recRight + e.pageX >= rec2_XY2.left && recLeft + e.pageX < rec2_XY2.right)
                if (r1XY.bottom > rec2_XY2.top &&
                    r1XY.top < rec2_XY2.bottom ){
                    rec2.style.left = e.pageX + recRight + 'px';
                    // alert('left');
            }
            // сверху
            if (recBottom + e.pageY >= rec2_XY2.top && recTop + e.pageY < rec2_XY2.bottom)
                if (r1XY.left < rec2_XY2.right &&
                    r1XY.right > rec2_XY2.left){
                    rec2.style.top = e.pageY + recBottom + 'px';
                    // alert('top');
            }
            //справа
            if (recLeft + e.pageX < rec2_XY2.right && recRight + e.pageX > rec2_XY2.right)
                if (r1XY.bottom > rec2_XY2.top &&
                    r1XY.top < rec2_XY2.bottom ){
                    rec2.style.left = e.pageX + recLeft - _width +  'px';
                    // alert('right');
            }
            //снизу
            if (recTop + e.pageY <= rec2_XY2.bottom && recBottom + e.pageY > rec2_XY2.bottom)
                if (r1XY.left < rec2_XY2.right &&
                    r1XY.right > rec2_XY2.left){
                    rec2.style.top = e.pageY + recTop - _height  + 'px';
                    // alert('bottom');
            }
        }
    };
    rec.ondragstart = function () {
        return false;
    };



    jQ(document).ready(function(){
        jQ("#tableBodyId").click(function(e){
            alert(jQ(e.target).closest("tr")[0].cells[0].innerText);
            // alert(e.target.innerHTML);
            // jQ(e.target).text('asdf;lj');
            // alert(e.target.cellIndex);
            // alert(e.target.rowIndex);
        });

        var $ulElements = $('ul');
        $ulElements


        jQ("#buttonNewUser").click(function (e) {
            jQ(".modalAdd").show(600);
        });

        jQ(".cancelAdd, .modal-close").click(function (e) {
            jQ(".modalAdd").hide();
        });
    });



//
// buttonNewUser.addEventListener("click",  function() {
//     models.modalAdd.classList.add('active');
// });