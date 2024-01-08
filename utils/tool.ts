import {
  Injectable,
  HttpException,
  HttpStatus,
  ExecutionContext,
  CallHandler,
  NestInterceptor,
  Response,
} from '@nestjs/common';

@Injectable()
export class ToolsService {
  static result(
    msg,
    data = null,
    code = 20001,
    status = HttpStatus.BAD_REQUEST,
  ) {
    return {
      message: msg,
      data,
      code,
    };
  }

  static isEmpty(data) {
    switch (typeof data) {
      case 'undefined':
        return true;
      case 'string':
        if (data.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0)
          return true;
        break;
      case 'boolean':
        if (!data) return true;
        break;
      case 'number':
        if (0 === data || isNaN(data)) return true;
        break;
      case 'object':
        if (null === data || data.length === 0) return true;
        for (var i in data) {
          return false;
        }
        return true;
    }
    return false;
  }
}
