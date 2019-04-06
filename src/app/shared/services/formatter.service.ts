import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class FormatterService {

    constructor(public storageService: LocalStorageService) { }

    formatarCategoria(guid) {
        const categorias = this.storageService.getJson('categoria');
        let response;
        categorias.forEach(element => {
            if (guid === element.guid) {
                response = element.label;
                return;
            }
        });
        return response;
    }
}
