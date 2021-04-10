from django.urls import path
from .views import *


urlpatterns = [
    path('', blog, name='blog'),
    path('<str:slug>', blog_detail),
    path('blog-new/', create_blog, name="new_article"),
    path('<str:slug>/update/', update_blog, name="update_article"),
    # path('<str:slug>/blog-delete/', delete_blog),
]
