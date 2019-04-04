import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'pay-item',
    templateUrl: './item-list.page.html',
    styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() {
    }
}
