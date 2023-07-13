import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

class LoanRequestParams {
    @PrimaryGeneratedColumn()
    type: String
    @Column()
    value: String
    @Column()
    description: String
}

@Entity("loan")
export class LoanRequestState {
    @Column((type) => LoanRequestParams)
    loan_request_status: LoanRequestParams
}

