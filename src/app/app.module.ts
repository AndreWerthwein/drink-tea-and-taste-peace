import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// custom modules
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { RadialDiagramsModule } from './radial-diagrams/radial-diagrams.module';
import { TeaEvaluationModule } from './tea-evaluation/tea-evaluation.module';

// translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        // custom modules
        SharedComponentsModule,
        RadialDiagramsModule,
        TeaEvaluationModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
