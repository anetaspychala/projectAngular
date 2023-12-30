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
import {
  OwnerPanelContainerComponent
} from "./components/container/owner-panel-container/owner-panel-container.component";
import {AddAnimalComponent} from "./components/userComponent/add-animal/add-animal.component";
import {UserService} from "./services/user.service";
import {AnimalService} from "./services/animal.service";
import {ReservationService} from "./services/reservation.service";
import {RoomService} from "./services/room.service";
import {UserPostService} from "./services/user-post.service";
import {AddReservationComponent} from "./components/userComponent/add-reservation/add-reservation.component";
import {AddRoomComponent} from "./components/userComponent/add-room/add-room.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, HeaderComponent, PriceContainerComponent, LoginContainerComponent, AddUserContainerComponent, TreatmentsContainerComponent,
    AdminContainerComponent, AddAnimalComponent, AddReservationComponent, AddRoomComponent, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatIconModule, FormsModule, FooterComponent, OwnerPanelContainerComponent],
  providers: [UserService, AnimalService, ReservationService, RoomService, UserPostService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'peHotelAppAngular';

}
