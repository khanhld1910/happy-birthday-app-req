import { Component, ViewChild } from '@angular/core'
import { NavController, Slides } from 'ionic-angular'
import {SmartAudioProvider} from '../../providers/smart-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	@ViewChild('slides') slides: Slides

  constructor(
    public navCtrl: NavController,
    private smartAudio: SmartAudioProvider
  ) {
  }

  startApp() {
    //
  }

  onSlideChangeStart(slider: Slides) {
    //
  }

  ionViewWillEnter() {
    this.slides.update()

    this.smartAudio.play('bgMusic')
  }

}