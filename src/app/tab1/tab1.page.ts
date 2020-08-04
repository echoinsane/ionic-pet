import {Component, OnInit} from '@angular/core';
import {PhotoService} from '../services/photo.service';
import {Photo} from '../interfaces/photo.interface';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    photos: Photo[] = [];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.loadSaved().then(() => {
            this.photos = this.photoService.photos;
        });
    }

    addPhotoToGallery() {
        this.photoService.addNewToGallery();
    }
}
