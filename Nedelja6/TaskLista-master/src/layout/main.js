import { TaskList } from "../components/taskList";
import { InputForm } from "../components/inputForm";
import { Task } from "../components/task";
import { getToDo, add } from "../utilities/todo-service";
import  { Login } from "../components/input";

class Main {
    constructor() {
        let login = new Login ()
        let inputForm=new InputForm();
        let taskList=new TaskList();

        this.node=document.createElement('main');
        this.node.appendChild(login.getNode());
        this.node.appendChild(inputForm.getNode());
        this.node.appendChild(taskList.getNode());
        inputForm.setBtnAddOnClick(()=>{
            let text=inputForm.txtTitle.value;
            text=text.trim();

            if(text=='')return;
            add(login.input.value, text);
            let task=new Task(text);
            task.setBtnDeleteClickEvent(()=>{
               
                task.deleteItem();
            });
            taskList.addTask(task);
        })
        login.btnSetEventOnClick(function () {
            let input = login.input.value;
          
getToDo(input).then(data=>{
    
    let items = data.items;
   
    items.forEach(item => {
        let task = new Task (item.title);
        task.setBtnDeleteClickEvent(()=>{
      
            task.deleteItem();
        })
        taskList.addTask(task);
    })
}) 

});
    }

getNode() {return this.node;}

    getToDo() {
        return this.node;
    }

    }

export{
    Main
}