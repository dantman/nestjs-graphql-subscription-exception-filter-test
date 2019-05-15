import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { AcmeResolver } from './Acme.resolver';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      debug: true,
      playground: true
    })
  ],
  controllers: [AppController],
  providers: [AppService, AcmeResolver],
})
export class AppModule {}
