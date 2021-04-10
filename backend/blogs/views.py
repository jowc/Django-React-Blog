from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from .models import article
from .forms import *

# Create your views here.
# Django RestAPI views
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import (UserSerializer, BlogSerializer)
from rest_framework.decorators import api_view
from rest_framework.response import Response


def blog(request):
    # post = get_object_or_404(blog, post_id)
    template_name = "blog/index.html"
    qs = article.objects.all()
    return render(request, template_name, {"post": qs, 'title': 'Articles'})

@login_required
def create_blog(request):
    # post = get_object_or_404(blog, post_id)
    if request.POST:
        form = Blogmodelform(request.POST)
        if form.is_valid():
            form.save()
            # article.objects.create(**pl)
            print('Post submitted successfully')
            form = Blogmodelform()
    else:
        form = Blogmodelform()
        print('upload error')
    template_name = 'blog/create.html'
    post = {"post": form, 'title': "New Article"}
    return render(request, template_name, post)


def blog_detail(request, slug):
    template_name = 'blog/detail.html'
    post = get_object_or_404(article, slug=slug)
    if request.method == "POST":
        if request.POST['deletePost']:
            post.delete()
            return redirect("/blog")
        else:
            print('error')
    return render(request, template_name, {"post": post, 'title': post.title})

@login_required
def update_blog(request, slug):
    template_name = 'blog/update.html'
    post = get_object_or_404(article, slug=slug)
    form = Blogmodelform(request.POST or None, request.FILES or None ,instance= post)
    if form.is_valid():
        form.user = request.user
        form.save()
        print('Post Updated')
    return render(request, template_name, {"form": form, 'title': post.title})


# Delete view function not in use but used in the detail view.
"""
def delete_blog(request, slug):
    post = get_object_or_404(article, slug)
    if request.POST:
        post.delete()
    template_name = 'delete_blog.html'
    return render(request, template_name, {"post": post, 'title': post.title})
"""

# Blog Api
@api_view(['GET'])
def blogURLS(request):
    message = {
        'api/blog/list': 'Blogs list',
        'api/blog/<str:slug>' : 'Blog detail',
        'api/blog-create/' : 'Create blog post',
        'api/blog/update/<str:slug>' : 'Update blog post',
        'api/blog/delete/<str:slug>' : 'Delete blog post',
    }
    return Response(message)

@api_view(['GET'])
def blogList(request):
    payload = article.objects.all()
    serializer = BlogSerializer(payload, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def blogDetail(request, slug):
    payload = article.objects.get(slug = slug)
    serializer = BlogSerializer(payload, many = False)
    return Response(serializer.data)

@api_view(['POST'])
def blogCreate(request):
    serializer = BlogSerializer(data = request.data)
    if serializer.is_valid():
        print('content valid')
        serializer.save()
    else:
        print('didn\'t work')
    return Response(serializer.data)

@api_view(['POST'])
def blogUpdate(request, slug):
    # post = get_object_or_404(article, slug=slug)
    post = article.objects.get(slug = slug)
    serializer = BlogSerializer(instance= post, data = request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def blogDelete(request, slug):
    # post = get_object_or_404(article, slug = slug)
    post = article.objects.get(slug = slug)
    post.delete()
    message = f"Post: {post.title} successfully deleted"
    return Response(message)
    
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

'''
# User Groups
class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]
'''

# @api_view(['GET'])
def user_api(request):
    queryset = User.objects.all().order_by('-date_joined')
    serializer = UserSerializer(queryset, many = True)
    return Response(serializer)