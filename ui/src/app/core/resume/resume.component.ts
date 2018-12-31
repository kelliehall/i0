import { Component } from '@angular/core';

@Component({
    selector: 'kelbie-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})

export class ResumeComponent {
    resume = 'https://docs.google.com/document/d/1S1monXAn6O2T_nbrpFFSug39Ex50VZhp8KctLmSdRPM/edit?usp=sharing';

    constructor() { }
}
