import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProductService } from './pages/services/productservice';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { StyleClassModule } from 'primeng/styleclass';
import { FloatLabelModule } from 'primeng/floatlabel';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    CarouselModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    StyleClassModule,
    FloatLabelModule,
    TagModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    CarouselModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    StyleClassModule,
    FloatLabelModule,
    TagModule,
  ],
  providers: [ProductService],
})
export class ImportsModule {}
