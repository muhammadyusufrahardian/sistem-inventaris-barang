import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'
import { AngularFireStorage} from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router} from '@angular/router';
@Component({
  selector: 'app-detailbarang',
  templateUrl: './detailbarang.page.html',
  styleUrls: ['./detailbarang.page.scss'],
  
})
export class DetailbarangPage implements OnInit {
 dataform: any=[];
 data: any = {};
userData: any={};
   constructor(
  private db: AngularFirestore,
 
  public auth: AngularFireAuth,
  public router: Router,
  public storage: AngularFireStorage,

     ) { }
 
  ngOnInit() {
    this.auth
   
    .onAuthStateChanged(user=>{
      this.userData = user;
    })
  this.getForm();
  this.data.author = this.userData.email;
   }
   
   selectedSegments: any='detailbarang';
   loading:boolean;
   getForm(){
this.db.collection('databarang').valueChanges({idfield: 'id'}).subscribe(res=>{
  this.dataform = res;
})
   }
   
}
