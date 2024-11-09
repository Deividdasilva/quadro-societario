import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Empresa } from '../../../services/empresa/empresa.interface';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-list-empresa',
  templateUrl: './list-empresa.component.html',
  styleUrls: ['./list-empresa.component.css']
})
export class ListEmpresaComponent implements OnInit {
  empresas: Empresa[] = [];
  filteredEmpresas: Empresa[] = [];
  searchTerm: string = '';
  empresaToDelete: Empresa | null = null;
  @ViewChild('deleteModal') deleteModal: any; // Adicionando referência ao modal

  constructor(
    private empresaService: EmpresaService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadEmpresas();
  }

  loadEmpresas(): void {
    this.empresaService.getEmpresas()
      .subscribe((data) => {
        this.empresas = data;
        this.filterEmpresas();
      });
  }

  filterEmpresas(): void {
    this.filteredEmpresas = this.empresas.filter(empresa =>
      empresa.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  editEmpresa(empresa: Empresa): void {
    this.router.navigate(['/empresas/edit', empresa.id]);
  }

  deleteEmpresa(empresa: Empresa): void {
    this.empresaToDelete = empresa;
    if (this.empresaToDelete) {
      this.modalService.open(this.deleteModal, { centered: true });
    }
  }

  confirmDeleteAction(): void {
    if (this.empresaToDelete) {
      this.empresaService.deleteEmpresa(this.empresaToDelete.id)
        .subscribe(() => {
          this.loadEmpresas();
        });
    }

    this.empresaToDelete = null;

    this.modalService.dismissAll();
  }

  addEmpresa(): void {
    this.router.navigate(['/empresas/add']);
  }
}
