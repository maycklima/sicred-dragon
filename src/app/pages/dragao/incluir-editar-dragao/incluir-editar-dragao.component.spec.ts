import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirEditarDragaoComponent } from './incluir-editar-dragao.component';

describe('IncluirEditarDragaoComponent', () => {
  let component: IncluirEditarDragaoComponent;
  let fixture: ComponentFixture<IncluirEditarDragaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirEditarDragaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirEditarDragaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
