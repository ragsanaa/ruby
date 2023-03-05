from django.db import models

class ProviderPosts(models.Model):
    # Provider's username
    providerUser = models.CharField('User',max_length=150, default='')
    # Image for post
    image = models.ImageField('Image', upload_to='posts/%Y/%m/%d/', blank=True)
    # Post's title
    title = models.CharField('Title', max_length=150, default='')
    # Article about service
    article = models.TextField('Article', default='')
    # Post publicate or update date
    date = models.DateTimeField('Date', auto_now=True)
    # Product cost
    cost = models.FloatField('Cost')
    # Category
    category = models.CharField('Category', max_length=150, default='')

    # Data's title
    def __str__(self):
        return self.title
    
    # Table's title
    class Meta:
        verbose_name = 'post'
        verbose_name_plural = 'posts'