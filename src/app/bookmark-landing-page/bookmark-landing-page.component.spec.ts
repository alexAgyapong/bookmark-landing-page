import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkLandingPageComponent } from './bookmark-landing-page.component';

describe('BookmarkLandingPageComponent', () => {
  let component: BookmarkLandingPageComponent;
  let fixture: ComponentFixture<BookmarkLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
