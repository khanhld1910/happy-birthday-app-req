import { Component, ViewChild } from '@angular/core'
import { NavController, Slides } from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	@ViewChild('slides') slides: Slides

  constructor(
    public navCtrl: NavController,
  ) {
  }

  startApp() {
    //
  }

  ionViewWillEnter() {
    this.slides.update()

    let audioAsset = new Audio('assets/music/tone.mp3')
    audioAsset.play()
  }

  slideChanged() {
    this.slides.startAutoplay()
  }

}