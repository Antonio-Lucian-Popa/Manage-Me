import { Post } from './../shared/interface/post';
import { Component } from '@angular/core';
import { PostState } from '../shared/enum/post-state';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  posts: Post[] = [
    {
      id: 1,
      price: '350 Ron',
      status: PostState.INCARCAT,
      startLocation: 'Iasi, Romania',
      endLocation: 'Cluj, Romania',
      parcel: [
        {
          name: 'Tevi',
          quantity: 'x3',
          dimension: '140x30'
        },
        {
          name: 'Pat',
          quantity: 'x1',
          dimension: '190x160'
        }
      ],
      isPostCompleted: false
    },
    {
      id: 2,
      price: '840 Ron',
      status: PostState.DE_INCARCAT,
      startLocation: 'Brasov, Romania',
      endLocation: 'Bucuresti, Romania',
      parcel: [
        {
          name: 'Tevi',
          quantity: 'x3',
          dimension: '140x30'
        },
        {
          name: 'Pat',
          quantity: 'x1',
          dimension: '190x160'
        }
      ],
      isPostCompleted: false
    }
  ];

  constructor() { }

}
