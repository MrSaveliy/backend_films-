import {Column, DataType, Model, Table} from "sequelize-typescript";

/*interface RoleCreationAttrs {
    value: string;
    description: string;
}*/

@Table({tableName: 'persons_old', timestamps: false})
export class PersonOld extends Model<PersonOld> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    person_webUrl: string;

    @Column({type: DataType.STRING})
    person_posterUrl: string;

    @Column({type: DataType.STRING(16)})
    person_sex: string;

    @Column({type: DataType.STRING})
    person_nameRu: string;

    @Column({type: DataType.STRING})
    person_nameEn: string;

    @Column({type: DataType.INTEGER})
    person_growth: number;

    @Column({type: DataType.INTEGER})
    person_age: number;

    @Column({type: DataType.STRING})
    person_birthday: string;

    @Column({type: DataType.STRING})
    person_birthplace: string;

    @Column({type: DataType.STRING})
    person_profession: string;

    @Column({type: DataType.ARRAY(DataType.STRING)})
    films_list: string[];

}