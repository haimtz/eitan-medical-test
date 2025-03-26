import { Inject, Injectable } from '@nestjs/common';
import { IDataBase } from './interface/IDataBase';
import { DataSource } from 'typeorm';
import DataSourceProvider from './DataSourceProvider';

@Injectable()
export default class DataBase<T> implements IDataBase<T> {
  private ds: DataSource;
  constructor(@Inject('tableName') readonly tableName: string) {
    this.ds = DataSourceProvider.GetDataSource();
  }

  async Get(where?: object, take?: number, skip?: number): Promise<T[]> {
    return (await this.ds.manager.connection.manager.find(this.tableName, {
      where,
      take,
      skip,
    })) as T[];
  }

  async Join(
    joinTable: { relation: string; joinTable: string },
    where?: object,
    take?: number,
    skip?: number,
  ): Promise<T[]> {
    return (
      ((await this.ds.manager.connection.manager
        .getRepository(this.tableName)
        .createQueryBuilder(this.tableName)
        .leftJoinAndSelect(
          `${this.tableName}.${joinTable.relation}`,
          joinTable.joinTable,
        )
        .where(where ?? {})
        .take(take)
        .skip(skip)
        .getMany()) as T[]) ?? []
    );
  }

  async Add(entity: T): Promise<T> {
    const data = await this.ds.manager.connection.manager.save(
      this.tableName,
      entity,
    );

    return data;
  }

  async Update(target: T, entity: T): Promise<void> {
    await this.ds.manager.connection.manager.update(
      this.tableName,
      target,
      entity as any,
    );
  }

  async Query(where, query: string): Promise<any> {
    return await this.ds.manager.connection.manager
      .getRepository(this.tableName)
      .createQueryBuilder(this.tableName)
      .where(where)
      .select(query)
      .getRawOne();
  }
}
