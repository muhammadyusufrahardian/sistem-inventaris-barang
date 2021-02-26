import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'loginutama',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  
  {
    path: 'transaksi',
    loadChildren: () => import('./transaksi/transaksi.module').then( m => m.TransaksiPageModule)
  },
  {
    path: 'laporan',
    loadChildren: () => import('./laporan/laporan.module').then( m => m.LaporanPageModule)
  },
  {
    path: 'databarang',
    loadChildren: () => import('./databarang/databarang.module').then( m => m.DatabarangPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tambahbarang',
    loadChildren: () => import('./tambahbarang/tambahbarang.module').then( m => m.TambahbarangPageModule)
  },
  {
    path: 'detailbarang',
    loadChildren: () => import('./detailbarang/detailbarang.module').then( m => m.DetailbarangPageModule)
  },
  {
    path: 'tambahtransaksi',
    loadChildren: () => import('./tambahtransaksi/tambahtransaksi.module').then( m => m.TambahtransaksiPageModule)
  },
  {
    path: 'detailtransaksi',
    loadChildren: () => import('./detailtransaksi/detailtransaksi.module').then( m => m.DetailtransaksiPageModule)
  },
  
  
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  
  {
    path: 'loginutama',
    loadChildren: () => import('./loginutama/loginutama.module').then( m => m.LoginutamaPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'loginadmin',
    loadChildren: () => import('./loginadmin/loginadmin.module').then( m => m.LoginadminPageModule)
  },
  {
    path: 'article-writer/:ID',
    loadChildren: () => import('./article-writer/article-writer.module').then( m => m.ArticleWriterPageModule)
  },
 
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'profile1',
    loadChildren: () => import('./profile1/profile1.module').then( m => m.Profile1PageModule)
  },
  {
    path: 'profile2',
    loadChildren: () => import('./profile2/profile2.module').then( m => m.Profile2PageModule)
  },
  {
    path: 'profile3',
    loadChildren: () => import('./profile3/profile3.module').then( m => m.Profile3PageModule)
  },
  {
    path: 'profile4',
    loadChildren: () => import('./profile4/profile4.module').then( m => m.Profile4PageModule)
  },
  {
    path: 'profile5',
    loadChildren: () => import('./profile5/profile5.module').then( m => m.Profile5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
