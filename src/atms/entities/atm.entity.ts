import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('atms')
export class atms {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  location: string;

  @Column()
  active: boolean;

  @Column()
  update_at: Date;
}
