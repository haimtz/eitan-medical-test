import { Inject, Injectable } from '@nestjs/common';
import { PatientTable } from '../infrastructure/DataBase/entities/patient.entity';
import { patientDTO } from '../DTO/patient';
import { IDataBase } from '../infrastructure/DataBase/interface/IDataBase';
import { IPatientService } from './interfaces/IPatientService';

@Injectable()
export default class PatientService implements IPatientService {
  constructor(
    @Inject(IDataBase)
    private readonly db: IDataBase<PatientTable>,
  ) {}

  async Add(patient: patientDTO): Promise<void> {
    await this.db.Add(patient as PatientTable);
  }
}
