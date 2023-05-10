import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ViewportScroller } from '@angular/common';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


