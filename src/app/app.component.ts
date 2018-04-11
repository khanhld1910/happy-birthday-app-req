import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { HomePage } from '../pages/home/home'
import { ScreenOrientation } from '@ionic-native/screen-orientation'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public screenOrientation: ScreenOrientation,
  ) {
    platform.ready().then((val) => {
      
      statusBar.styleDefault()
      splashScreen.hide()
      this.setBackButton()
      //console.log(val)
      if (val == 'cordova') {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)
      }

    })

  }
  setBackButton() {
    this.platform.registerBackButtonAction(() => {}, 1)
  }
}

