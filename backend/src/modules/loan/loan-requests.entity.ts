import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";

export class LoanRequestProperty {
    @Column()
    type: String
    @PrimaryGeneratedColumn()
    value: String
    @Column()
    description: String

    constructor(type, value, description) {
        this, type = type
        this.value = value
        this.description = description
    }
}

export class LoanRequestProperties {
    @Column((type) => LoanRequestProperty)
    loan_kind: LoanRequestProperty
    @Column((type) => LoanRequestProperty)
    operation: LoanRequestProperty
    @Column()
    date: Date
    @Column()
    loan_start_date: Date
    @Column()
    loan_end_date: Date
    @Column()
    term: Number
    @Column(() => LoanRequestProperty)
    contract: LoanRequestProperty
    @Column(() => LoanRequestProperty)
    client: LoanRequestProperty
    @Column(() => LoanRequestProperty)
    mfo: LoanRequestProperty
    @Column(() => LoanRequestProperty)
    organization: LoanRequestProperty
    @Column(() => LoanRequestProperty)
    subdivision: LoanRequestProperty
    @Column()
    arrangment_sum: Number
    @Column(() => LoanRequestProperty)
    step: LoanRequestProperty
    @Column(() => LoanRequestProperty)
    state: LoanRequestProperty
    @Column(() => LoanRequestProperty)
    bank_card: LoanRequestProperty

    constructor(loan_kind, operation, date, loan_start_date, loan_end_date, term, contract, client, mfo, organization, subdivision, arrangment_sum, step, state, bank_card) {
        this.loan_kind = loan_kind
        this.operation = operation
        this.date = date,
            this.loan_start_date = loan_start_date,
            this.loan_end_date = loan_end_date,
            this.term = term,
            this.contract = contract,
            this.client = client,
            this.mfo = mfo,
            this.organization = organization,
            this.subdivision = subdivision,
            this.arrangment_sum = arrangment_sum,
            this.step = step,
            this.state = state,
            this.bank_card = bank_card
    }

}

@Entity("loan")
export class LoanRequest {
    @ObjectIdColumn()
    _id: ObjectID
    @PrimaryGeneratedColumn()
    type: String
    @Column()
    value: String
    @Column()
    description: String
    @Column(() => LoanRequestProperties)
    properties?: LoanRequestProperties

    constructor(type, value, description, properties) {
        this.type = type
        this.value = value
        this.description = description
        this.properties = properties
    }
}
