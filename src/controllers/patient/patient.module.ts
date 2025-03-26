import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { IDataBase } from '../../infrastructure/DataBase/interface/IDataBase';
import DataBase from '../../infrastructure/DataBase/DataBase';
import { PatientTable } from '../../infrastructure/DataBase/entities/patient.entity';
import { IPatientService } from '../../services/interfaces/IPatientService';
import PatientService from '../../services/PatientService';

@Module({
  providers: [
    { provide: 'tableName', useValue: 'patients' },
    { provide: IDataBase, useClass: DataBase<PatientTable> },
    { provide: IPatientService, useClass: PatientService },
  ],
  controllers: [PatientController],
})
export class PatientModule {}
