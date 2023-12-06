import {RouterModule, Routes} from '@angular/router';
import {PriceComponent} from "./components/views/price/price.component";
import {NgModule} from "@angular/core";
import {PriceContainerComponent} from "./components/container/price-container/price-container.component";
import {MiddleComponent} from "./components/views/middle/middle.component";
import {LoginComponent} from "./components/userComponent/login/login.component";
import {LoginContainerComponent} from "./components/container/login-container/login-container.component";
import {AddUserComponent} from "./components/userComponent/add-user/add-user.component";
import {TreatmentsComponent} from "./components/views/treatments/treatments.component";
import {TreatmentsContainerComponent} from "./components/container/treatments-container/treatments-container.component";
import {AdminContainerComponent} from "./components/container/admin-container/admin-container.component";
import {AdminComponent} from "./components/adminComponent/admin/admin.component";
import {UserListComponent} from "./components/adminComponent/user-list/user-list.component";
import {AnimalListComponent} from "./components/adminComponent/animal-list/animal-list.component";
import {ReservationListComponent} from "./components/adminComponent/reservation-list/reservation-list.component";
import {OwnerPanelContainerComponent} from "./components/container/owner-panel-container/owner-panel-container.component";
import {OwnerPanelComponent} from "./components/userComponent/owner-panel/owner-panel.component";
import {AddAnimalComponent} from "./components/userComponent/add-animal/add-animal.component";

export const routes: Routes = [
  { path: 'price', component: PriceContainerComponent, children: [
      { path: '', component: PriceComponent },
    ]},
  { path: 'home', component: MiddleComponent },
  { path: 'login', component: LoginContainerComponent, children: [
      { path: '', component: LoginComponent},
    ]},
  { path: 'register', component: AddUserComponent, children: [
      { path: '', component: AddUserComponent},
    ]},
  { path: 'services', component: TreatmentsContainerComponent, children: [
      { path: '', component: TreatmentsComponent},
    ]},
  { path: 'admin', component: AdminContainerComponent, children: [
      { path: '', component: AdminComponent},
      { path: 'userlist', component: UserListComponent },
      { path: 'animalslist', component: AnimalListComponent },
      { path: 'reservationslist', component: ReservationListComponent },
    ]},
  { path: 'user', component: OwnerPanelContainerComponent, children: [
      { path: '', component: OwnerPanelComponent},
      { path: 'addanimal', component: AddAnimalComponent },
    ]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
