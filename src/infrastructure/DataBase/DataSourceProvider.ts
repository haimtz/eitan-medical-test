import { DataSource } from 'typeorm';

export default class DataSourceProvider {
  private static _instance: DataSource;

  public static GetDataSource(): DataSource {
    if (this._instance == null) {
      const host: string = process.env.DB_HOST ?? 'localhost';
      const port: number = parseInt(process.env.DB_PORT ?? '3306');
      const username: string = process.env.DB_USER ?? 'eitan';
      const password: string = process.env.DB_PASS ?? 'eitan1234';
      const database: string = process.env.DB_NAME ?? 'eitanmd';

      this._instance = new DataSource({
        type: 'mysql',
        host,
        port,
        username,
        password,
        database,
        synchronize: true,
        legacySpatialSupport: false,
        entities: [__dirname + '/**/*/*.entity.{js,ts}'],
      });

      this._instance.initialize().then(() => {});
    }

    return this._instance;
  }
}
