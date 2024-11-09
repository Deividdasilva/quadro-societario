import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocioService } from '../../../services/socio/socio.service';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-add-socio',
  templateUrl: './add-socio.component.html',
  styleUrls: ['./add-socio.component.css']
})
export class AddSocioComponent implements OnInit {
  newSocio: any = {
    nome: '',
    cpf: '',
    empresa_id: null
  };
  empresas: any[] = [];

  constructor(
    private socioService: SocioService,
    private empresaService: EmpresaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Carrega a lista de empresas para o campo de seleção
    this.empresaService.getEmpresas().subscribe((data) => {
      this.empresas = data;
    });
  }

  addSocio(): void {
    // Remove caracteres não numéricos e verifica o comprimento do CPF
    const cpfLimpo = this.newSocio.cpf.replace(/\D/g, '');

    if (cpfLimpo.length !== 11) {
      alert('O CPF deve ter 11 dígitos.');
      return; // Interrompe a execução se o CPF for inválido
    }

    // Se o CPF for válido, continua com o envio dos dados
    this.socioService.addSocio(this.newSocio).subscribe(() => {
      this.router.navigate(['/socios']);
    });
  }


  goBack(): void {
    this.router.navigate(['/socios']);
  }
}
