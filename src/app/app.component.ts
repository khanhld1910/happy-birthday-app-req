import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { HomePage } from '../pages/home/home'
import { ScreenOrientation } from '@ionic-native/screen-orientation'
import {SmartAudioProvider} from '../providers/smart-audio';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage

  constructor(
    private platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private screenOrientation: ScreenOrientation,
    private smartAudio: SmartAudioProvider
  ) {
    platform.ready().then((val) => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault()
      splashScreen.hide()
      this.setBackButton()
      //console.log(val)
      if (val == 'cordova') {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)
      }

      smartAudio.preload('bgMusic', 'assets/music/tone.mp3');
    })

  }
  setBackButton() {
    this.platform.registerBackButtonAction(() => {}, 1)
  }
}

