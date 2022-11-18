import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos: any [] = [];
  public title: String = 'Minhas Tarefas';

  constructor() {
    this.todos.push('Passear com o chachorro');
    this.todos.push('Ir ao Supermercado');
    this.todos.push('Cortar o Cabelo');
  }

  alteraTexto() {
    this.title = 'Teste';
  }
}
