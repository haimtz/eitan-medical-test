import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { HeartRateDto } from '../../DTO/heartDto';
import { IHeartRateService } from '../../services/interfaces/IHeartRateService';

@Controller('heart-rate')
export class HeartRateController {
  constructor(
    @Inject(IHeartRateService) private readonly service: IHeartRateService,
  ) {}

  @Get()
  async GetAll() {
    try {
      return await this.service.GetAll();
    } catch (error) {
      console.error(error);
    }
  }

  @Post()
  async Add(@Body() data: HeartRateDto) {
    try {
      await this.service.Add(data.id, data.heartRate);
    } catch (error) {
      console.error(error);
    }
  }

  @Get('/high/:rate')
  async High(@Param() param: { rate: string }) {
    try {
      return await this.service.GetAllHigh(parseInt(param.rate));
      return await this.service.Summary(1);
    } catch (error) {
      console.error(error);
    }
  }

  @Get('/summary/:id')
  async Summary(@Param() param: { id: number }) {
    try {
      return await this.service.Summary(param.id);
    } catch (error) {
      console.error(error);
    }
  }
}
