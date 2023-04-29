from django.db import models

class RiskEscape(models.Model):
    RE_ID = models.IntegerField(primary_key=True)
    Score = models.IntegerField()
    Tasks = models.IntegerField()
    Lives = models.IntegerField()
    timePlayed = models.IntegerField()
    DatePlayed = models.DateField()
    Completed = models.BooleanField()

