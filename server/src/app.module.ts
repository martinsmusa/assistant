import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './user/user.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './user/user.entity';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'src/schema.graphql'
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          type: 'postgres',
          host: config.get<string>('DB_HOST'),
          database: config.get<string>('DB_NAME'),
          port: parseInt(config.get<string>('DB_PORT'), 10),
          username: config.get<string>('DB_USER'),
          password: config.get<string>('DB_PASSWORD'),
          synchronize: true,
          dropSchema: process.env.NODE_ENV === 'test',
          entities: []
        } as TypeOrmModuleOptions;
      }
    }),
    UsersModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ whitelist: true })
    }
  ],
})

export class AppModule {}
