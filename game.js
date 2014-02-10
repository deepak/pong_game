// the game engine

function Game(canvas) {
   var self = this;
   
   this.context = canvas.getContext("2d");
   this.width = canvas.width;
   this.height = canvas.height;

   // Keep track pf key states
   // Eg.
   //   game.keyPressed.up === true   // while up key is pressed
   //   game.keyPressed.down === true // while down key is pressed
   this.keyPressed = {}

   $(window).on('keydown keyup', function(e) {
      // convert key code to key names
      
      var keyName = Game.keys[e.which]

      if (keyName) {
         // eg.: `self.keyPressed.up = true` on keydown
         // Will be set to `false` on keyup
         self.keyPressed[keyName] = e.type === 'keydown'
         e.preventDefault()
      }
   })
}

// Some key code to key name mappings
Game.keys = {
   38: 'up',
   40: 'down',
   37: 'left',
   39: 'right',
   32: 'space',
   27: 'escape'
}

Game.prototype.start = function() {
   var self = this;
   var fps = 60;
   var interval = 1000 / fps; // ms per frame

   setInterval(function() {
      self.update();
      self.draw();
   }, interval)
}

Game.prototype.update = function() {
   this.entities.forEach(function(entity) {
      if (entity.update) entity.update()
   })
}

Game.prototype.draw = function() {
   var self = this;
   this.entities.forEach(function(entity) {
      if (entity.draw) entity.draw(self.context)
   })
}
