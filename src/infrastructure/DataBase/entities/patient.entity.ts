import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { HeartRateTable } from './heartRate.entity';

@Entity('patients')
export class PatientTable {
  @PrimaryGeneratedColumn()
  @OneToMany(() => HeartRateTable, (rate) => rate.patientId)
  id: number;

  @Column('varchar')
  name: string;

  @Column('int')
  age: number;

  @Column('varchar', { default: 'unknown' })
  gender: 'female' | 'male' | 'unknown';
}
