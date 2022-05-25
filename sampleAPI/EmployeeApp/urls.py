from django.urls import re_path
from EmployeeApp import views
from django.views.decorators.csrf import csrf_exempt

from django.conf.urls.static import static
from django.conf import settings # access media folder

urlpatterns = [
    re_path(r'^department/$', csrf_exempt(views.departmentAPI)),
    re_path(r'^department/([0-9]+)$', csrf_exempt(views.departmentAPI)),

    re_path(r'^employee/$', csrf_exempt(views.employeeAPI)),
    re_path(r'^employee/([0-9]+)$', csrf_exempt(views.employeeAPI)),

    re_path(r'^SaveFile$', views.SaveFile) #map route for api methods
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)