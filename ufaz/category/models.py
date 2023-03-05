from django.db import models

# Model class which controls table in database
class CategoryModel(models.Model):
    # Category title
    categoryTitle = models.CharField('Category title', max_length=150, default='')
    # Category ID. It is for connecting the table with another table. It is for using in future
    categoryID = models.IntegerField('Category ID', default=0),

    # Data's title at admin panel
    def __str__(self):
        return self.categoryTitle
    
    # Table's title at admin panel
    class Meta:
        verbose_name = 'category'
        verbose_name_plural = 'categories'
