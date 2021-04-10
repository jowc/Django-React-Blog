from django.forms import ModelForm
# from django.forms import ModelForm
from .models import article

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
        fields = ['slug', 'title', 'image', 'description', 'category', 'publish_date']
