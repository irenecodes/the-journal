import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDestinationsComponent } from './banner-destinations.component';

describe('BannerDestinationsComponent', () => {
  let component: BannerDestinationsComponent;
  let fixture: ComponentFixture<BannerDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
