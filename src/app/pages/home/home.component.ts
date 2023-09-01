import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  

  constructor(private service:MovieApiServiceService){}

  bannerResult: any=[];
  trendingMovieResult: any=[];
  actionMovieResult: any=[];
  adventureMovieResult: any=[];
  animationMovieResult: any=[];
  comedyMovieResult: any=[];
  crimeMovieResult: any=[];
  documentaryMovieResult: any=[];
  dramaMovieResult: any=[];
  familyMovieResult: any=[];
  fantasyMovieResult: any=[];
  historyMovieResult: any=[];
  horrorMovieResult: any=[];
  musicMovieResult: any=[];
  mysteryMovieResult: any=[];
  romanceMovieResult: any=[];
  sciencefictionMovieResult: any=[];
  thrillerMovieResult: any=[];
  westernMovieResult: any=[];

  
  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.animationMovie();
    this.comedyMovie();
    this.crimeMovie();
    this.documentaryMovie();
    this.dramaMovie();
    this.familyMovie();
    this.fantasyMovie();
    this.historyMovie();
    this.horrorMovie();
    this.musicMovie();
    this.mysteryMovie();
    this.romanceMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
    this.westernMovie();
    

  }

  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'trendingresult#');
      this.trendingMovieResult = result.results;
    });
  }

  actionMovie(){
    this.service.getActionMovies().subscribe((result)=>{
      console.log(result,'actionmovieresult#');
      this.actionMovieResult = result.results;
  });
}

animationMovie(){
  this.service.getAnimationMovies().subscribe((result)=>{
    console.log(result,'animationmovieresult#');
    this.animationMovieResult = result.results;
});
}

comedyMovie(){
  this.service.getComedyMovies().subscribe((result)=>{
    console.log(result,'comedymovieresult#');
    this.comedyMovieResult = result.results;
});
}

crimeMovie(){
  this.service.getCrimeMovies().subscribe((result)=>{
    console.log(result,'crimemovieresult#');
    this.crimeMovieResult = result.results;
});
}


documentaryMovie(){
  this.service.getDocumentaryMovies().subscribe((result)=>{
    console.log(result,'documentarymovieresult#');
    this.documentaryMovieResult = result.results;
});
}

dramaMovie(){
  this.service.getDramaMovies().subscribe((result)=>{
    console.log(result,'dramamovieresult#');
    this.dramaMovieResult = result.results;
});
}

familyMovie(){
  this.service.getFamilyMovies().subscribe((result)=>{
    console.log(result,'familymovieresult#');
    this.familyMovieResult = result.results;
});
}

fantasyMovie(){
  this.service.getFantasyMovies().subscribe((result)=>{
    console.log(result,'fantasymovieresult#');
    this.fantasyMovieResult = result.results;
});
}


historyMovie(){
  this.service.getHistoryMovies().subscribe((result)=>{
    console.log(result,'historymovieresult#');
    this.historyMovieResult = result.results;
});
}


horrorMovie(){
  this.service.getHorrorMovies().subscribe((result)=>{
    console.log(result,'horrormovieresult#');
    this.horrorMovieResult = result.results;
});
}


musicMovie(){
  this.service.getMusicMovies().subscribe((result)=>{
    console.log(result,'musicmovieresult#');
    this.musicMovieResult = result.results;
});
}

mysteryMovie(){
  this.service.getMysteryMovies().subscribe((result)=>{
    console.log(result,'mysterymovieresult#');
    this.mysteryMovieResult = result.results;
});
}

romanceMovie(){
  this.service.getRomanceMovies().subscribe((result)=>{
    console.log(result,'romancemovieresult#');
    this.romanceMovieResult = result.results;
});
}

sciencefictionMovie(){
  this.service.getScienceFictionMovies().subscribe((result)=>{
    console.log(result,'sciencefictionmovieresult#');
    this.sciencefictionMovieResult = result.results;
});
}

thrillerMovie(){
  this.service.getThrillerMovies().subscribe((result)=>{
    console.log(result,'thrillermovieresult#');
    this.thrillerMovieResult = result.results;
});
}

westernMovie(){
  this.service.getWesternMovies().subscribe((result)=>{
    console.log(result,'westernmovieresult#');
    this.westernMovieResult = result.results;
});
}





}
