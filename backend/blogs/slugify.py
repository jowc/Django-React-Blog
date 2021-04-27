import itertools
from django.utils.text import slugify

from .models import article


def generate_slug(get_title):
    # check if the slug is already in the database
    slug_exist = article.objects.filter(slug=get_title).exists()
    # continue looping until False
    while slug_exist:
        num = None
        # Append a new number from 0 to infinity
        for i in range(1, 100, 1):
            num = i
        # merge the title and iterating num
        slug_title = slugify(get_title + "-" + str(num + 1))
        new_slug = slug_title
        return new_slug

# print(generate_slug(get_title))

    # for n in range(1, 1000):
    #     return str(n)
    #  start from 1 to infinity
