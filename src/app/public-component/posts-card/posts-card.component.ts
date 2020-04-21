import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-posts-card',
    templateUrl: './posts-card.component.html',
    styleUrls: ['./posts-card.component.scss']
})
export class PostCardComponent implements OnInit {
    @Input() post_content: any[];
    @Input() card_type = { single: false, multiple: false };
    @Input() post = { title: "", body: "" };
    @Input() loading: boolean;

    constructor() { }

    ngOnInit(): void {

    }
}
