import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  constructor(
    public db: AngularFirestore
  ) { }

  event(email,eventID)
  {
    this.db.collection('events').doc(eventID).get().subscribe(res=>{
      return this.getEventRole(res.data(),email);
    })
  }
  getEventRole(data, email)
  {    
    if(data.committees != undefined && data.committees.includes(email))
    {
      return true;
    }else{
      return false;
    }
  }

}
