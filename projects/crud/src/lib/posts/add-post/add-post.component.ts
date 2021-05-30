import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'lib-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPostComponent implements OnInit, OnDestroy {
  form: FormGroup;
  sub: Subscription;
  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: '',
      body: '',
    });
  }

  addPost() {
    console.log('Add Post ', this.form.value);

    this.sub = this.postService.add(this.form.value).subscribe(() => {
      this.router.navigateByUrl('/crud/posts');
    });
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }
}
