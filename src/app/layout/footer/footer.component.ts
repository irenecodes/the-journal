import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  links = [
    {
      title: 'About',
      source: 'home#about',
    },
    {
      title: 'Blog',
      source: 'blog',
    },
    {
      title: 'Contact',
      source: 'contact',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
