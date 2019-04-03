import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'pay-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
    public page: string;
    constructor(public router: Router, public navCtrl: NavController) {
        this.page = 'home';
    }

    ngOnInit() {
    }

    mudancaTab(destino) {
        if (this.page === destino) {
            return;
        }
        this.page = destino;
        this.navCtrl.navigateRoot(destino);
    }
}
