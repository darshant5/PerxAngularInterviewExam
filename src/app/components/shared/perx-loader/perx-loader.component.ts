import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'perx-loader',
  templateUrl: './perx-loader.component.html',
  styleUrls: ['./perx-loader.component.scss'],
})
export class PerxLoaderComponent implements OnInit {
  @Input() type: 'table' = 'table';
  @Input() strokeWidth: number = 6;
  @Input() diameter: number = 60;

  public loaderClass!: string;

  ngOnInit() {
    this.loaderClass = `${this.type}-loader`;
  }
}
