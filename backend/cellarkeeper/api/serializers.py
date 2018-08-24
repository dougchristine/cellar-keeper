from rest_framework import serializers
from api.models import Wine, Cellar, ArchivedCellar, LANGUAGE_CHOICES, STYLE_CHOICES
from django.contrib.auth.models import User

class WineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wine
        fields = ('id', 'created', 'modified', 'winery', 'varietal', 'name', 'rating', 'production_date')

class CellarSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    highlight = serializers.HyperlinkedIdentityField(view_name='cellar-detail', format='html')

    class Meta:
        model = Cellar
        fields = ('id', 'created', 'modified', 'wine', 'owner', 'purchase_date', 'price', 'highlight')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    cellars = serializers.HyperlinkedRelatedField(many=True, view_name='cellar-detail', read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'cellars')

class ArchivedCellarSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = ArchivedCellar
        fields = ('id', 'created', 'modified', 'cellar', 'consumption_date', 'personal_rating', 'notes', 'owner')