import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// importando os modules criados no pages
import { IndexModule } from './pages/index/index.module';
import { PortifolioModule } from './pages/portifolio/portifolio.module';
import { MenuComponent } from './shared/menu/menu.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  // Importando os Modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    PortifolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
