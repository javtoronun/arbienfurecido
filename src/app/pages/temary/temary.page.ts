import { Component, OnInit } from '@angular/core';

import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-temary',
  templateUrl: './temary.page.html',
  styleUrls: ['./temary.page.scss'],
})
export class TemaryPage implements OnInit {

  page: number = 1;

  constructor(
    private document: DocumentViewer,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.menu.enable(true, 'temas');
    //this.menu.open('temas');
  }

}
