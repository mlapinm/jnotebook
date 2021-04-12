import random

class Participant:
  def __init__(self, name):
    self.name = name
    self.items = ["rock", "paper", "scissor"]
    self.points = 0
    self.choice = 0

  def choose(self):
    self.choice = random.randint(0, 2)
    print(f"{self.name} select {self.items[self.choice]}")

  def getChoice(self):
    return self.choice

  def incrementPoint(self):
    self.points += 1


class GameRound:
  def __init__(self, p1, p2):
    self.rules = [
      [ 0, -1,  1],
      [ 1,  0, -1],
      [-1,  1,  0]
    ]
    p1.choose()
    p2.choose()
    result = self.compareChoices(p1, p2)
    if result > 0:
      p1.incrementPoint()
    elif result < 0:
      p2.incrementPoint()

    print(f"Round resulted {p1.name} is {self.getResultAsString(result)}")
    print(f"Game ended, {p1.name} has {p1.points}, and {p2.name} has {p2.points}")

  def compareChoices(self, p1, p2):
    return self.rules[p1.getChoice()][p2.getChoice()]
  
  def getResultAsString(self, result):
    res = {
      0: "draw",
      1: "win",
      -1: "loss"
      }
    return res[result]

class Game:
  def __init__(self):
    self.participantFirst  = Participant("Spock")
    self.participantSecond = Participant("Kirk")
    self.endGame = False

  def start(self):
    while not self.endGame:
      gameRound = GameRound(self.participantFirst, self.participantSecond)
      self.checkEndCondition()

  def checkEndCondition(self):
    answer = input("Continue game y/n <y>")
    answer = 'y' if answer.strip() == '' else 'n'
    if answer == 'y':
      self.endGame = False

    else:
      self.endGame = True

game = Game()
game.start()

# Game ended, Spock has 5, and Kirk has 3
# Continue game y/n <y>
# Spock select rock
# Kirk select paper
# Round resulted Spock is loss
# Game ended, Spock has 5, and Kirk has 4
# Continue game y/n <y>
# Spock select rock
# Kirk select scissor
# Round resulted Spock is win
# Game ended, Spock has 6, and Kirk has 4
# Continue game y/n <y>
