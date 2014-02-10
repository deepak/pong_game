function Background() {}

Background.prototype.draw = function(context) {
  context.fillStyle = '#000'
  context.fillRect(0, 0, game.width, game.height)
}

Background.prototype.draw = function(context) {
  context.fillStyle = '#000'
  context.fillRect(0, 0, game.width, game.height)
}

function Paddle() {
   Entity.call(this)

   this.width = 20;
   this.height = 100

   this.y = game.height / 2 - (this.height / 2)
   this.x = 20

   this.speed = 15
}

Paddle.prototype = Object.create(Entity.prototype)
Paddle.prototype.constructor = Paddle

Paddle.prototype.update = function() {
   if(game.keyPressed.up) {
      this.y -= this.speed
   } else if(game.keyPressed.down) {
      this.y += this.speed
   }
   
   lowerBound = 0
   upperBound = game.height - this.height
   this.y = Math.max(Math.min(this.y, upperBound), 
                     lowerBound)
}

var game = new Game($('canvas')[0])

game.entities = [
   new Background(),
   game.player = new Paddle()
]

game.start()
