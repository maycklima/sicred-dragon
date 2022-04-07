import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDragaoComponent } from './listar-dragao.component';

describe('ListarDragaoComponent', () => {
  let component: ListarDragaoComponent;
  let fixture: ComponentFixture<ListarDragaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDragaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDragaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
