function openExplain(){
    element=document.getElementById('content');
    element.style.display  =  'block'
}

function closeExplain(){
    element=document.getElementById('content');
    element.style.display  =  'none'
}

function  doOver(element){
    document.getElementById('image').innerHTML  =  element.alt
}

function doOut(){
    document.getElementById('image').innerHTML  = "Hover  over an image below to display here.."
}