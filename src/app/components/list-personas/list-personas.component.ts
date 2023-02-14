import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona';


const listPersonas: Persona[] = [
  { nombre: "Miguel", apellido: "Retamoso", correo: "reta@gmail.com", tipoDocumento: "DNI", documento: 73028880, fechaNacimiento: new Date() },
  { nombre: "Jorjino", apellido: "Garcia", correo: "garcia@gmail.com", tipoDocumento: "DNI", documento: 78452524, fechaNacimiento: new Date() },
  { nombre: "Alonso", apellido: "Infante", correo: "alonso@gmail.com", tipoDocumento: "DNI", documento: 78451222, fechaNacimiento: new Date() },
  { nombre: "Marcelo", apellido: "Garcia", correo: "marc@gmail.com", tipoDocumento: "DNI", documento: 74152526, fechaNacimiento: new Date() },
  { nombre: "Ambar", apellido: "Infante", correo: "abar@gmail.com", tipoDocumento: "DNI", documento: 75236598, fechaNacimiento: new Date() },
  { nombre: "Angel", apellido: "Kimi", correo: "angel@gmail.com", tipoDocumento: "DNI", documento: 78965412, fechaNacimiento: new Date() },
  { nombre: "Alen", apellido: "Rolo", correo: "roloalen@gmail.com", tipoDocumento: "DNI", documento: 74522336, fechaNacimiento: new Date() },
  { nombre: "Coco", apellido: "Luna", correo: "luncoco@gmail.com", tipoDocumento: "DNI", documento: 78989898, fechaNacimiento: new Date() },

];



@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'correo', 'tipoDocumento', 'documento', 'fechaNacimiento','acciones'];
  dataSource: MatTableDataSource<Persona>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(listPersonas);
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
