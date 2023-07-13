import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoanRequest } from '../loan/loan-requests.entity';
import { Repository } from 'typeorm';
import { ClientEntity } from './client.entity';
import { StandartResponseForm } from '../loan/type';

@Injectable()
export class ClientService {
    constructor(@InjectRepository(ClientEntity)
    private readonly getClientRepository: Repository<ClientEntity>, @InjectRepository(LoanRequest)
        private readonly loanRequestsRepository: Repository<LoanRequest>) { }

    async getClient(): Promise<StandartResponseForm<ClientEntity>> {
        let clientRequest = await this.getClientRepository.find();
        let client = clientRequest[0]
        if (client) {
            return {
                success: true,
                result: client
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
    };

    async createClientAndLoanRequest(params): Promise<StandartResponseForm<ClientEntity>> {
        await this.getClientRepository.save({
            type: "CatalogRef.Контрагенты",
            value: "19f6e38d-a86c-4aa6-8bf9-c6b705fdfedc",
            description: "Гриб Иван Иванович",
            properties: {
                ...params
            }
        });
        await this.loanRequestsRepository.save({
            type: "DocumentRef.ЗаявкаНаВыдачуЗайма",
            value: "b7b4ba6e-84f0-11ec-80f3-ea614222f4ec",
            description: "Заявка СВР10000004 от 03.02.2022 15:57:34"
        })
        let answer = {
            success: true,
            result: {
                type: "DocumentRef.ЗаявкаНаВыдачуЗайма",
                value: "b7b4ba6e-84f0-11ec-80f3-ea614222f4ec",
                description: "Заявка СВР10000004 от 03.02.2022 15:57:34"
            }
        }

        return answer;
    };
}
