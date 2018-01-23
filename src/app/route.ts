import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TempComponent } from './temp/temp.component';


export const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'temp', component: TempComponent},
];