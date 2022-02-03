import { Component, OnInit } from '@angular/core';
import { ChartType } from "angular-google-charts";
import { DetalleCompraService } from "../services/detalle-compra.service"
import { MarcasService } from '../services/marcas.service';
import { ProductosService } from '../services/productos.service';
import { Product , ResponceUpdate } from '../producto.model';
import { Marca } from 'src/app/core/models/marcas-model';
import { tap , catchError } from 'rxjs/operators';
import { DetalleCompra } from '../detalleCompra.model';


@Component({
  selector: 'app-stadistic',
  templateUrl: './stadistic.component.html',
  styleUrls: ['./stadistic.component.css']
})
export class StadisticComponent implements OnInit {

  marcas: Marca[] = [];
  productos: Product[] = [];
  detalle: DetalleCompra[] = [];
  productosOrdenados: Product[] = [];

  myType = ChartType.PieChart;
  title : string = "BATERIAS  VENDIDAS";
  //type  : string = "PieChart";
  data : [string , number][] = [];
  columnNames = ["Browser", "Percentage"];
  options = {    
  };
  width  : number = 400;
  height : number = 400;


  myType2 = ChartType.PieChart;
  title2 : string = "MARCAS VENDIDAS";
  //type  : string = "PieChart";
  data2 : [string , number][] = [];
  columnNames2 = ["Browser", "Percentage"];
  options2 = {    
  };
  width2  : number = 400;
  height2 : number = 400;


  constructor(
    private marcasService: MarcasService,
    private productosService: ProductosService,
    private detalleCompraService: DetalleCompraService
  ) { }

  ngOnInit(): void {
    this.cargarMarcas();
    //this.cargarproductos();
    //this.cargarDetallesCompras();
    //this.comparar();
  }

  cargarMarcas(){
    this.marcasService.getMarcas()
    .pipe(
      tap((marcas: Marca[]) => {
        this.marcas = marcas
        console.log(this.marcas);
        this.cargarproductos();
      })
    )
    .subscribe()
  }

  cargarproductos(){
    this.productosService.getAllProductos()
    .pipe(
      tap((productos: Product[]) => {
        this.productos = productos;
        console.log(this.productos);
        this.cargarDetallesCompras();
      })
    )
    .subscribe()
  }

  cargarDetallesCompras(){
    this.detalleCompraService.getDetalleCompra()
    .pipe(
      tap((detalle: DetalleCompra[]) => {
        this.detalle = detalle;
        console.log(this.detalle);
        this.comparar();
      })
    )
    .subscribe()
  }

  comparar(){
    let arrayProductos = [];
    let arrayMarcas = [];
    
    for(let marElement of this.marcas){

      let countMarca = 0;
      for(let productoElement of this.productos){
        if(marElement.id_marca === productoElement.id_marca){
          for(let detElement of this.detalle){
            if(detElement.id_producto === productoElement.id_producto){
              countMarca = countMarca + detElement.cantidad;
            }
          }
        }
      }
      arrayMarcas.push({
        marca: marElement,
        numVeces: countMarca
      });
      this.data2.push([
        marElement.nombre,
        countMarca
      ])
    }

    for(let productoElement of this.productos){
      let count = 0
      for(let detElement of this.detalle){
        if(detElement.id_producto === productoElement.id_producto){
          count = count + detElement.cantidad;
        }
      }
      console.log({
        producto: productoElement,
        numVeces: count
      });
      arrayProductos.push({
        producto: productoElement,
        numVeces: count
      })
      this.data.push([
        productoElement.nombre,
        count
      ])
    }

    arrayMarcas.sort((a,b) => {
      return b.numVeces - a.numVeces;
    })

    arrayProductos.sort((a,b) => {
      return b.numVeces - a.numVeces;
    });

    console.log(arrayMarcas);
    console.log(arrayProductos);
    


  }
}
