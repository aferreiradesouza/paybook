import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class MockService {

    constructor() { }

    get categorias() {
        return [
            {
                'guid': 1,
                'cor': '#16a085',
                'label': 'Diversão',
                'porcentagem': '25%',
                'preco': 'R$3.400,00'
            },
            {
                'guid': 2,
                'cor': '#27ae60',
                'label': 'Lazer',
                'porcentagem': '15%',
                'preco': 'R$2.500,00'
            },
            {
                'guid': 3,
                'cor': '#c0392b',
                'label': 'Trabalho',
                'porcentagem': '10%',
                'preco': 'R$1.260,00'
            },
            {
                'guid': 4,
                'cor': '#8e44ad',
                'label': 'Futebol',
                'porcentagem': '40%',
                'preco': 'R$7.000,00'
            },
            {
                'guid': 5,
                'cor': '#f39c12',
                'label': 'Música',
                'porcentagem': '10%',
                'preco': 'R$1.260,00'
            }
        ];
    }

    get itens() {
        return [
            {
                'guid': 1,
                'guidCategoria': 1,
                'nome': 'Premiere',
                'preco': 45.90,
                'data': new Date()
            },
            {
                'guid': 2,
                'guidCategoria': 3,
                'nome': 'Viagem para Alemanha',
                'preco': 2500,
                'data': new Date()
            },
            {
                'guid': 3,
                'guidCategoria': 1,
                'nome': 'Maçã',
                'preco': 5000,
                'data': new Date()
            },
            {
                'guid': 4,
                'guidCategoria': 4,
                'nome': 'Banana',
                'preco': 4500,
                'data': new Date()
            },
            {
                'guid': 4,
                'guidCategoria': 5,
                'nome': 'Laranja',
                'preco': 4500,
                'data': new Date()
            },
            {
                'guid': 4,
                'guidCategoria': 1,
                'nome': 'Televisão',
                'preco': 4500,
                'data': new Date()
            },
            {
                'guid': 4,
                'guidCategoria': 2,
                'nome': 'Fatura Cartão',
                'preco': 4500,
                'data': new Date()
            },
            {
                'guid': 4,
                'guidCategoria': 1,
                'nome': 'Fatura Cartão',
                'preco': 4500,
                'data': new Date()
            },
            {
                'guid': 4,
                'guidCategoria': 2,
                'nome': 'Fatura Cartão',
                'preco': 4500,
                'data': new Date()
            },
            {
                'guid': 4,
                'guidCategoria': 5,
                'nome': 'Fatura Cartão',
                'preco': 4500,
                'data': new Date()
            },
        ];
    }
}
