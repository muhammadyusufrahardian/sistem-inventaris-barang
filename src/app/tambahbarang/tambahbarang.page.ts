import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DatabarangPage } from '../databarang/databarang.page';
import { AngularFirestore} from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { Router} from '@angular/router';
import { ToastService } from 'src/app/service/toast.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-tambahbarang',
  templateUrl: './tambahbarang.page.html',
  styleUrls: ['./tambahbarang.page.scss'],
})
export class TambahbarangPage implements OnInit {

data: any = {};
userData: any={};
ID: any;
docID:any;
  constructor(
    public modalController: ModalController,
    public db: AngularFirestore,
    public auth: AngularFireAuth,
    public router: Router,
    public alert:AlertController,
    public toast: ToastService,
    private navCtrl: NavController,

    ) { }

  ngOnInit() {
    this.auth
   
    .onAuthStateChanged(user=>{
      this.userData = user;
    })
  }
 

  loading:boolean;
  simpandata(){
  
    {
      this.loading = true;  
      //additional data
    
          //additional data
         
          //menambah atribut author
          this.data.author = this.userData.email;
          this.data.date_created = new Date();
          this.db.collection('databarang').doc(this.docID).set(this.data).then(res=>{
            this.loading = false;
            alert('data berhasil disimpan');
            this.router.navigate(['/databarang'])
          }).catch(err=> {
            this.loading = false;
            alert('tidak dapat menyimpan data');
          })
          }
        }
      }