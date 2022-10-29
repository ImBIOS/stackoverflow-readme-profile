import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm'

// eslint-disable-next-line no-shadow
export enum LogType {
  LEAGUE_COMPUTATION_START = 'start_compute',
  LEAGUE_COMPUTATION_STOP = 'stop_compute',
  LEAGUE_COMPUTATION_END = 'end_compute',
  MESSAGE = 'message',
  ERROR = 'error',
  SERVER_START = 'server_start'
}

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'enum',
    enum: LogType,
    default: LogType.MESSAGE
  })
  type?: LogType

  @Column({ nullable: true })
  message?: string

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
