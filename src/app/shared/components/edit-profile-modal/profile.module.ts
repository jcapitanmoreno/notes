import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from '../../../pages/main/profile/profile.page';
import { EditProfileModalComponent } from './edit-profile-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePage,
    EditProfileModalComponent
  ],

})
export class ProfilePageModule {}