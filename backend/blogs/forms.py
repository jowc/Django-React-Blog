from django.forms import ModelForm
# from django.forms import ModelForm
from .models import (article, comment)

# Django Forms
"""
class blogform(forms.Form):
    title = forms.CharField(label="title")
    slug = forms.SlugField(label="Unique URL")
    category = forms.ChoiceField(label='Category', choices=[
        ("Tech", "Tech"),
        ("Business", "Business"),
        ("UI/UX", "UI/UX")
    ])
    description = forms.CharField(widget=forms.Textarea)
"""


class Blogmodelform(ModelForm):
    class Meta:
        model = article
        fields = ['title', 'image',
                  'content', 'category', 'publish_date']


class Commentmodelform(ModelForm):
    class Meta:
        model = comment
        fields = ['comment']
