import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { MockService } from 'src/app/shared/services/mock.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes',
  templateUrl: 'detalhes.page.html',
  styleUrls: ['detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  public scroll = 0;
  public categoriaSelecionada: any;

  constructor(public storageService: LocalStorageService,
    public mockService: MockService,
    public modalController: ModalController) {

  }
  ngOnInit() {
    this.storageService.setJson('categoria', this.mockService.categorias);
  }

  get categorias() {
    return this.storageService.getJson('categoria');
  }

  fecharModal() {
    this.modalController.dismiss();
  }

  categoria(event) {
    if (event == null) {
      this.categoriaSelecionada = event;
      return;
    }
    this.categoriaSelecionada = event.guid;
  }
}
