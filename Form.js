class Form{
consructor(){
this.input=createInput("name")
this.button=createButton("play")
this.greeting=createElement("h2")
}
hide(){
this.greeting.hide()
this.button.hide(
    this.input.hide()
)
}
display(){
var T=createElement("h2")
T.html("CarRacingGame")
T.position(530,20)
var Input=createInput("name")
var Button=createButton("play")
var Greeting=createElement("h3")
Input.position(530,160)
Button.position(550,200)
Button.mousePressed(function(){
Input.hide()
Button.hide()
var name=Input.value()
playerCount=playerCount+1
player.update(name)
player.updateCount(playerCount)
Greeting.html("hello "+name)
Greeting.position(530,160)

})

}

















}