from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(article)


@admin.register(comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('post', 'comment', 'created_on', 'active')
    list_filter = ('active', 'created_on')
    search_fields = ('post', 'comment')
    actions = ['approve_comments']

    def approve_comments(self, request, queryset):
        queryset.update(active=True)
