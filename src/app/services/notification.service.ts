import { Injectable } from '@angular/core';
import { Miniature } from 'src/app/models/miniature.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(
    private firebaseService: FirebaseService,
    private utilsService: UtilsService
  ) {}

  async checkAndSendNotifications() {
    const user = this.utilsService.getLocalStoredUser();
    if (!user) return;

    const path = `users/${user.uid}/miniatures`;
    const miniatures = await this.firebaseService.getCollectionDataOnce(path);

    const now = new Date().getTime();
    miniatures.map((doc: any) => this.firebaseService.mapToMiniature(doc)).forEach((miniature: Miniature) => {
      const date2 = new Date(miniature.date2).getTime();
      if (date2 <= now) {
        this.sendNotification(miniature);
      }
    });
  }

  sendNotification(miniature: Miniature) {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Tarea a punto de expirar', {
        body: `La tarea "${miniature.name}" está a punto de expirar.`,
        icon: 'assets/icon/favicon.png',
      });
    }
  }
}