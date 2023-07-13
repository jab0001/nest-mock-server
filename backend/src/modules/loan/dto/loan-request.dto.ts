import { ApiProperty } from "@nestjs/swagger";

export class LoanRequestDto {

    @ApiProperty({
        properties: {
            type: {
                type: 'string',
                example: "DocumentRef.ЗаявкаНаВыдачуЗайма"
            },
            value: {
                type: 'string',
                example: "3225a746-9bb9-11ec-b81d-e0c36038fdfb"
            }
        }
    })


    loan_request: {
        type: string
        value: string
    }
}
/* 
class LoanRequestProperty {
    @ApiProperty({
        type: 'string',
        example: '123'
    })
    type: String
    @ApiProperty({
        type: 'string',
        example: '123'
    })
    value: String
    @ApiProperty({
        type: 'string',
        example: '123'
    })
    description: String
}

class LoanRequestProperties {
    @ApiProperty({ type: () => LoanRequestProperties })
    loan_kind: LoanRequestProperty
    @ApiProperty({ type: () => LoanRequestProperties })
    operation: LoanRequestProperty
    @ApiProperty({
        type: 'date',
        example: "20-11-19"
    })
    date: Date
    @ApiProperty({
        type: 'date',
        example: "20-11-19"
    })
    loan_start_date: Date
    @ApiProperty({
        type: 'date',
        example: "20-11-19"
    })
    loan_end_date: Date
    @ApiProperty({
        type: 'number',
        example: "20-11-19"
    })
    term: Number
    @ApiProperty({ type: () => LoanRequestProperties })
    contract: LoanRequestProperty
    @ApiProperty({ type: () => LoanRequestProperties })
    client: LoanRequestProperty
    @ApiProperty({ type: () => LoanRequestProperties })
    mfo: LoanRequestProperty
    @ApiProperty({ type: () => LoanRequestProperties })
    organization: LoanRequestProperty
    @ApiProperty({ type: () => LoanRequestProperties })
    subdivision: LoanRequestProperty
    @ApiProperty({
        type: "number",
        example: "123"
    })
    arrangment_sum: Number
    @ApiProperty({ type: () => LoanRequestProperties })
    step: LoanRequestProperty
    @ApiProperty({ type: () => LoanRequestProperties })
    state: LoanRequestProperty
    @ApiProperty({ type: () => LoanRequestProperties })
    bank_card: LoanRequestProperty
}

export class LoanRequestExample {
    @ApiProperty({
        type: 'string',
        example: "123"
    })
    type: String
    @ApiProperty({
        type: 'string',
        example: "lollolo"
    })
    value: string
    @ApiProperty({
        type: 'string',
        example: "hahaha"
    })
    description: String
    @ApiProperty({
        type: 'array',
    })
    @ApiProperty({
        isArray: false,
        type: 'object' })
    properties: LoanRequestProperties
}

export class LoanRequestsExample {

    @ApiProperty({
        type: 'boolean',
        example: true
    })
    success: Boolean
    @ApiProperty({ type: [LoanRequestExample]})
    result: LoanRequestExample
} */
