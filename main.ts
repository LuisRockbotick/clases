input.onButtonPressed(Button.A, function () {
    if (Posición_Pala > 0) {
        Pala2.move(-1)
        Pala1.move(-1)
        Posición_Pala += -1
    }
})
function Mover_Pelota () {
    Pelota.move(1)
    Pelota.ifOnEdgeBounce()
    basic.pause(300)
    if (Pelota.isTouching(Pala1) || Pelota.isTouching(Pala2)) {
        Pelota.set(LedSpriteProperty.Direction, 0)
        Azar = Math.randomBoolean()
        if (Azar == true) {
            Pelota.turn(Direction.Left, 45)
        } else {
            Pelota.turn(Direction.Right, 45)
        }
        Puntos += 1
    } else {
        if (Pelota.get(LedSpriteProperty.X) == 4) {
            basic.clearScreen()
            basic.showString("Game Over")
            basic.showString("Puntos")
            basic.showNumber(Puntos)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    if (Posición_Pala < 3) {
        Pala2.move(1)
        Pala1.move(1)
        Posición_Pala += 1
    }
})
let Azar = false
let Puntos = 0
let Posición_Pala = 0
let Pelota: game.LedSprite = null
let Pala1: game.LedSprite = null
let Pala2: game.LedSprite = null
Pala2 = game.createSprite(2, 4)
Pala1 = game.createSprite(3, 4)
Pelota = game.createSprite(2, 0)
Posición_Pala = 2
Pelota.turn(Direction.Right, 90)
Puntos = 0
basic.forever(function () {
    Mover_Pelota()
})
