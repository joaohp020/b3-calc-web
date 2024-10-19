import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideNgxMask } from 'ngx-mask';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideNgxMask()
  ]
})
  .catch(err => console.error(err));
