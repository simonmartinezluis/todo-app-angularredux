import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from '../todo.action';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {

  completado: boolean = false;

  constructor(private readonly store: Store<AppState>) {

  }

  toggleAll() {
    this.completado = !this.completado;
    this.store.dispatch(toggleAll({ completado: this.completado }));
  }
}
