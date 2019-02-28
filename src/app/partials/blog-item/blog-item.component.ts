import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
  animations: [
    trigger(
      'gamesSkeletonAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('100ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('100ms', style({opacity: 0}))
        ])
      ]
    ),
  ],
})
export class BlogItemComponent implements OnInit
{
  showPost = false;

  constructor()
  {
    setTimeout(() => {
      this.showPost = true;
    }, 1500);
  }

  ngOnInit() {}
}
