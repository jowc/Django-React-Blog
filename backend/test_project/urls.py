from django.contrib import admin
from django.urls import path, include
from .views import (homeview, aboutview, contactview)
from django.conf import settings
from django.conf.urls.static import static
from blogs.views import *

# Django RestAPI Urls
from rest_framework import routers
# from test_project.blogs import views

# Rest settings
router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)
# router.register(r'groups', views.GroupViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', homeview, name="home"),
    path('about/', aboutview, name="about"),
    path('contact/', contactview, name="contact"),
    path('blog/', include('blogs.urls')),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/blog/list/', blogList, name = "Blog-list" ),
    path('api/blog/<str:slug>/', blogDetail, name = "blog-detail" ),
    path('api/blog-create/', blogCreate, name = "blog-create"),
    path('api/blog/update/<str:slug>/', blogUpdate, name = "blog-update"),
    path('api/blog/delete/<str:slug>/', blogDelete, name = "blog-delete"),
    path('api/urls/', blogURLS),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
