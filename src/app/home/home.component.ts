import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { filter, map, Subscription, tap } from 'rxjs';
import { FirebaseApiService } from '../services/firebase-api.service';
import { IUser } from '../services/interfaces/user.interface';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {

  // translateSubscription:Subscription;
  language:string = 'EN'

  variable!:Subscription

  // user!: IUser | null;
  constructor(
    private translate: TranslateService,
    ) { }

  ngOnInit(): void {

    console.log('ENTRO AL COMPONENTE');

    this.variable = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log('CAMBIO EL LENGUAJE');
      this.language = event.lang
    });
  }

  ngOnDestroy(): void {
    this.variable.unsubscribe()
  }

}
