import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {

  public static fullLoadingCount: number = 0;

  constructor() {

   }

  getPreloaderCount(): number {
    return PreloaderService.fullLoadingCount;
  }

  showPreloaader(): void {
    PreloaderService.fullLoadingCount++;
  }

  hidePreloader(): void {
    setTimeout(function(){
      PreloaderService.fullLoadingCount--;
    }, 1000)
   
  }
}
