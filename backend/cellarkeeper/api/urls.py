from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from api import views

router = DefaultRouter()
router.register(r'wine', views.WineViewSet)
router.register(r'cellars', views.CellarViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'archivedCellars', views.ArchivedCellarViewSet)

urlpatterns = [url(r'^', include(router.urls))]