import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-add-empresa',
  templateUrl: './add-empresa.component.html',
  styleUrls: ['./add-empresa.component.css']
})
export class AddEmpresaComponent {
  newEmpresa: any = {
    nome: '',
    cnpj: '' // Adicionei o campo CNPJ aqui
  };

  constructor(
    private empresaService: EmpresaService,
    private router: Router
  ) { }

  addEmpresa(): void {
    const cnpjLimpo = this.newEmpresa.cnpj.replace(/\D/g, '');

    if (cnpjLimpo.length !== 14) {
      alert('O CNPJ deve ter 14 dígitos.');
      return; // Interrompe a execução se o CPF for inválido
    }
    this.empresaService.addEmpresa(this.newEmpresa)
      .subscribe(() => {
        this.router.navigate(['/empresas']);
      });
  }

  voltar(): void {
    this.router.navigate(['/empresas']); // Altere o caminho conforme necessário
  }
}
