import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGradeComponent } from './list-grade.component';

describe('ListGradeComponent', () => {
  let component: ListGradeComponent;
  let fixture: ComponentFixture<ListGradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGradeComponent]
    });
    fixture = TestBed.createComponent(ListGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
