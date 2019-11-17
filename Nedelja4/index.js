
const addTaskButton=document.querySelector('#btn-add'); 
const taskListContainer=document.querySelector('#tasks-container');
const textBoxTitle= document.querySelector('#txt-title');

const removeSelectedBtn = document.querySelector('#remove-selected-btn');



const selectInvert = document.querySelector('#select-invert');

//console.log(taskListContainer);
//console.log(addTaskButton);

//console.log(addTaskButton.parentElement);
//console.log(addTaskButton.parentNode);

addTaskButton.addEventListener('click',btnAddClick);
textBoxTitle.addEventListener('keyup',txtKeyUp);
removeSelectedBtn.addEventListener ('click', removeSelected)
selectInvert.addEventListener ('click', invert)

function  removeSelected() {

    let item = taskListContainer.children;
    
    let i = taskListContainer.children.length;
      while (i-- > 0) {
   if (item[i].children[1].children[1].checked) {
  
              item[i].remove();
   }
  }
  
  }
  function invert(){
    let items = taskListContainer.children;
  
    for(var i = taskListContainer.children.length - 1 ; i >=0 ; i--){
        {
            items[i].children[1].children[1].checked = !items[i].children[1].children[1].checked;
        }
   }
}




function btnAddClick(e){
    //console.log(e);
    //console.log(e.target);
    e;
    addItem();

}
function txtKeyUp(e){
    //console.log(e);
    if(e.keyCode==13){
        addItem();
    }
}
function addItem(){
    
    let txtBox=document.querySelector('#txt-title');
    //console.log(txtBox);    
    let select= document.querySelector('#mySelect');
    var text=txtBox.value;
    text=text.trim();
    if(text==''){
        alert('Task Title can not be empty!');
        return;
     
    }

    
  
    //console.log(text);

    let itemContainer=document.createElement("div");
    //console.log(itemContainer);
    itemContainer.className='task-item';
    
    let itemText=document.createElement('p');
    itemText.innerHTML=`${select.value} ${text}`
    itemText.className='task-title';
    //console.log(itemText);

    let checkContainer=document.createElement('div');
    checkContainer.className='task-check';
    
    let removeBtn=document.createElement('button');
    removeBtn.className='task-remove-btn';
    removeBtn.addEventListener('click',removeTask);
    removeBtn.innerHTML='X';

    let chkDone=document.createElement('input');
    chkDone.type='checkbox';
    chkDone.className='chk-state';
    chkDone.value='done';
    chkDone.addEventListener('change',handleCheckChange);

    checkContainer.appendChild(removeBtn);
    checkContainer.appendChild(chkDone);



    itemContainer.appendChild(itemText);
    itemContainer.appendChild(checkContainer);
    taskListContainer.appendChild(itemContainer);

    txtBox.value='';}
    
function removeTask(e){
    //console.log(e);
    //console.log(e.target);
    if(!confirm('Are you sure?')){
        return;
    }
    let btnToRemove=e.target;
    let divToRemove=btnToRemove.parentElement.parentElement;
    //console.log(divToRemove);
    divToRemove.remove();
}

function handleCheckChange(e){
    //console.log(e);
    let chkBox=e.target;

    let checkContainer=chkBox.parentElement;
    let itemContainer=checkContainer.parentElement;

    if(chkBox.checked){
        itemContainer.children[0].style.textDecoration='line-through';
    }
    else{
        
        itemContainer.children[0].style.textDecoration='none';
    }
}
