import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos: Todo [] = [];
  public title: String = 'Minhas Tarefas';

  constructor() {
    this.todos.push(new Todo(1, 'Passear com o Cachorro', false));
    this.todos.push(new Todo(2, 'Supermercado', false));
    this.todos.push(new Todo(3, 'Cortar o Cabelo', true));
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  alteraTexto() {
    this.title = 'Teste';
  }
}
