import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapointComponent } from './datapoint.component';

describe('DatapointComponent', () => {
  let component: DatapointComponent;
  let fixture: ComponentFixture<DatapointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
