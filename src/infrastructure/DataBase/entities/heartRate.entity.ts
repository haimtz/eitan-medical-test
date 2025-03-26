import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PatientTable } from './patient.entity';

@Entity('heart_rate')
export class HeartRateTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;

  @Column('int', { default: 0 })
  heartRate: number;

  @ManyToOne(() => PatientTable, (patient) => patient.id)
  @JoinColumn({ name: 'patientId' })
  patientId: number;
}
