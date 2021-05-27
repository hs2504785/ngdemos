import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    // children: [
    //   {
    //     path: 'add',
    //     component: AddTodoComponent,
    //   },
    //   {
    //     path: 'edit/:id',
    //     component: EditTodoComponent,
    //   },
    //   {
    //     path: 'view/:id',
    //     component: ViewTodoComponent,
    //   },
    // ],
  },
];

@NgModule({
  declarations: [BlogComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [BlogComponent],
})
export class BlogModule {}
