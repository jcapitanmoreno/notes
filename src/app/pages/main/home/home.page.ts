import { Component, inject, OnInit } from '@angular/core';
import { IonButton, IonContent, IonFab, IonIcon } from '@ionic/angular/standalone';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonFab, IonButton, HeaderComponent, IonContent],
})
export class HomePage implements OnInit {
  firebaseService = inject(FirebaseService);
  utilsService = inject(UtilsService);
  constructor() {}

  ngOnInit() {}

  async signOut() {
    this.firebaseService.signOut().then(() => {
      this.utilsService.routerLink('/auth');
    });
  }
}