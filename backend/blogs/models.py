from django.db import models
from django.conf import  settings

# Create your models here.

User = settings.AUTH_USER_MODEL

class article(models.Model):
    User = models.ForeignKey(User, default=1, null= True, on_delete= models.SET_NULL)
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to= 'images', null=True, blank=True)
    title = models.CharField(max_length=225)
    description = models.TextField(max_length=1000)
    categories = (
        ("Tech", "Tech",),
        ("Business", "Business"),
        ("UI/UX", "UI/UX")
    )
    category = models.TextField(
        choices=categories, null=True)
    publish_date = models.DateTimeField(auto_now=False, auto_now_add=False, null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-pk','-publish_date','-last_update' , '-timestamp']


    def __str__(self):
        return self.title
    
    def get_edit_url(self):
        return f"{self.slug}/update"

    def summaryTXT(self):
        return self.description[:60] + "..."
    
