import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  galleryImages = [
    {
      id: 1,
      source: '../../../assets/images/image6-gal-1.jpg',
      alt: 'Peeker view of langscape.',
      size: 'smol',
    },
    {
      id: 2,
      source: '../../../assets/images/image7-gal-2.jpg',
      alt:
        'A cabin in the winter surrounded by a bunch of pine trees and a frozen lake.',
      size: 'smol',
    },
    {
      id: 3,
      source: '../../../assets/images/image8-gal-3.jpg',
      alt:
        'View of a large canon landscape in between two large pieces of land.',
      size: 'smol',
    },
    {
      id: 4,
      source: '../../../assets/images/image9-gal-4.jpg',
      alt: 'Drone view of a historic city.',
      size: 'large-bb',
    },
    {
      id: 5,
      source: '../../../assets/images/image10-gal-5.jpg',
      alt: 'Historical building with a 3 figure statues situated in front.',
      size: 'large-bb',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
