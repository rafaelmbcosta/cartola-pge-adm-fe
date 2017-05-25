// Import our dependencies
import { Routes } from '@angular/router';
// import { Home } from './home';
import { LoginComponent } from './login/login.component';
import { SeasonListComponent } from './seasons/season-list/season-list.component';
import { SeasonShowComponent } from './seasons/season-show/season-show.component';
import { SeasonNewComponent } from './seasons/season-new/season-new.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { AuthGuard } from './common/auth.guard';

// Define which component should be loaded based on the current URL
export const routes: Routes = [
  { path: '',       component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'app-season-list', component: SeasonListComponent },
  { path: 'seasons/:id', component: SeasonShowComponent, canActivate: [AuthGuard] },
  { path: 'app-season-new', component: SeasonNewComponent, canActivate: [AuthGuard]},
  { path: 'app-player-list', component: PlayerListComponent },
  { path: 'app-team-list', component: TeamListComponent },
  { path: '**',     component: LoginComponent }
];
