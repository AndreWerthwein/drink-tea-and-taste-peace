import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// custom modules
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { RadialDiagramsModule } from './radial-diagrams/radial-diagrams.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentsModule,
    RadialDiagramsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
