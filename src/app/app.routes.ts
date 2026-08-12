import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [{ path: '', component: Home, title: 'Ahmad Awada | Angular & Front-End Developer' }, { path: '**', redirectTo: '' }];
