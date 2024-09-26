import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchStoryComponent } from './components/search-story/search-story.component';
import { WishlistStoryComponent } from './components/wishlist-story/wishlist-story.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Search', component: SearchStoryComponent },
  { path: 'Wishlist', component: WishlistStoryComponent },
  { path: 'Details', component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
