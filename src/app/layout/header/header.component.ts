import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  links = [
    {
      title: 'About',
      source: '#about',
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
