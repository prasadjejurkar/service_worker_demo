import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule, SwUpdate, SwPush } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { MatSnackBarModule, MatSnackBar } from '@angular/material'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private update: SwUpdate, private push: SwPush, private snacbar: MatSnackBar) {
    console.log("AppModule");

    update.available.subscribe((update) => {
      console.log('udpate available');
      const snack = snacbar.open('Update Available', 'Reload');
      snack
        .onAction()
        .subscribe(() => {
          window.location.reload();
        })
      push.messages.subscribe((msg) => {
        console.log(msg);
        snacbar.open(JSON.stringify(msg));
      })

      const key = 'BEc27NCrwg2eiR5Xv7Z3iJAsPdmTODl0PshC5zsPeyP9pxy3yxBzCOxIfFP9I7EAipUOL10m8ihIRjPJwfR4Ksc';
      push.requestSubscription({ serverPublicKey: key })
        .then(pushSubscription => {
          console.log("pushSubscription");
          console.log(pushSubscription.toJSON());

        })
    })
  }
}


