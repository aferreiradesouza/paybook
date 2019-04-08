import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { MockService } from 'src/app/shared/services/mock.service';
import { ModalController } from '@ionic/angular';
import { DetalhesPage } from '../modais/detalhes.page';
import { FormatterService } from 'src/app/shared/services/formatter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public scroll = 0;
  public itens: any;
  public categoriaSelecionada: any;

  constructor(
    public storageService: LocalStorageService,
    public mockService: MockService,
    public modalController: ModalController,
    public formatterService: FormatterService) {

      this.storageService.setJson('categoria', this.mockService.categorias);
      this.storageService.setJson('itens', this.mockService.itens);

      this.itens = this.storageService.getJson('itens');

  }
  ngOnInit() {

    console.log(this.itens);
  }

  get categorias() {
    return this.storageService.getJson('categoria');
  }

  logScrolling(event) {
    this.scroll = event.detail.currentY;
  }

  formaterCategoria(guid) {
    return this.formatterService.formatarCategoria(guid);
  }

  async detalhes() {
    const modal = await this.modalController.create({
      component: DetalhesPage
    });
    await modal.present();
  }

  actionCategoria(event) {
    if (event == null) {
      this.categoriaSelecionada = event;
      return;
    }
    this.categoriaSelecionada = event.guid;
  }
}
