import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MarkdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'stock-viewer';



  selectedStock:any = {};
  epsAnnouncements:any[] = [];
  stockAnalysis:any[] = [];
  gainers:any[] = [];


  constructor(private appService: AppService, private markdownService: MarkdownService) {}

  
  
  ngOnInit(): void {
    this.appService.getEpsAnnouncements().subscribe(r=> {
      this.epsAnnouncements = r;
    });

    this.appService.getStockAnalysis().subscribe(r=> {
      this.stockAnalysis = r;
    });
  }


  getTickerAnalysis(index:any) {
    this.selectedStock = this.stockAnalysis[index];
  }

  percentage(open:any, close:any) {
    const diff = close - open;

    return  diff/ open * 100;
  }

  getGainers(date:any) {
    this.appService.getTopGainers(date).subscribe(r=> {
      this.gainers = r;
    });
  }


}
