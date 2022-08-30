import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HtmlResponseService } from './service/html-response.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'html-response';
  myHtml: SafeHtml = "";
  page: any;
  constructor(private sanitizer: DomSanitizer, private htmlResponseService: HtmlResponseService) { }
  ngOnInit() {
    this.htmlResponseService.get().subscribe((res: any) => {
      this.page = res
      console.log(res);
    })
    this.updateHtml();
  }


  updateHtml(){
    let newHtml;
    this.htmlResponseService.get().subscribe(res=>{
      newHtml=res;
      this.myHtml = this.sanitizer.bypassSecurityTrustHtml(newHtml as any);
    })

  }


}
