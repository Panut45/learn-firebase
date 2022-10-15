import { Component, OnInit } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, Firestore, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  constructor() {
  }

  async ngOnInit(): Promise<void> {
    const app = initializeApp(environment.firebaseConfig);
    const db = getFirestore(app);

    // async = รอข้อมูลมาครบก่อน ถึงจะเอามาใช้ได้
    async function getMySelf(db: Firestore) {
      const myself_col = collection(db, 'myself')
      const myself_docs = await getDocs(myself_col)// await = ดึง document ครบ ถึงจะเอามาใช้ได้
      return myself_docs
    }
    function showData(myself_data: QueryDocumentSnapshot<DocumentData>) {
      console.log(myself_data.data());
      // console.log(myself_data.data()['first_name']);
    }

    const data = await getMySelf(db)
    data.forEach(myself_data => {
      showData(myself_data)
    })
  }

}
