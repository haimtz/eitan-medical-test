import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PatientModule } from './controllers/patient/patient.module';
import { HeartRateModule } from './controllers/heart-rate/heart-rate.module';

@Module({
  imports: [ConfigModule.forRoot(), PatientModule, HeartRateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
