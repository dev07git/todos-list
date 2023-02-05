import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor() {
   var localItem= localStorage.getItem("todos");
if(localItem===null)
{this.todos=[]}
else{
  this.todos=JSON.parse(localItem);
}
  }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    
    this.todos.splice(this.todos.indexOf(todo),1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  AddTodo(todo:Todo){
    
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
  todoToggle(todo:Todo){
     
     todo.active=!todo.active;
    
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
}
