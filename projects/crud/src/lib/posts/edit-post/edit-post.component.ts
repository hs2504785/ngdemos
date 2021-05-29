import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostInterface } from '../models/post.interface';

@Component({
  selector: 'lib-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPostComponent implements OnInit {
  form: FormGroup;
  post: PostInterface;
  constructor(private fb: FormBuilder) {}

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
  }
}
