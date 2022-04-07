import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheDragaoComponent } from './detalhe-dragao.component';

describe('DetalheDragaoComponent', () => {
  let component: DetalheDragaoComponent;
  let fixture: ComponentFixture<DetalheDragaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheDragaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheDragaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
