import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JanuaryComponent } from './january/january.component';
import { FebruaryComponent } from './february/february.component';
import { AprilComponent } from './april/april.component';
import { MayComponent } from './may/may.component';
import { EventListComponent } from './event-list/event-list.component';
const routes: Routes = [
  {path:"january",component:JanuaryComponent},
  {path:"february",component:FebruaryComponent},
  {path:"april",component:AprilComponent},
  {path:"may",component:MayComponent},
  {path:"event",component:EventListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[JanuaryComponent,FebruaryComponent,AprilComponent,MayComponent,EventListComponent]