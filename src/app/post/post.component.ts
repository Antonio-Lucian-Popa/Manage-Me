import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../shared/interface/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input()
  post!: Post;

  panelOpenState = false;

  constructor() { }

  ngOnInit() {}

}
