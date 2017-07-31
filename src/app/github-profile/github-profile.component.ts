import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-github-profile',
    templateUrl: './github-profile.component.html',
    styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        // this can be used, if the parametesr will never change for the same component
        let id = this.route.snapshot.paramMap.get('id');
        console.log(id);

        // but we should use this, when we the route parameters change, but the component is not re-initialized!
        this.route.paramMap.subscribe(params => {
            let id = +params.get('id');
            console.log(id);
        })
    }

}
