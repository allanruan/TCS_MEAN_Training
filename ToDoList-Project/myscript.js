// Create close button for each item in list
var list = document.getElementsByTagName('li')
var i;
for(i=0;i<list.length;i++){
    var span = document.createElement('span')
    var text = document.createTextNode("\u00D7")
    span.appendChild(text);
    span.className="close";
    list[i].appendChild(span);
}
// Click on  a close button to hide the current list item.
var close = document.getElementsByClassName('close')
for(i=0;i<close.length;i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'None'
    }
}

function newTodo(){
    var inputValue = document.getElementById("myInput").value;
    var text = document.createTextNode(inputValue)
    var  li = document.createElement('li')
    
    if(inputValue==''){
        alert('You  must write something')
    }else{
        document.getElementById('myList').appendChild(li)
        document.getElementById("myInput").value = ''
        
    }
    li.appendChild(text)
    var span = document.createElement('span')
    var text = document.createTextNode("\u00D7")
    span.appendChild(text);
    span.className="close";
    li.appendChild(span);
    for(i=0;i<close.length;i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = 'None'
        }
    }
}

function  removeAll(){
    // var list = document.getElementById('myList');
    // list.innerHTML = ''
    var list = document.getElementsByTagName('ul')
    list[0].innerHTML = ''
}



