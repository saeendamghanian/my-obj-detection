import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfFaceDetectionComponent } from './tf-face-detection.component';

describe('TfFaceDetectionComponent', () => {
  let component: TfFaceDetectionComponent;
  let fixture: ComponentFixture<TfFaceDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfFaceDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TfFaceDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
