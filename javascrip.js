function addLi()
                        {
            
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
  x = document.getElementById('degree-button');
  if (x.style.display === 'inline-block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'inline-block';
  }
  x = document.getElementById('institution-name');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
  x = document.getElementById('start-day-institution');
  if (x.style.display === 'inline-block') {
    x.style.display = 'none';    
  } else {
    x.style.display = 'inline-block';
  }
  x = document.getElementById('end-day-institution');
  if (x.style.display === 'inline-block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'inline-block';
  }
  x = document.getElementById('degree-name');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
  x = document.getElementById('label-exp-start-day');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
  x = document.getElementById('label-exp-end-day');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
  x = document.getElementById('label-degree-start-day');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
  x = document.getElementById('label-degree-end-day');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
  x = document.getElementById('mySidebar');    
  if (x.style.display === 'none') {    
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
  x = document.getElementById('header-left');
  if (x.style.display === 'block') {    
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
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
function addExp(){    
  var listNode = document.getElementById('experience-list'),
      li = document.createElement('li'),
      txtVal = document.getElementById('job-name').value;
      li.innerText = txtVal;
  var subUl = document.createElement('ul'),
      subLi = document.createElement('li');
      /*subValue = document.getElementById('start-day').value;
      subLi.innerText = subValue;
      subUl.appendChild(subLi);
      subValue = document.getElementById('end-day').value;
      subLi.innerText = subValue;
      subUl.appendChild(subLi); 
      */  
  let text1 = document.getElementById('start-day').value;
  let text2 = document.getElementById('end-day').value;
  let result = text1.concat(" - ", text2);
      subLi = document.createElement('li');
      subLi.innerText = result;
      subUl.appendChild(subLi);

      valueLiUlLi = document.getElementById('company-name').value;
      subValue = valueLiUlLi;
      subLi = document.createElement('li');
      subLi.innerText = subValue;
      subUl.appendChild(subLi);    
  li.appendChild(subUl);  
  listNode.appendChild(li);  
}
function addDegree(){    
  var listNode = document.getElementById('degree-list'),
      li = document.createElement('li'),
      txtVal = document.getElementById('degree-name').value;
      li.innerText = txtVal;
  var subUl = document.createElement('ul'),
      subLi = document.createElement('li');      
  let text1 = document.getElementById('start-day-institution').value;
  let text2 = document.getElementById('end-day-institution').value;
  let result = text1.concat(" - ", text2);
      subLi = document.createElement('li');
      subLi.innerText = result;
      subUl.appendChild(subLi);

      valueLiUlLi = document.getElementById('institution-name').value;
      subValue = valueLiUlLi;
      subLi = document.createElement('li');
      subLi.innerText = subValue;
      subUl.appendChild(subLi);    
  li.appendChild(subUl);  
  listNode.appendChild(li);  
}
