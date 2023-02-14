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
