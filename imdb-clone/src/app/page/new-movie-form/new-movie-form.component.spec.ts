import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMovieFormComponent } from './new-movie-form.component';

describe('NewMovieFormComponent', () => {
  let component: NewMovieFormComponent;
  let fixture: ComponentFixture<NewMovieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewMovieFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewMovieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
