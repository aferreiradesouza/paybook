import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'pay-fab-button',
    templateUrl: './fab-button.page.html',
    styleUrls: ['./fab-button.component.scss']
})

export class FabButtonComponent implements OnInit {

    public page: string;

    constructor(public router: Router, public navCtrl: NavController) {
    }

    ngOnInit() {
    }
}
