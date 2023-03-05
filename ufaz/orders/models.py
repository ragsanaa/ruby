from django.db import models
from datetime import datetime

# This class controls orders table in database
class OrdersModel(models.Model):
    # Which service ordered customer
    orderTitle = models.CharField('Title', max_length=150, default='')
    # Customer's username
    customerUser = models.CharField('Customer', max_length=150, default='')
    # Provider's username
    providerUser = models.CharField('Provider', max_length=150, default='')
    #   Cost of service
    cost = models.FloatField('Cost')
    # Date when was this service ordered
    orderDate = models.DateTimeField('Date', default=datetime.now())
    # Service's category
    orderCategory = models.CharField('Category',max_length=150, default='')
    # Is saved in history
    history = models.BooleanField('History', default=True)

    # Data's title
    def __str__(self):
        return self.orderTitle
    
    # Table's title
    class Meta:
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'

