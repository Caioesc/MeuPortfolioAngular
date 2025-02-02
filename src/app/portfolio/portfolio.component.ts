import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projeto } from '../_modelos/Projeto';
import { Tag } from '../_modelos/Tag';
import { ProjetosService } from '../_services/projetos.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  projetos = {} as Projeto[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  java: boolean = false;
  python: boolean = false;
  javascript: boolean = false;
  bootstap: boolean = false;
  nodejs: boolean = false;
  react: boolean = false;
  html: boolean = false;
  css: boolean = false;
  express: boolean = false;
  django: boolean = false;
  filtrando: boolean = false;
  
  constructor(private titleService: Title, private projetoService: ProjetosService){
      this.titleService.setTitle('Caio Escorel - Portfólio');
    }
  ngOnInit(): void {
    this.projetos = this.projetoService.getProjetos();
  }

  filter(){
    let filterTags: Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.python){
      filterTags.push(Tag.PYTHON);
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.bootstap){
      filterTags.push(Tag.BOOTSTRAP);
    }
    if(this.nodejs){
      filterTags.push(Tag.NODEJS);
    }
    if(this.react){
      filterTags.push(Tag.REACT);
    }
    if(this.html){
      filterTags.push(Tag.HTML);
    }
    if(this.css){
      filterTags.push(Tag.CSS);
    }
    if(this.django){
      filterTags.push(Tag.DJANGO);
    }
    if(this.express){
      filterTags.push(Tag.EXPRESS);
    }

    if(this.python || this.java || this.javascript || this.typescript || this.html || this.css || this.angular || this.react || this.django || this.express || this.bootstap || this.nodejs){
      this.filtrando = true;
    }
    else{
      this.filtrando = false;
    }

    this.projetos = this.projetoService.getProjectByFilter(filterTags);
  }

  resetFilters(){
    this.python = false;
    this.java = false;
    this.javascript = false;
    this.typescript = false;
    this.html = false;
    this.css = false;
    this.angular = false;
    this.react = false;
    this.django = false;
    this.express = false;
    this.bootstap = false;
    this.nodejs = false;
    this.filtrando = false;

    this.projetos = this.projetoService.getProjetos();
  }
}
