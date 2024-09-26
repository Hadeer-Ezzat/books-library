import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistStoryComponent } from './wishlist-story.component';

describe('WishlistStoryComponent', () => {
  let component: WishlistStoryComponent;
  let fixture: ComponentFixture<WishlistStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
