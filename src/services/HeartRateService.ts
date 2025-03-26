import { HeartRateTable } from '../infrastructure/DataBase/entities/heartRate.entity';
import { IHeartRateService } from './interfaces/IHeartRateService';
import { IDataBase } from '../infrastructure/DataBase/interface/IDataBase';
import { Inject } from '@nestjs/common';
import { MoreThan } from 'typeorm';
import { HeartRateSummary } from '../DTO/heartDto';

export class HeartRateService implements IHeartRateService {
  constructor(
    @Inject(IDataBase)
    private readonly db: IDataBase<HeartRateTable>,
  ) {}

  async GetAll(): Promise<HeartRateTable[]> {
    return await this.db.Get();
  }

  async Add(id: number, rate: number): Promise<void> {
    const data = {
      patientId: id,
      heartRate: rate,
      timestamp: new Date(),
    };
    await this.db.Add(data as HeartRateTable);
  }

  async GetAllHigh(rate: number): Promise<HeartRateTable[]> {
    // return this.db.Get({ heartRate: MoreThan(rate) });
    return await this.db.Join(
      { joinTable: 'patients', relation: 'patientId' },
      { heartRate: MoreThan(rate) },
    );
  }

  async Summary(id: number): Promise<HeartRateSummary> {
    return (await this.db.Query(
      { patientId: id },
      'AVG(heartRate) as avg, MIN(heartRate) as min, MAX(heartRate) as max',
    )) as HeartRateSummary;
  }
}
