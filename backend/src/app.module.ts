import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanRequestsModule } from './modules/loan/loan.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientModule } from './modules/client/clients.module';

@Module({
  imports: [LoanRequestsModule, ClientModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: "../.env"
  }), TypeOrmModule.forRootAsync({
    imports: [ ConfigModule ],
    inject: [ ConfigService ],
    useFactory: async (config: ConfigService) => ({
      type: config.get<'aurora-data-api'>('TYPEORM_CONNECTION'),
      host: config.get<string>('TYPEORM_HOST'),
      database: config.get<string>('TYPEORM_DATABASE'),
      port: config.get<number>('TYPEORM_PORT'),
      entities: [ __dirname + 'dist/**/*.entity{.ts,.js}' ],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
  }),],
  controllers: [],
  providers: [],
})
export class AppModule {}
