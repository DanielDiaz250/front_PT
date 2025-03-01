import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(),
    provideHttpClient(),
    HttpClientModule,
    ReactiveFormsModule
  ]
};
