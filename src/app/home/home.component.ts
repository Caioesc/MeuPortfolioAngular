import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjetosService } from '../_services/projetos.service';
import { Projeto } from '../_modelos/Projeto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  projetoDestaque = {} as Projeto;

  constructor(private titleService: Title, private projetoService: ProjetosService){
    this.titleService.setTitle('Caio Escorel - Home');
  }
  ngOnInit(): void {
    this.projetoDestaque = this.projetoService.getProjetoById(0);
  }
}
