import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { Empresa } from '../../../services/empresa/empresa.interface';

@Component({
  selector: 'app-edit-empresa',
  templateUrl: './edit-empresa.component.html',
  styleUrls: ['./edit-empresa.component.css']
})
export class EditEmpresaComponent implements OnInit {
  empresa: Empresa = {
    id: 0,
    nome: '',
    cnpj: ''
  };

  constructor(
    private empresaService: EmpresaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const empresaId = +this.route.snapshot.params['id'];
    if (!isNaN(empresaId)) {
      this.empresaService.getEmpresa(empresaId)
        .subscribe((data) => {
          this.empresa = data;
          console.log(this.empresa);
        });
    } else {
      console.error('ID da empresa inválido.');
    }
  }

  updateEmpresa(): void {
    this.empresaService.updateEmpresa(this.empresa)
      .subscribe(() => {
        this.router.navigate(['/empresas']);
      });
  }

  voltar(): void {
    this.router.navigate(['/empresas']); // Altere o caminho conforme necessário
  }
}
