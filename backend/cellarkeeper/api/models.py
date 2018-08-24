from django.db import models
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles
from django.core.validators import MaxValueValidator, MinValueValidator
from pygments.lexers import get_lexer_by_name
from pygments.formatters.html import HtmlFormatter
from pygments import highlight

LEXERS = [item for item in get_all_lexers() if item[1]]
LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
STYLE_CHOICES = sorted((item, item) for item in get_all_styles())

class WineCategory(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=10, blank=False, default='')

    class Meta:
        ordering = ('name',)

class WineVarietal(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(WineCategory, null=True, on_delete=models.SET_NULL)
    name = models.CharField(max_length=25, blank=False, default='')

    class Meta:
        ordering = ('name',)

class Winery(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, blank=False, default='')

    class Meta:
        ordering = ('name',)

class Wine(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    winery = models.CharField(max_length=100, null=True)
    varietal = models.ForeignKey(WineVarietal, null=True, on_delete=models.SET_NULL)
    name = models.CharField(max_length=100, blank=False, default='')
    rating = models.PositiveIntegerField(default=50, validators=[MinValueValidator(1), MaxValueValidator(100)])
    production_date = models.DateField()

    class Meta:
        ordering = ('winery', 'name')

class Cellar(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    wine = models.ForeignKey(Wine, on_delete=models.CASCADE)
    owner = models.ForeignKey('auth.User', related_name='cellar', on_delete=models.CASCADE)
    purchase_date = models.DateField()
    price = models.DecimalField(decimal_places=2, max_digits=10)

    class Meta:
        ordering = ('owner', 'purchase_date')

class ArchivedCellar(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    cellar = models.ForeignKey(Cellar, on_delete=models.CASCADE)
    consumption_date = models.DateField()
    notes = models.CharField(max_length=250)
    personal_rating = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1), MaxValueValidator(5)])

    class Meta:
        ordering = ('consumption_date',)