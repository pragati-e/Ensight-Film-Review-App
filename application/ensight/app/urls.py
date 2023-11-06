from django.urls import path
from .views import *

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', home, name='home'),
    path('search/', search, name='search'),
    path('hello-webpack/', TemplateView.as_view(template_name='app/hello_webpack.html')),
    path('fetch_movies/', fetch_movies, name='fetch_movies'),
    path('get_user_movie_lists/', get_user_movie_lists, name='get_user_movie_lists'),
    path('create_movie_list/', create_movie_list, name='create_movie_list'),
    path('search_movies/', search_movies, name='search_movies'),
    path('search_users/', search_users, name='search_users'),
    path('header_search/', header_search, name='header_search'),
    path('get_users/', get_users, name='get_users'),


] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
