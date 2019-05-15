import { ExceptionFilter, ArgumentsHost, Catch } from '@nestjs/common';
import { AcmeError } from './AcmeError';

@Catch(AcmeError)
export class AcmeExceptionFilter implements ExceptionFilter {
  catch(exception: AcmeError, host: ArgumentsHost) {
    console.log(`Filtered acme exception: ${exception.message}`);
    throw new AcmeError(exception.message + ' (modified)');
  }
}
