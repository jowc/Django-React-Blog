from django.shortcuts import render


def homeview(request):
    return render(request, 'home.html', {'title': 'Home'})


def aboutview(request):
    return render(request, 'about.html', {'title': 'about'})


def contactview(request):
    return render(request, 'contact.html', {'title': 'contact'})
