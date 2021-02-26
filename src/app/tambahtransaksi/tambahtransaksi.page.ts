import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransaksiPage } from '../transaksi/transaksi.page';
import { AngularFirestore} from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { Router} from '@angular/router';


@Component({
  selector: 'app-tambahtransaksi',
  templateUrl: './tambahtransaksi.page.html',
  styleUrls: ['./tambahtransaksi.page.scss'],
})
export class TambahtransaksiPage implements OnInit {
  data: any = {};
  userData: any={};
  ID: any;
  docID:any;
  constructor(
    public modalController: ModalController,
    public db: AngularFirestore,
    public auth: AngularFireAuth,
    public router: Router,

    ) { }

  ngOnInit() {
    this.auth
  
    .onAuthStateChanged(user=>{
      this.userData = user;
    })
  }
  
 
  loading:boolean;
  simpanpinjam(){
  {
    this.loading = true;  
    //additional data
   
    //menambah atribut author
    this.data.author = this.userData.email;
    this.data.date_created = new Date();
    this.db.collection('datatransaksi').doc(this.docID).set(this.data).then(res=>{
      this.loading = false;
      alert('data berhasil disimpan');
      this.router.navigate(['/transaksi'])
    }).catch(err=> {
      this.loading = false;
      alert('tidak dapat menyimpan data');
    })
    }
  }
}
