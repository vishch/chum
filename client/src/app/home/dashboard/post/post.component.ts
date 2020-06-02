import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatePost } from './create-post';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    console.log("Post Init>>>>");
    this.initForm();
  }

  onShare(): void {
    const { message } = this.postForm.value;
    const post: CreatePost = { message };

    this.postService.save(post).subscribe(() => console.log("Post - Saved successfully!"));
  }

  private initForm(): void {
    this.postForm = this.fb.group({
      message: ["", Validators.required],
    });
  }

}
