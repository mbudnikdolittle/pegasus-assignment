import { AsyncPipe } from '@angular/common';
import { LoaderService } from './loader.service';
import { Component, inject } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  standalone: true,
  selector: 'preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
  imports: [AsyncPipe],
})
export class PreloaderComponent {
  private loaderService = inject(LoaderService);
  isLoading: Subject<boolean> = this.loaderService.isLoading;
}
