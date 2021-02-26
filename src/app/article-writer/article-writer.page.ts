import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/service/toast.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-article-writer',
  templateUrl: './article-writer.page.html',
  styleUrls: ['./article-writer.page.scss'],
})
export class ArticleWriterPage implements OnInit {
  ID: any;
  docID:any;
  constructor(
    public db: AngularFirestore,
    public auth: AngularFireAuth,
    public routes: ActivatedRoute,
    public toast: ToastService,
    private navCtrl: NavController,
  
  ) { }

  userdata: any = {};
  ngOnInit() {
    this.ID = this.routes.snapshot.paramMap.get('ID');
    if(this.ID == 0) this.docID = new Date().getTime().toString();
    else this.getData();
    this.auth.onAuthStateChanged(res=>{
      this.userdata = res;
    })
  }
  

  data: any = {};

  getData()
  {
    this.db.collection('datalaporan').doc(this.ID).get().subscribe(res=>{
      this.data = res.data();
    })
  }

  loading: boolean;
  saveData()
  {
    this.loading = true;  
    //additional data
    if(this.ID == 0)
    {
      this.data.author = this.userdata.email;
      this.data.date_created = new Date();
      this.db.collection('datalaporan').doc(this.docID).set(this.data).then(res=>{
        this.toast.present('Laporan berhasil disimpan','top');
        this.loading = false;
        this.navCtrl.back();
      });
    }else{
      this.db.collection('datalaporan').doc(this.ID).update(this.data).then(res=>{
        this.toast.present('Laporan berhasil disimpan','top');
        this.loading = false;
        this.navCtrl.back();
      });
    }
    
  }






  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: false,
      showToolbar: false,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: 'p',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'bottom',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

}

