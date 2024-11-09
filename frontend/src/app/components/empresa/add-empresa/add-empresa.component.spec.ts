import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEmpresaComponent } from './add-empresa.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmpresaService } from '../../../services/empresa/empresa.service';

describe('AddEmpresaComponent', () => {
  let component: AddEmpresaComponent;
  let fixture: ComponentFixture<AddEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEmpresaComponent],
      imports: [HttpClientTestingModule],
      providers: [EmpresaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
