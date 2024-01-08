import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('中间件-----------当前开发环境：',process.env.NODE_ENV);
    // console.log('日志记录---', req, res);

    next();
  }
}
