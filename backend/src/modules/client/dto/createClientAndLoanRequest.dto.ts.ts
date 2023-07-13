import { ApiProperty, ApiResponse } from "@nestjs/swagger";

export class CreateClientAndLoanRequestDto {
    @ApiProperty({
        type: 'string',
        example: "Гриб"
    })
    last_name: string
    @ApiProperty({
        type: 'string',
        example: "Иван"
    })
    first_name: string
    @ApiProperty({
        type: 'string',
        example: "Иванович"
    })
    middle_name: string
    @ApiProperty({
        type: 'string',
        example: "1985-05-15"
    })
    birth_date: string
    @ApiProperty({
        properties: {
            type: {
                type: 'string',
                example: "CatalogRef.ВидыЗаймов"
            },
            value: {
                type: 'string',
                example: "d9f28103-565c-11eb-80e7-8006014e2df6"
            }
        }
    })
    loan_kind: {
        type: string
        value: string
    }
    @ApiProperty({
        type: 'number',
    })
    requested_amount: number
    @ApiProperty({
        type: 'number',
        example: 28
    })
    term: number
    @ApiProperty({
        type: 'boolean',
        example: true
    })
    insurance_ns_required: boolean
    @ApiProperty({
        type: 'array',
        items: {
            type: 'object',
            properties: {
                type: {
                    type: 'string',
                    example: "CatalogRef.ПрограммыСтрахования"
                },
                value: {
                    type: 'string',
                    example: "2083b7c1-71e3-11eb-80e7-8006014e2df6"
                }
            }
        },
    })
    insurance: [
        {
            type: string
            value: string
        }
    ]
}

