import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BradcrumsComponent } from './bradcrums/bradcrums.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BradcrumsComponent,
    SidebarComponent,
    ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    BradcrumsComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
