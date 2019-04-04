import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'pay-chart',
    templateUrl: './chart.page.html',
    styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() {
    }
}
