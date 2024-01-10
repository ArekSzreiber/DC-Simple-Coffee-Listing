import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularityTagComponent } from './popularity-tag.component';

describe('PopularityTagComponent', () => {
  let component: PopularityTagComponent;
  let fixture: ComponentFixture<PopularityTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularityTagComponent]
    });
    fixture = TestBed.createComponent(PopularityTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
