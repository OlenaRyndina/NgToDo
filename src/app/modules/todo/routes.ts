import { Route } from '@angular/router';

import { TodoPageComponent } from './pages/todo-page/todo-page.component';

export const todoRouts: Route[] = [
    {
        path: '',
        component: TodoPageComponent
    }
]