import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarProductosComponent } from './registrar-productos/registrar-productos.component';
import { RegistrarUsuariosComponent } from './registrar-usuarios/registrar-usuarios.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NavbarPrincipalComponent } from './navbar-principal/navbar-principal.component';

const routes: Routes = [


  {path: 'registrarproducto', component:RegistrarProductosComponent  },
  {path: 'registrarusuarios', component:RegistrarUsuariosComponent  },
  {path: 'productos', component:ProductosComponent},
  {path: 'usuarios', component:UsuariosComponent},
  {path: 'login', component:LoginComponent},
  {path: 'navbar', component:NavbarPrincipalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
