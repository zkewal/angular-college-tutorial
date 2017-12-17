import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ViewComponent } from './student/view/view.component';
import {WikiComponent} from './wiki/wiki.component';

export const appRoutes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'wiki', component: WikiComponent },
  { path: 'students/:id', component: ViewComponent },
  {
    path: '',
    redirectTo: '/wiki',
    pathMatch: 'full'
  }
];
