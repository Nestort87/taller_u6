import {Patient} from './model'

export interface PatientService{

    getPatient(): Patient | null 
    createPatient(): Patient | null 
}

export class PatientServiseImpl implements PatientService {

    public getPatient(): Patient | null {        
        return  null
    }
    public createPatient(): Patient | null {        
      return  null
  }
}