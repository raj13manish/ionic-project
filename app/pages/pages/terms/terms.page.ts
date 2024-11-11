// terms.page.ts
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage {
  constructor(private navCtrl: NavController) {}

  agreeToTerms() {
    // Logic for agreeing to terms
    // Navigate to the next page or save agreement status
    this.navCtrl.navigateRoot('/home');  // Redirect to home or desired page
  }
}
