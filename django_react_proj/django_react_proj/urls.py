from django.contrib import admin
from django.urls import path, re_path, include
from firstapp import views

urlpatterns = [
    path('',include('firstapp.urls')),
    path('admin/', admin.site.urls),
    re_path(r'^api/first/$', views.students_list),
    re_path(r'^api/firstapp/([0-9])$', views.students_detail),
]