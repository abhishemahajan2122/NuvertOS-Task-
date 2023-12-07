  import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundItemComponent } from './compound-item.component';

describe('CompoundItemComponent', () => {
  let component: CompoundItemComponent;
  let fixture: ComponentFixture<CompoundItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompoundItemComponent]
    });
    fixture = TestBed.createComponent(CompoundItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
