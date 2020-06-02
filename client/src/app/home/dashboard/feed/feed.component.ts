import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Thread } from '@shared/models/thread';
import { PostContent } from '@shared/models/post/post-content';
import { merge } from 'rxjs/operators';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {

  lastPost$: Observable<Thread<PostContent>>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.lastPost$ = this.postService.getLastSaved().pipe(
      merge(this.postService.postSaved$),
    );
  }

}
