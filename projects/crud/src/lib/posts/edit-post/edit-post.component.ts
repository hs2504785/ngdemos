import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostInterface } from '../models/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'lib-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPostComponent implements OnInit, OnDestroy {
  form: FormGroup;
  post: PostInterface;
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

    this.post = {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    };
    this.form.patchValue(this.post);
  }

  updatePost() {
    const postToUpdate = { ...this.post, ...this.form.value };
    console.log('Update Post ', postToUpdate);

    this.sub = this.postService.update(postToUpdate).subscribe(() => {
      this.router.navigateByUrl('/crud/posts');
    });
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }
}
