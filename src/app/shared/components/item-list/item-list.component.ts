import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'pay-item',
    templateUrl: './item-list.page.html',
    styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {

    @Input() nome: string;
    @Input() categoria: string;
    @Input() preco: number;

    constructor(public router: Router) { }

    ngOnInit() {
    }
}
