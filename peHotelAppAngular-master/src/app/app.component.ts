import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {PriceContainerComponent} from "./components/container/price-container/price-container.component";
import {LoginContainerComponent} from "./components/container/login-container/login-container.component";
import {AddUserContainerComponent} from "./components/container/add-user-container/add-user-container.component";
import {TreatmentsContainerComponent} from "./components/container/treatments-container/treatments-container.component";
import {AdminContainerComponent} from "./components/container/admin-container/admin-container.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {ModalRegistrationComponent} from "./components/userComponent/modal-registration/modal-registration.component";
import {
  OwnerPanelContainerComponent
} from "./components/container/owner-panel-container/owner-panel-container.component";
import {AddAnimalComponent} from "./components/userComponent/add-animal/add-animal.component";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, HeaderComponent, PriceContainerComponent, LoginContainerComponent, AddUserContainerComponent, TreatmentsContainerComponent, AdminContainerComponent, AddAnimalComponent, FooterComponent, OwnerPanelContainerComponent, HttpClientModule],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'peHotelAppAngular';

}
