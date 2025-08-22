import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'sobre', component: SobreComponent}
];
