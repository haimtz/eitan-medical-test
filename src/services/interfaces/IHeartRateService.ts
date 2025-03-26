import { HeartRateSummary } from '../../DTO/heartDto';
import { HeartRateTable } from '../../infrastructure/DataBase/entities/heartRate.entity';

export interface IHeartRateService {
  GetAll(): Promise<HeartRateTable[]>;
  Add(id: number, rate: number): Promise<void>;
  GetAllHigh(rate: number): Promise<HeartRateTable[]>;
  Summary(id: number): Promise<HeartRateSummary>;
}

export const IHeartRateService = Symbol('IHeartRateService');
