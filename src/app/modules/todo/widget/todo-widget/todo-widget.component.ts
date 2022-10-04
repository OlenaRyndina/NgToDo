import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TodoState } from '../../store/todo/todo.reducer';
import { TodoCreateAction } from '../../store/todo/todo.actions';
import { todoListSelector } from '../../store/todo/todo.selectors';
import { Todo } from '../../model/todo';

@Component({
    selector: 'app-todo-widget',
    templateUrl: './todo-widget.component.html',
    styleUrls: ['./todo-widget.component.css']
})
export class TodoWidgetComponent implements OnInit {

    todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

    constructor(private store$: Store<TodoState>) { }

    ngOnInit(): void {
    }

    onCreate(name: string) {
      console.log(name);
      this.store$.dispatch(new TodoCreateAction({name}));
    }

}
