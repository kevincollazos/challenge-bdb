import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'user-profile/add',   component: UserProfileComponent },
    { path: 'user-profile/edit/:id',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
];
