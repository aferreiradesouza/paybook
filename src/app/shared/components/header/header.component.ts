import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'pay-header',
    templateUrl: './header.page.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    @Input() title: string;
    @Input() closedButton: boolean;

    @Output() closed = new EventEmitter();

    constructor(public router: Router) { }

    ngOnInit() {
        if (!this.closedButton) {
            this.closedButton = false;
        }
    }

    fechar() {
        this.closed.emit();
    }
}
