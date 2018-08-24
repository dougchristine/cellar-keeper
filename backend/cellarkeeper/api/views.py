from api.models import Wine, Cellar, ArchivedCellar
from api.serializers import WineSerializer, CellarSerializer, UserSerializer, ArchivedCellarSerializer
from rest_framework import generics, permissions, viewsets
from django.contrib.auth.models import User
from api.permissions import IsOwnerOrReadOnly
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.reverse import reverse

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'cellars': reverse('cellar-list', request=request, format=format)
    })

class WineViewSet(viewsets.ModelViewSet):
    queryset = Wine.objects.all()
    serializer_class = WineSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class CellarViewSet(viewsets.ModelViewSet):
    queryset = Cellar.objects.all()
    serializer_class = CellarSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ArchivedCellarViewSet(viewsets.ModelViewSet):
    queryset = ArchivedCellar.objects.all()
    serializer_class = ArchivedCellarSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)