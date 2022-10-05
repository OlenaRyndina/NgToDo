import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Todo } from '../../model/todo';

@Component({
    selector: 'app-todo-list-ui',
    templateUrl: './todo-list-ui.component.html',
    styleUrls: ['./todo-list-ui.component.css']
})
export class TodoListUiComponent implements OnInit {
    
    editIds: number[] = [];

    @Input()
    todoList: Todo[] = [];

    @Output()
    delete = new EventEmitter<number>();

    @Output()
    toggle = new EventEmitter<number>();

    @Output()
    edit = new EventEmitter<{name: string, id: number}>();

    constructor() { }

    ngOnInit(): void {
    }
 
    onDelete(id: number) {
        this.delete.emit(id);
    }

    onEditMode(id: number) {
        this.editIds.push(id);
    }

    onToggle(id: number) {
        this.toggle.emit(id);
    }

    onEdit(name: string, id: number) {
        this.editIds = this.editIds.filter(editId => editId !== id);
        this.edit.emit({name, id});
    }
}
