import { Component, Input } from '@angular/core';
import { Projeto } from '../_modelos/Projeto';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() projeto = {} as Projeto;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService){

  }

  OpenProjectModal(){

    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        projeto: this.projeto
      }
    };
    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }
}
