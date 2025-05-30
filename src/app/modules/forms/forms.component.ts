import { Component, type OnInit } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-forms',
  imports: [ButtonComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent implements OnInit {

  ngOnInit(): void { }

}
