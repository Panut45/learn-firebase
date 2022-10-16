import { Component, OnInit } from '@angular/core';

import { collection, getDocs } from "firebase/firestore";
import { db } from 'src/environments/environment';


import { Myself } from 'src/app/component/component';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  data_list: Myself[] = [];

  constructor() {
  }

  // async = รอข้อมูลมาครบก่อน ถึงจะเอามาใช้ได้
  async ngOnInit(): Promise<void> {

    const querySnapshot = await getDocs(collection(db, "myself"));
    querySnapshot.forEach((doc) => {
      this.data_list.push(doc.data());
      console.log(this.data_list);
    });
  }
}
