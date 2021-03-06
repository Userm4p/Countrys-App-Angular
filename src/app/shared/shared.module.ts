import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-rounting.module';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    MenuComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
