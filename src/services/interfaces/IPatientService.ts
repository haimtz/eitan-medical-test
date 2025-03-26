import { patientDTO } from '../../DTO/patient';

export interface IPatientService {
  Add(patient: patientDTO): Promise<void>;
}

export const IPatientService = Symbol('IPatientService');
