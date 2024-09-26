import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutherDetailsComponent } from './auther-details.component';

describe('AutherDetailsComponent', () => {
  let component: AutherDetailsComponent;
  let fixture: ComponentFixture<AutherDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutherDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
