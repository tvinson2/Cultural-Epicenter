import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
///////////////
// import { Component, OnInit } from "@angular/core";
// import { Artist } from "./artist";
// import { ActivatedRoute } from "@angular/router";
// @Component({
//   selector: "artist",
//   templateUrl: "./artists.component.html",
//   styleUrls: []
// })
// export class ArtistDetailComponent implements OnInit {
//   public artists: Artist[] = [
//     new Artist(1, "Artist 001"),
//     new Artist(2, "Artist 002"),
//     new Artist(3, "Artist 003"),
//     new Artist(4, "Artist 004"),
//     new Artist(5, "Artist 005"),
//     new Artist(6, "Artist 006"),
//     new Artist(7, "Artist 007"),
//     new Artist(8, "Artist 008")
//   ];
//   artist: Artist = this.artists[0];

//   constructor(private route: ActivatedRoute) {}
//   ngOnInit() {
//     this.route.params.subscribe(params => {
//       this.artists.forEach((p: Artist) => {
//         if (p.id == params.id) {
//           this.artist = p;
//         }
//       });
//     });
//   }
// }
