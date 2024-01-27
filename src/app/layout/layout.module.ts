import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { MainComponent } from './main/main.component';
import { EmptyComponent } from './empty/empty.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ChatComponent } from '@shared/components/chat/chat.component';

@NgModule({
    declarations: [MainComponent, EmptyComponent, SidebarComponent, HeaderComponent],
    imports: [CommonModule, LayoutRoutingModule, ChatComponent],
})
export class LayoutModule {}
