import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {TabsPage} from '../tabs/tabs';

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  moveToFront(){
    this.navCtrl.setRoot(TabsPage);
  }

  logout(){
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

}
