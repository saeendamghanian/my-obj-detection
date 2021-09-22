import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPipeComponent } from './media-pipe.component';

describe('MediaPipeComponent', () => {
  let component: MediaPipeComponent;
  let fixture: ComponentFixture<MediaPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
