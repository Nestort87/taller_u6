import {Doctor} from './model'

export interface DoctorService{

    getAllDoctors(): Doctor []
}

export class DoctorServiseImpl implements DoctorService {

    public getAllDoctors(): Doctor[] {
        const doctores = [
            {
              id_doctor: 1,
              nombre: "Juanr",
              apellido: "Paez",
              especialidad: "Pediatria",
              consultorio: 101,
              correo: "edgar23@correo.co"
            },
            {
              id_doctor: 1,
              nombre: "Jose",
              apellido: "Rodriguez",
              especialidad: "Medicina General",
              consultorio: 102,
              correo: "joro23@correo.co"
            }
          ]
        return doctores
    }
}