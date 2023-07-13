import { Module } from '@nestjs/common';
import { LoanRequestsController } from './loan-requests.controller';
import { LoanRequestsService } from './loan-requests.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanRequest } from './loan-requests.entity';
import { LoanRequestState } from './loan-state.entity';

@Module({
  controllers: [LoanRequestsController],
  providers: [LoanRequestsService],
  imports: [TypeOrmModule.forFeature([LoanRequest,LoanRequestState])],
})
export class LoanRequestsModule {
}
