import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreenService } from '../screen.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit, OnDestroy {

  posts: any = [];
  card_type = { single: true, multiple: false };
  post: any = '';
  comments: any = [];

  loading = true;
  loading_2 = true;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private route: ActivatedRoute, private screenService: ScreenService) {
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.screenService.getPostById(this.route.snapshot.params.id).pipe(takeUntil(this.destroy$)).subscribe(x => {
      this.post = x;
      this.isFetchLoading(1);
    });
    this.screenService.getPostCommentsById(this.route.snapshot.params.id).pipe(takeUntil(this.destroy$)).subscribe(x => {
      this.comments = x;
      this.isFetchLoading(2);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  isFetchLoading(event) {
    event === 1 ? setTimeout(() => this.loading = false, 1500) :
      setTimeout(() => this.loading_2 = false, 1500);
  }

}
