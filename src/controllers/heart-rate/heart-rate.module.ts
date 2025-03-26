import { Module } from '@nestjs/common';
import { HeartRateController } from './heart-rate.controller';
import { IDataBase } from '../../infrastructure/DataBase/interface/IDataBase';
import { HeartRateTable } from '../../infrastructure/DataBase/entities/heartRate.entity';
import DataBase from '../../infrastructure/DataBase/DataBase';
import { HeartRateService } from '../../services/HeartRateService';
import { IHeartRateService } from '../../services/interfaces/IHeartRateService';

@Module({
  providers: [
    { provide: 'tableName', useValue: 'heart_rate' },
    { provide: IDataBase, useClass: DataBase<HeartRateTable> },
    { provide: IHeartRateService, useClass: HeartRateService },
  ],
  controllers: [HeartRateController],
})
export class HeartRateModule {}
