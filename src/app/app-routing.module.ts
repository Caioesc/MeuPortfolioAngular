import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'curriculo', component: CurriculoComponent},
  {path: 'contato', component: ContatoComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
