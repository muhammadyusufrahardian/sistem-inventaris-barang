import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import * as firebase from 'firebase';
import { AngularFireStorage } from '@angular/fire/storage';


export interface Article {

  id: string;
  author:string;
  title: string;
  content: string;
  image: any;
  enlightened: any;
  date_created: Date
};

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public actionSheetController: ActionSheetController,
    public router: Router,
    public auth: AngularFireAuth,
    public db: AngularFirestore,
    public storage: AngularFireStorage
  ) 
  {
    this.getAuthData();
  }
  //auth
  userdata: any = {};
  getAuthData()
  {
    this.auth.onAuthStateChanged(res=>{
      this.userdata = res;
      this.getUserData(res.email);      
      this.getData();
      this.getArticles();
    })
  };
  getUserData(email)
  {
    this.db.collection('users').doc(email).get().subscribe(res=>{
      this.passRole(res.data());
    })
  }
  passRole(data)
  {
    this.userdata.role = data.role;
  }
  //end auth

  //data
  events: any = [];
  getData()
  {
    this.db.collection('events',ref=>{
      return ref.where('published','==',true);
    }).valueChanges({idField: 'id'}).subscribe(res=>{
      this.events = res;
    });
  }
  //end data


  //get article
  perpage:number = 2;
  loading: boolean;
  noMoreData: boolean;
  articles:any = [];
  getArticles()
  {
    this.loading = true;
    this.db.collection<Article>('datalaporan',ref=>{
      if(this.articles.length == 0)
        return ref.orderBy('date_created','desc').limit(this.perpage);
      else{        
        return ref.orderBy('date_created','desc')
        .startAt(this.articles[this.articles.length-1].date_created)
        .limit(this.perpage);
      }      
    }).valueChanges({idField:'id'}).subscribe(res=>{     
      res.forEach(val=>{
        this.loading = false;
        this.getUser(val.author);
        var idx = this.articles.map(e=>{return e.id}).indexOf(val.id);
        if(idx == -1){
          if(this.articles.length == 0) this.articles.push(val);
          else{
            if(val.date_created < this.articles[0].date_created) this.articles.push(val);
            else this.articles.unshift(val);
          }
        }else{
          this.articles[idx].enlightened = val.enlightened;
        }
      });
      if(res.length < this.perpage) this.noMoreData = true;
      else this.noMoreData = false;
      
    });
  }  

  starring(data)
  {    
    var status = data.enlightened != undefined && data.enlightened.includes(this.userdata.email) ? true : false;
    if(status)
    {
      this.db.collection('datalaporan').doc(data.id).update({
        enlightened: firebase.default.firestore.FieldValue.arrayRemove(this.userdata.email)
      });
    }else{
      this.db.collection('datalaporan').doc(data.id).update({
        enlightened:firebase.default.firestore.FieldValue.arrayUnion(this.userdata.email)
      });
    }
  }

  async editArticle(data) {
    const actionSheet = await this.actionSheetController.create({
      header: data.title,
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Edit',
        icon: 'create',
        handler: () => {
          this.router.navigate(['article-writer/'+data.id]);
        }
      }, {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          var conf = confirm('Hapus laporan?');
          if(!conf) return;
          //delete image
          if(data.image != undefined)
          this.storage.ref(data.image.ref).delete();
          //delete data
          this.db.collection('datalaporan').doc(data.id).delete().then(res=>{
            var idx = this.articles.map(e=>{return e.id}).indexOf(data.id);
            this.articles.splice(idx,1);
          })
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }



  users: any = {};
  getUser(email)
  {
    this.db.collection('users').doc(email).get().subscribe(res=>{
      this.users[email] = res.data();
    })
  }
  
  

  async actionBottom(data) {
    const actionSheet = await this.actionSheetController.create({
      header: data.name,
      cssClass: 'my-custom-class',
      buttons: [
        {
        text: 'Lihat Daftar Lomba',
        handler: () => {
          this.router.navigate(['daftar-lomba/'+data.id]);
        }
      }, {
        text: 'Perbarui Data Kegiatan',      
        handler: () => {
          this.router.navigate(['form-kegiatan']);
        }
      }, {
        text: 'Batal',       
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  downloadAsImage(id)
  {
    var node = document.getElementById(id);
    htmlToImage.toPng(node)
    .then(function (dataUrl) {
       console.log(dataUrl);
    });
  }

}
