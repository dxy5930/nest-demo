import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { CoursewareLogModule } from './courseware-log/courseware-log.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { SystemLogModule } from './system-log/system-log.module';
import { EquipmentsModule } from './equipments/equipments.module';
import { CoursewaresModule } from './coursewares/coursewares.module';
import { CoursewareTypeModule } from './courseware-type/courseware-type.module';

const loadConfig = () => {
  const { env } = process;

  return {
    db: {
      database: env.DATABASE,
      host: env.HOST,
      port: parseInt(env.PORT, 10) || 3306,
      username: env.USERNAME,
      password: env.PASSWORD,
    },
  };
};

@Module({
  // controllers: [AppController],
  // providers: [AppService],
  imports: [
    UserModule,
    ConfigModule.forRoot({
      load: [loadConfig],
      envFilePath: ['.env.dev','.env.test', '.env.prod'],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const { host, port, username, password, database } =
          configService.get('db');
        return {
          type: 'mysql',
          host,
          port,
          username,
          password,
          database,
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: false,
          autoLoadEntities: false,
        };
      },
    }),

    CoursewareLogModule,

    SystemLogModule,

    EquipmentsModule,

    CoursewaresModule,

    CoursewareTypeModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('v1');
  }
}
