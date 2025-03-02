import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss'],
  imports: [IonicModule, ReactiveFormsModule],
})
export class EditProfileModalComponent {
  form: FormGroup;
  user: User;

  constructor(
    private fb: FormBuilder,
    private modalController: ModalController,
    private utilsService: UtilsService,
    private firebaseService: FirebaseService
  ) {
    this.user = this.utilsService.getLocalStoredUser()!;
    this.form = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.minLength(3)]],
    });
  }

  async save() {
    if (this.form.valid) {
      const loading = await this.utilsService.loading();
      await loading.present();

      const path: string = `users/${this.user.uid}`;
      this.user.name = this.form.value.name;
      this.firebaseService
        .updateDocument(path, { name: this.user.name })
        .then(async () => {
          this.utilsService.saveInLocalStorage('user', this.user);
          this.utilsService.presentToast({
            message: 'Nombre actualizado exitosamente',
            duration: 1500,
            color: 'success',
            position: 'middle',
            icon: 'checkmark-circle-outline',
          });
          this.modalController.dismiss({ success: true });
        })
        .catch((error) => {
          this.utilsService.presentToast({
            message: error.message,
            duration: 2500,
            color: 'danger',
            position: 'middle',
            icon: 'alert-circle-outline',
          });
        })
        .finally(() => {
          loading.dismiss();
        });
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
