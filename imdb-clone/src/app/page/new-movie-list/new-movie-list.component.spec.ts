import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMovieListComponent } from './new-movie-list.component';

describe('NewMovieListComponent', () => {
  let component: NewMovieListComponent;
  let fixture: ComponentFixture<NewMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewMovieListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
