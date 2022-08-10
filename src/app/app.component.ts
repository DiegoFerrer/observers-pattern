import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'observers';
  selected: string = "ES";
  status = ['ES', 'EN'];

  constructor(private translate: TranslateService,private noticiasService:NewsService){
    this.translate.addLangs(['es','en']);

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {
   
  }

  onOptionsSelected() {
    this.translate.use(this.selected.toLowerCase())
  }

  emitEconomia(){
    this.noticiasService.noticiaEconomia()
  }

  emitDeportes(){
    this.noticiasService.noticiaDeportes()
  }
}
