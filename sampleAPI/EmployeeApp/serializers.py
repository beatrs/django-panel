from dataclasses import fields
from rest_framework import serializers
from EmployeeApp.models import Department, Employee

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        # field = ('id', 'name')
        fields = '__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        # field = ('id', 'name', 'department', 'date_hired', 'photo')
        fields = '__all__'