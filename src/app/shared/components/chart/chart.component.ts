import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
    selector: 'pay-chart',
    templateUrl: './chart.page.html',
    styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {

    public categoriaSelecionada: any = {'guid': null};

    @Input() scrollPosition: number;
    @Input() hideDetail: boolean;
    @Input() data: any;

    @Output() select = new EventEmitter();

    constructor(public router: Router, public storageService: LocalStorageService) { }

    ngOnInit() {
        if (!this.hideDetail) {
            this.hideDetail = false;
        }
    }

    selectCategoria(item) {
        if (this.categoriaSelecionada.guid === item.guid) {
            this.categoriaSelecionada = {'guid': null};
            this.select.emit(null);
            return;
        }
        this.categoriaSelecionada = item;
        this.select.emit(item);
    }
}
