from django.db import models

# Create your models here.

class Department(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

class Employee(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    date_hired = models.DateField()
    photo = models.CharField(max_length=100) 