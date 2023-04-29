from django.db import models


class Personas(models.Model):
    P_ID = models.IntegerField(primary_key=True)
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    RE_ID = models.ForeignKey(RiskEscape, on_delete=models.CASCADE)
