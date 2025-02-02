import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css']
})
export class CurriculoComponent {

  isFormacaoOpen: boolean = false;
  isOutrasFormacoesOpen: boolean = false;
  isCertificadosOpen: boolean = false;
  isHabilidadesOpen: boolean = false;
  isTrabalhosVoluntariosOpen: boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2){
      this.titleService.setTitle('Caio Escorel - Currículo');
    }

    baixarArquivo(){
      const link = this.renderer.createElement('a');
      link.setAttribute('target', '_blank');
      link.setAttribute('href', '../../assets/curriculo-caio.pdf');
      link.setAttribute('download', 'curriculo-caio.pdf');
      link.click();
      link.remove();
    }
}
