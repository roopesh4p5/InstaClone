import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatLogoutComponent } from './mat-logout.component';

describe('MatLogoutComponent', () => {
  let component: MatLogoutComponent;
  let fixture: ComponentFixture<MatLogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatLogoutComponent]
    });
    fixture = TestBed.createComponent(MatLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
