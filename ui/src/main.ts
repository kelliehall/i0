import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { CoreModule } from './app/core/core.module';
import 'hammerjs';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CoreModule)
  .catch(err => console.error(err));
