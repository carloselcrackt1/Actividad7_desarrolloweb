import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallImages } from './ball-images';

describe('BallImages', () => {
  let component: BallImages;
  let fixture: ComponentFixture<BallImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BallImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BallImages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
