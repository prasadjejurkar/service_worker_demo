import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SwPush } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sw';

  data: any[] = [];

  constructor(private http: HttpClient, readonly swPush: SwPush) {
    // this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
    //   .subscribe((response) => {
    //     this.data = response;
    //   })
    // this.swPush.requestSubscription({ serverPublicKey: 'BEc27NCrwg2eiR5Xv7Z3iJAsPdmTODl0PshC5zsPeyP9pxy3yxBzCOxIfFP9I7EAipUOL10m8ihIRjPJwfR4Ksc' })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch(err => console.error("Could not subscribe to notifications", err));;

    // this.subscribeToPush();
    // this.swPush.notificationClicks.subscribe(
    //   ({ action, notification }) => {
    //     console.log("notification click");

    //     // TODO: Do something in response to notification click.
    //   });
  }

  // private async subscribeToPush() {
  //   try {
  //     const sub = await this.swPush.requestSubscription({
  //       serverPublicKey: 'BEc27NCrwg2eiR5Xv7Z3iJAsPdmTODl0PshC5zsPeyP9pxy3yxBzCOxIfFP9I7EAipUOL10m8ihIRjPJwfR4Ksc',
  //     });
  //     // TODO: Send to server.
  //   } catch (err) {
  //     console.error('Could not subscribe due to:', err);
  //   }
  // }

}
