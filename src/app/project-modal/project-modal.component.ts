import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Projeto } from '../_modelos/Projeto';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  projeto = {} as Projeto;

  constructor(public bsModalRef: BsModalRef){

  }
}
