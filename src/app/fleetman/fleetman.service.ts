import {Injectable} from '@angular/core'
import {HttpClient,HttpHeaders} from "@angular/common/http"
import { BehaviorSubject } from 'rxjs';
import {UserService} from '../user/user.service';

@Injectable()
export class FleetmanService{

subject = new BehaviorSubject({lat:53.291488, longitude: -1.639283});

subject2 = new BehaviorSubject("");

constructor(private http:HttpClient,private userservice:UserService){}

getmappoints(){
  let token = 'Bearer ' + this.userservice.getToken();
const headers = new HttpHeaders().set('Authorization', token);
  //return  this.http.get<any>("http://localhost:8087/position/fetch/village_truck")
 // return  this.http.get<any>("http://miniposra:8888/position/fetch/village_truck", {headers})
 //return  this.http.get<any>("http://localhost:8012/vehicle/fetch/position", {headers})
 return  this.http.get<any>("http://" + window.location.hostname + ":" + window.location.port + "/position", {headers})

}



getFleetmanUpdateListener(){
  return this.subject.asObservable();
}

getVehicleUpdateListener(){
  return this.subject2.asObservable();
}



//call the vehicle service ( which inturn calls other ms)
getvehicletracked(){
  let token1 = 'Bearer ' + this.userservice.getToken();
  const headers = new HttpHeaders().set('Authorization', token1);
 // this.http.get<any>("http://minivehicle:8080/vehicle/fetch", {headers,responseType: 'text' as 'json'}).subscribe(res=>{
  //this.http.get<any>("http://localhost:8012/vehicle/fetch", {headers,responseType: 'text' as 'json'}).subscribe(res=>{
    this.http.get<any>("http://" + window.location.hostname + ":" + window.location.port + "/vehicle", {headers,responseType: 'text' as 'json'}).subscribe(res=>{
    this.subject2.next(res);
  })

}

loadMappoints(){

  this.getmappoints().subscribe((res)=>{
    //console.log(res);
    this.subject.next(res);
  })

}




}
