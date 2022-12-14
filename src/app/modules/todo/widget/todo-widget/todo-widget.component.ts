import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TodoState } from '../../store/todo/todo.reducer';
import { TodoCreateAction, TodoDeleteAction, TodoToggleAction, TodoEditAction } from '../../store/todo/todo.actions';
import { todoListSelector } from '../../store/todo/todo.selectors';
import { Todo } from '../../model/todo';
import { TodoSyncStorageService } from '../../service/todo-sync-storage.service';

@Component({
    selector: 'app-todo-widget',
    templateUrl: './todo-widget.component.html',
    styleUrls: ['./todo-widget.component.css']
})
export class TodoWidgetComponent implements OnInit {

    todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

    constructor(
        private store$: Store<TodoState>,
        private todoSyncStorage: TodoSyncStorageService) { }

    ngOnInit(): void {
        this.todoSyncStorage.init();
    }

    onCreate(name: string) {
      this.store$.dispatch(new TodoCreateAction({name}));
    }

    onDelete(id: number) {
        this.store$.dispatch(new TodoDeleteAction({id}));
    }
    
    onToggle(id: number) {
        this.store$.dispatch(new TodoToggleAction({id}));
    }

    onEdit({id, name}) {
        console.log({id, name});
        this.store$.dispatch(new TodoEditAction({id, name}))
    }
}
