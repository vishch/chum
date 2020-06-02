import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpService } from '@shared/services/http/http.service';
import { Thread } from '@shared/models/thread';
import { PostContent } from '@shared/models/post/post-content';
import { ApiUrls } from '@utils';
import { CreatePost } from './create-post';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private _postSaved$ = new Subject<Thread<PostContent>>();

  constructor(
    private httpService: HttpService,
  ) { }

  get postSaved$(): Observable<Thread<PostContent>> {
    return this._postSaved$.asObservable();
  }

  save(post: CreatePost): Observable<Thread<PostContent>> {
    return this.httpService.post<Thread<PostContent>>(ApiUrls.Post, post).pipe(
      tap((result) => {
        console.log("Saved the Post>>>", result);
        this._postSaved$.next(result);
      }),
    );
  }

  getLastSaved(): Observable<Thread<PostContent>> {
    return this.httpService.get<Thread<PostContent>>(ApiUrls.Post).pipe(
      tap(result => {
        console.log("Got last saved>>>", result);
      }),
    );
  }
}
