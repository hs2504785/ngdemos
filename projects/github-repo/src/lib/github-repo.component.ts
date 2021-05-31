import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';
import { RepoService } from './services/repo.service';

@Component({
  selector: 'lib-github-repo',
  templateUrl: './github-repo.component.html',
  styles: [],
})
export class GithubRepoComponent implements OnInit {
  repos$: Observable<any[]>;
  constructor(private repoService: RepoService) {}

  ngOnInit(): void {
    this.repos$ = this.repoService.getRepos();
  }
}
