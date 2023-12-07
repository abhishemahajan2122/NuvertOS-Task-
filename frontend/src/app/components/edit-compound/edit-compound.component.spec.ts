import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompoundComponent } from './edit-compound.component';

describe('EditCompoundComponent', () => {
  let component: EditCompoundComponent;
  let fixture: ComponentFixture<EditCompoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCompoundComponent]
    });
    fixture = TestBed.createComponent(EditCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
