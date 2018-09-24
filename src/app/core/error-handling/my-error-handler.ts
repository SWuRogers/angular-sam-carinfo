import { ErrorHandler, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class MyErrorsHandler implements ErrorHandler {
  
  handleError(error: Error) {
    console.log(`From MyErrorHandler: ${error.message}`);
  }
}