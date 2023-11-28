import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


 export interface AuthResponse {
    count: number;
    included: null | any;
    input: string;
    result: any[];
    links: null | any;
}
