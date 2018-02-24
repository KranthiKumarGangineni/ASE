import { Component,ViewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

@ViewChild('username') user;
@ViewChild("password") pwd;
@ViewChild('registerusername') registerUser;
@ViewChild("registerfirstname") firstName;
@ViewChild('registerlastname') lastName;
@ViewChild("registerpassword") registerPassword;
@ViewChild("registerconfirmpassword") registerConfirmPassword;

  constructor(public navCtrl: NavController,public alertCtrl : AlertController) {

  }
  
  signIn(){
  if(this.user.value == 'admin' && this.pwd.value == 'admin'){
  let alert = this.alertCtrl.create({
      title: 'Login Succesful!',
      subTitle: 'You are successfully logged in!',
      buttons: ['OK']
    });
    alert.present();
  }
  else{
  let alert = this.alertCtrl.create({
      title: 'Login Invalid!',
      subTitle: 'Invalid Login,please try with valid ones!',
      buttons: ['OK']
    });
    alert.present();
  }
  }
  
  register(){
   if(this.registerUser.value == '' || this.firstName.value == ''
   || this.lastName.value == '' || this.registerPassword.value == ''
   || this.registerConfirmPassword.value == ''){
  let alert = this.alertCtrl.create({
      title: 'Registration Unsuccessful!',
      subTitle: 'Fields cannot be empty!',
      buttons: ['OK']
    });
    alert.present();
  }
  else if(this.registerPassword.value != this.registerConfirmPassword.value){
  let alert = this.alertCtrl.create({
      title: 'Passwords mismatch!',
      subTitle: 'Password and Confirm Passwords are not matched!',
      buttons: ['OK']
    });
    alert.present();
  }
  else{
  let alert = this.alertCtrl.create({
      title: 'Registration Successful!',
      subTitle: 'You are successfully registered!',
      buttons: ['OK']
    });
    alert.present();
  }
  }

}
