import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'shared/services/http/http.service';
import { ApiUrls } from 'utils';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  constructor(
    private httpService: HttpService,
  ) { }

  save(post: Post): Observable<void> {
    return this.httpService.post<void>(ApiUrls.Post, post);
  }
}
