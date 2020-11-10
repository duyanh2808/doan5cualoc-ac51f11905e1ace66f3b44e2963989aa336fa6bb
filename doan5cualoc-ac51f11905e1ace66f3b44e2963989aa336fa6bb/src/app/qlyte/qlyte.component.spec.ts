import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlyteComponent } from './qlyte.component';

describe('QlyteComponent', () => {
  let component: QlyteComponent;
  let fixture: ComponentFixture<QlyteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlyteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlyteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
