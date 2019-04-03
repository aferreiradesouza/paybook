import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'pay-header',
    templateUrl: './header.page.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    @Input() title: string;

    constructor(public router: Router) { }

    ngOnInit() {
    }
}
