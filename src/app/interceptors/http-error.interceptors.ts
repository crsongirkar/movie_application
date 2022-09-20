import { HttpEvent, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpErrorsInterceptor implements HttpErrorsInterceptor{

  constructor() {}
  intercept(

    req: HttpRequest<any>,
    next: HttpHandler

  ):Observable<HttpEvent<any>>{

  }


}



