import {Appointment} from './model'

export interface AppointmentService{

    createAppointment(): Appointment | null
}

export class AppointmentServiceImpl implements AppointmentService {

    public createAppointment(): Appointment | null {
        
        return null
    }
}