import { Body, Controller, Inject, Post } from '@nestjs/common';
import { IPatientService } from '../../services/interfaces/IPatientService';
import { patientDTO } from '../../DTO/patient';

@Controller('patient')
export class PatientController {
  constructor(
    @Inject(IPatientService) private readonly service: IPatientService,
  ) {}

  @Post()
  async Add(@Body() patient: patientDTO) {
    await this.service.Add(patient);
  }
}
