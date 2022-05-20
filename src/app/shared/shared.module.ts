import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        NavbarComponent,
        PageNotFoundComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        NavbarComponent,
        PageNotFoundComponent
    ]
})

export class SharedModule {}