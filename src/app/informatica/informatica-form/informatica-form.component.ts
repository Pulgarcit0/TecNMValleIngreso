import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService, Alumno } from '../../services/firebase.service';

@Component({
  selector: 'app-informatica-form',
  templateUrl: './informatica-form.component.html',
  styleUrls: ['./informatica-form.component.scss']
})
export class InformaticaFormComponent {
  alumnoForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService
  ) {
    this.alumnoForm = this.fb.group({
      Nombre: ['', Validators.required],
      ApellidoP: ['', Validators.required],
      ApellidoM: ['', Validators.required],
      Correo: ['', [Validators.required, Validators.email]],
      NumeroT: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
    });
  }

  async onSubmit() {
    if (this.alumnoForm.valid) {
      this.isLoading = true; // Muestra el componente de carga
      const nuevoAlumno: Alumno = this.alumnoForm.value;

      try {
        await this.firebaseService.addAlumno(nuevoAlumno);
        console.log('Datos enviados a Firebase');
        this.alumnoForm.reset();
      } catch (error) {
        console.error('Error al agregar alumno:', error);
      } finally {
        this.isLoading = false; // Oculta el componente de carga
      }
    }
  }
}
