export interface IDataBase<T> {
  tableName: string;

  Get(
    where?: object,
    take?: number,
    skip?: number,
    relation?: { relation: string; joinTable: string }[],
  ): Promise<T[]>;

  Add(entity: T): Promise<T>;

  Update(target: T, entity: T): Promise<void>;

  Join(
    joinTable: { relation: string; joinTable: string },
    where?: object,
    take?: number,
    skip?: number,
  ): Promise<T[]>;

  Query(where, query: string): Promise<any>;
}

export const IDataBase = Symbol('IDataBase');
