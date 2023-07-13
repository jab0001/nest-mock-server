import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoanRequestsService } from './loan-requests.service';
import { LoanRequestDto } from './dto/loan-request.dto';
import { LoanRequestState } from './loan-state.entity';
import { LoanRequest } from './loan-requests.entity';
import { StandartResponseForm } from './type';

@ApiTags('LoanRequests')
@Controller('/test')
export class LoanRequestsController {
  constructor(private readonly loanRequestsService: LoanRequestsService) { }

  @Post("GetLoanRequests")
  @ApiOperation({
    summary: 'Получить все заявки'
  })
  /* @ApiResponse({ status: 201, type: LoanRequestsExample }) */
  async getLoanRequests(): Promise<StandartResponseForm<LoanRequest>> {
    return this.loanRequestsService.getLoanRequests();
  };

  @Post("GetLoanRequest")
  @ApiOperation({
    summary: 'Получить одну заявку'
  })
  /* @ApiResponse({ status: 201, type: LoanRequestExample }) */
  getLoanRequest(@Body() loanRequestDto: LoanRequestDto): Promise<StandartResponseForm<LoanRequest>> {
    return this.loanRequestsService.getLoanRequest(loanRequestDto);
  };

  @Post("GetLoanRequestState")
  @ApiOperation({
    summary: 'Получить статус по заявке'
  })
  async getLoanRequestState(@Body() loanRequestDto: LoanRequestDto): Promise<StandartResponseForm<LoanRequestState>> {
    return await this.loanRequestsService.getLoanRequestState(loanRequestDto);
  };
}
