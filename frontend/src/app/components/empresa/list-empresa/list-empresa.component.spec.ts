import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListEmpresaComponent } from './list-empresa.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmpresaService } from '../../../services/empresa/empresa.service';

describe('ListEmpresaComponent', () => {
  let component: ListEmpresaComponent;
  let fixture: ComponentFixture<ListEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListEmpresaComponent],
      imports: [HttpClientTestingModule],
      providers: [EmpresaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
