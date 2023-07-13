import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateClientAndLoanRequestDto } from './dto/createClientAndLoanRequest.dto.ts';
import { ClientEntity } from './client.entity';
import { ClientService } from './client.service';
import { StandartResponseForm } from '../loan/type';

@ApiTags('Clients')
@Controller('/test')
export class ClientController {
  constructor(private readonly getClientService: ClientService) { }

  @Post("GetClient")
  @ApiOperation({ summary: "Получить заявки на выдачу займа по контрагенту (GET)" })
  getClient(): Promise<StandartResponseForm<ClientEntity>> {
    return this.getClientService.getClient();
  };

  @Post("CreateClientAndLoanRequest")
  @ApiOperation({ summary: "Получить заявки на выдачу займа по контрагенту (GET)" })
  createClientAndLoanRequest(@Body() createClientAndLoanRequestDto: CreateClientAndLoanRequestDto): Object {
    return this.getClientService.createClientAndLoanRequest(createClientAndLoanRequestDto);
  };
}
