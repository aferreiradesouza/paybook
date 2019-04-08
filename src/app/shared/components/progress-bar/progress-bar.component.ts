import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'pay-progress-bar',
    templateUrl: './progress-bar.page.html',
    styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent implements OnInit {
    @Input() porcentagem: string;
    @Input() cor: string;

    constructor(public router: Router, public navCtrl: NavController) {
    }

    ngOnInit() {
    }
}
