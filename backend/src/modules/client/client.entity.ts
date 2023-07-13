import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";

export class ClientProperty {
    @Column()
    type: string
    @Column()
    value: string
    @Column()
    description: string
}

export class ClientProperties {
    @Column()
    name: string
    @Column()
    last_name: string
    @Column()
    first_name: string
    @Column()
    middle_name: string
    @Column()
    birth_date: string
    @Column()
    employer: string
    @Column()
    employer_address: string
    @Column()
    position: string
    @Column(() => ClientProperty)
    job_category: ClientProperty
    @Column()
    salary_date: string
    @Column()
    total_month_amount: number
    @Column(() => ClientProperty)
    sex: ClientProperty
    @Column()
    place_of_birth: string
    @Column(() => ClientProperty)
    passport_pages_2_3: ClientProperty
    @Column(() => ClientProperty)
    passport_pages_4_5: ClientProperty
    @Column()
    agreements_signing_required: boolean
}

@Entity("clients")
export class ClientEntity {
    @ObjectIdColumn()
    _id: ObjectID
    @PrimaryGeneratedColumn()
    type: string
    @Column()
    value: String
    @Column()
    description: string
    @Column(() => ClientProperties)
    properties?: ClientProperties
}

