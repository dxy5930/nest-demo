import { LoggerMiddleware } from './logger.middleware';

describe('CoursewareMiddleware', () => {
  it('should be defined', () => {
    expect(new LoggerMiddleware()).toBeDefined();
  });
});
