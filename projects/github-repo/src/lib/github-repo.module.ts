import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubRepoComponent } from './github-repo.component';

const routes: Routes = [
  {
    path: '',
    component: GithubRepoComponent,
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'posts',
    //   },
    // ],
  },
];

@NgModule({
  declarations: [GithubRepoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [GithubRepoComponent],
})
export class GithubRepoModule {}
