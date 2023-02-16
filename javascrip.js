function addLi(){          
    var txtVal = document.getElementById('txtVal').value,
        listNode = document.getElementById('inline-language'),
        liNode = document.createElement("LI"),
        txtNode = document.createTextNode(txtVal);
                        
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);                        
}
function addLi2(){            
    var txtVal = document.getElementById('txtVal2').value,
        listNode = document.getElementById('inline-soft-skills'),
        liNode = document.createElement("LI"),
        txtNode = document.createTextNode(txtVal);
                        
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);                        
}
function editCv(){                
  var x = document.getElementById('txtVal');
  if (x.style.display === 'inline-block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'inline-block';
  }
  x = document.getElementById('txtVal2');
  if (x.style.display === 'inline-block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'inline-block';
  }
  x = document.getElementById('button-soft-skills');
  if (x.style.display === 'inline-block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'inline-block';
  }
  x = document.getElementById('button-language');
  if (x.style.display === 'inline-block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'inline-block';
  }
  x = document.getElementById('button-personal');
  if (x.style.display === 'inline-block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'inline-block';
  }
  x = document.getElementById('txt-personal');
  if (x.style.display === 'inline-block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'inline-block';
  }
  x = document.getElementById('start-day');
  if (x.style.display === 'inline-block') {
    x.style.display = 'none';    
  } else {
    x.style.display = 'inline-block';
  }
  x = document.getElementById('end-day');
  if (x.style.display === 'inline-block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'inline-block';
  }
  x = document.getElementById('job-name');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
  x = document.getElementById('company-name');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
  x = document.getElementById('work-description-button');
  if (x.style.display === 'inline-block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'inline-block';
  }  
}
var items = document.querySelectorAll("#personal-info li"),
    inputText = document.getElementById("txt-personal"),
    tab = [], liIndex ;             
    // populate tab with li value
for(var i = 0; i < items.length; i++){
  tab.push(items[i].innerHTML);
}
// get selected li into text fields and get the index             
for(var i = 0; i < items.length; i++){
  items[i].onclick = function(){                     
                     inputText.value = this.innerHTML;
                     liIndex = tab.indexOf(this.innerHTML);
                     console.log(this.innerHTML +" INDEX = " + liIndex);
                     
                 };
}
function editLI(){
  items[liIndex].innerHTML = inputText.value;                 
  // clear array
  tab.length = 0;                 
  // fill array
  for(var i = 0; i < items.length; i++){
    tab.push(items[i].innerHTML);
  }
}
