import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoanRequestDto } from './dto/loan-request.dto';
import { LoanRequest } from './loan-requests.entity';
import { LoanRequestState } from './loan-state.entity';
import { StandartResponseForm } from './type';

@Injectable()
export class LoanRequestsService {
    constructor(@InjectRepository(LoanRequest)
    private readonly loanRequestsRepository: Repository<LoanRequest>) { }

    async getLoanRequests(): Promise<StandartResponseForm<LoanRequest[]>> {
        let requests = await this.loanRequestsRepository.find();
        if (requests.length) {
            return {
                success: true,
                result: requests
            }
        } else {
            return {
                success: false
            }
        }
    };

    async getLoanRequest(params: LoanRequestDto): Promise<StandartResponseForm<LoanRequest>> {
        let request = await this.loanRequestsRepository.findOne({
            value: params.loan_request.value
        });

        if (request) {
            return {
                success: true,
                result: request,
            }
        } else {
            return {
                success: false,
            }
        }
    }

    async getLoanRequestState(params: LoanRequestDto): Promise<StandartResponseForm<LoanRequestState>> {
        let loan = await this.loanRequestsRepository.findOne({
            value: params.loan_request.value
        });

        let loan_request_status = loan?.properties.state;

        if (loan_request_status) {
            return {
                success: true,
                result: {loan_request_status}
            }
        } else {
            return {
                success: false,
                error: [
                    {
                        type: "NotFound",
                        description: "Объект не найден"
                    }
                ]
            }
        }
    }
}
