import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../screen.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  posts: any = [];
  card_type = { single: false, multiple: true };
  post = {};
  loading = true;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private screenService: ScreenService) { }

  ngOnInit(): void {
    this.screenService.getPosts().pipe(takeUntil(this.destroy$)).subscribe(x => {
      this.posts = x;
      this.isFetchLoading();
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  isFetchLoading() {
    setTimeout(() => this.loading = false, 500);
  }
}
