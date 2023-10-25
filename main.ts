game.onUpdate(function () {
    let w: Sprite = null
    music.play(music.stringPlayable("- - - - C5 C5 C5 C5 ", 85), music.PlaybackMode.InBackground)
    light.showAnimation(light.theaterChaseAnimation, 5000)
    controller.moveSprite(w, 100, 100)
})
