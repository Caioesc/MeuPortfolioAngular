import { Injectable } from '@angular/core';
import { Projeto } from '../_modelos/Projeto';
import { Tag } from '../_modelos/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  projetos: Projeto[] = [
      {id:0, nome: 'Portfolio', resumo: 'Portfolio feito em Angular.', descricao: 'Projeto final da disciplina de Frontend do treinamento "Do Zero ao Full Stack" da Treina Recife, patrocinado pela Consenso Tecnologia.',projetoLink: '#', tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.BOOTSTRAP], imagens: ["../../assets/media/portfolioangular/image1.png", "../../assets/media/portfolioangular/image2.png", "../../assets/media/portfolioangular/image3.png"]},
      {id:1, nome: 'Página de integrantes', resumo: 'Projeto da cadeira de desenvolvimento web.', descricao: 'Projeto final da disciplina de desenvolvimento web pela graduação em Análise e Desenvolvimento de Sistemas.',projetoLink: 'https://github.com/Caioesc/Caioesc.github.io', tags: [Tag.HTML, Tag.CSS, Tag.JAVASCRIPT], imagens: ["../../assets/media/desenvolvimentoweb/image1.png", "../../assets/media/desenvolvimentoweb/image2.png", "../../assets/media/desenvolvimentoweb/image3.png"]},
      {id:2, nome: 'Urna Eletrônica', resumo: 'Projeto de urna eletrônica em java.', descricao: 'Projeto final da disciplina Programação orientada a objetos do treinamento "Do Zero ao Full Stack" da Treina Recife, patrocinado pela Consenso Tecnologia.',projetoLink: 'https://github.com/Caioesc/UrnaEletronicaJava', tags: [Tag.JAVA], imagens: ["../../assets/media/urnaeletronicajava/image1.png", "../../assets/media/urnaeletronicajava/image2.png", "../../assets/media/urnaeletronicajava/image3.png"]}
      
    ];
  constructor() { }

  getProjetos(){
    return this.projetos;
  }

  getProjetoById(id: number) : Projeto{
    let projeto = this.projetos.find(projeto => projeto.id === id);

    if (projeto === undefined){
      throw new TypeError('Não existe projeto com esse ID: ' + id);
    }

    return projeto;
  }

  getProjectByFilter(filterTags: Tag[]){
    let filteredProjects: Projeto[] = [];

    this.projetos.forEach(function(project){
      let foundAll = true;

      filterTags.forEach(function(filterTag){
        if(project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
