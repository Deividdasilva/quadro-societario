import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Socio } from '../../../services/socio/socio.interface';
import { SocioService } from '../../../services/socio/socio.service';

@Component({
  selector: 'app-list-socio',
  templateUrl: './list-socio.component.html',
  styleUrls: ['./list-socio.component.css']
})
export class ListSocioComponent implements OnInit {
  socios: Socio[] = [];
  filteredSocios: Socio[] = [];
  searchTerm: string = '';
  socioToDelete: Socio | null = null;
  @ViewChild('deleteModal') deleteModal: any; // Adicionando referência ao modal

  constructor(
    private socioService: SocioService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadSocios();
  }

  loadSocios(): void {
    this.socioService.getSocios()
      .subscribe((data) => {
        this.socios = data;
        this.filterSocios();
      });
  }

  // filterSocios(): void {
  //   this.filteredSocios = this.socios.filter(socio =>
  //     socio.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   );
  // }

  filterSocios(): void {
    this.filteredSocios = this.socios.filter(socio =>
      socio.nome?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  editSocio(socio: Socio): void {
    this.router.navigate(['/socios/edit', socio.id]);
  }

  deleteSocio(socio: Socio): void {
    this.socioToDelete = socio;
    if (this.socioToDelete) {
      this.modalService.open(this.deleteModal, { centered: true });
    }
  }

  confirmDeleteAction(): void {
    if (this.socioToDelete) {
      this.socioService.deleteSocio(this.socioToDelete.id)
        .subscribe(() => {
          this.loadSocios();
        });
    }

    this.socioToDelete = null;

    this.modalService.dismissAll();
  }

  addSocio(): void {
    this.router.navigate(['/socios/add']);
  }
}
