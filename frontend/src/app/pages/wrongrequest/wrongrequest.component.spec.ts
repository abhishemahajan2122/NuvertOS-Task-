import { ComponentFixture, TestBed } from '@angular/core/testing';

import { wrongrequestComponent } from './wrongrequest.component';

describe('wrongrequestComponent', () => {
  let component: wrongrequestComponent;
  let fixture: ComponentFixture<wrongrequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [wrongrequestComponent],
    });
    fixture = TestBed.createComponent(wrongrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
