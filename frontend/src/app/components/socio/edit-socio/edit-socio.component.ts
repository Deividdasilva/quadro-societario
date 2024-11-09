import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Socio } from '../../../services/socio/socio.interface';
import { SocioService } from '../../../services/socio/socio.service';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-edit-socio',
  templateUrl: './edit-socio.component.html',
  styleUrls: ['./edit-socio.component.css']
})
export class EditSocioComponent implements OnInit {
  socio: Socio = {
    id: 0,
    nome: '',
    cpf: '',
    empresa_id: 0
  };
  empresas: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private socioService: SocioService,
    private empresaService: EmpresaService
  ) {}

  ngOnInit(): void {
    const socioId = +this.route.snapshot.params['id'];
    if (!isNaN(socioId)) {
      this.socioService.getSocio(socioId).subscribe((data) => {
        this.socio = data;
      });
    } else {
      console.error('ID do sócio inválido.');
    }

    // Carregar a lista de empresas para o dropdown
    this.empresaService.getEmpresas().subscribe((data) => {
      this.empresas = data;
    });
  }

  updateSocio(): void {
    this.socioService.updateSocio(this.socio).subscribe(() => {
      this.router.navigate(['/socios']);
    });
  }

  goBack(): void {
    this.router.navigate(['/socios']); // Altere o caminho conforme necessário
  }
}
