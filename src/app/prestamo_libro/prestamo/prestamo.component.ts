import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Regprestamo } from 'src/app/interfaces/regprestamo';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {

  agregaPrestamo: FormGroup;

  constructor(private fb: FormBuilder) {
    this.agregaPrestamo = this.fb.group({
      nomUsu :['',Validators.required],
      cedUsu :['',Validators.required],
      telUsu :['',Validators.required],
      codlib :['',Validators.required],
      nomLib :['',Validators.required],
    })
   }

  ngOnInit(): void {
  }
  agregar(){
    console.log(this.agregaPrestamo);
    const regprestamo:Regprestamo={
      nomUsu: this.agregaPrestamo.get('nomUsu')?.value,
      cedUsu: this.agregaPrestamo.get('cedUsu')?.value,
      telUsu: this.agregaPrestamo.get('telUsu')?.value,
      codlib: this.agregaPrestamo.get('codlib')?.value,
      nomLib: this.agregaPrestamo.get('nomLib')?.value
    }
    console.log(regprestamo);
  }

}
