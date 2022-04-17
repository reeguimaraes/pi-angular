import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { MuralChamadosComponent } from '../mural-chamados/mural-chamados.component';
import { PainelChamadosComponent } from '../painel-chamados/painel-chamados.component'
import { MenuComponent } from '../menu/menu.component';

const rotas: Routes = [
  {path: 'mural-chamados', component: MuralChamadosComponent},
  {path: 'painel', component: PainelChamadosComponent},
  {path: '', redirectTo: '/mural-chamados', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
