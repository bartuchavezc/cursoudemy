import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//  MODULES
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthModule } from './auth/auth.module';

//  COMPONENTS
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
