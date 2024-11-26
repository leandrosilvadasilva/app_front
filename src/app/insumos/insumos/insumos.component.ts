import { Component, OnInit } from '@angular/core';
import { Insumo } from '../model/insumo';
import { InsumosService } from '../services/insumos.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrl: './insumos.component.scss'
})
export class InsumosComponent implements OnInit{

  insumos$: Observable <Insumo[]> ;

  displayedColumns = [
      'nome_insumo',
      'marca_insumo',
      'preco_insumo',
      'quantidade_insumo'
  ];

  //insumoService: InsumosService;
  constructor(
    private insumoService: InsumosService,
    public dialog: MatDialog
  ){
    //this.insumos = []; pode inicializar aqui também
    //this.insumoService  = new InsumosService();
    this.insumos$ = this.insumoService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar insumo')
        return of ([])
      })
    );

  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
