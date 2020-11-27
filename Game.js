class Game{
constructor(){}

getState(){
var gameStateREF=database.ref("gameState")
gameStateREF.on("value",function(data){


gameState=data.val()


})
}
update(State){
database.ref("/").update({
    gameState:State})



}
async Start(){
if (gameState===0){
player=new Player()
var playercountREF=await database.ref("playerCount").once("value")
if(playercountREF.exists()){
    playerCount=playercountREF.bal()

player.getCount()
}
form=new Form()
form.display()


}



}
play(){
form.hide()
textSize(30)
text("gamestart",120,100)
player.getPlayerInfo()
if(allPlayers!==undefined){
var display_position=130

display_position+=20
textSize(15)
text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position)
}



if(keyIsDown(UP_ARROW)&&player.index!==null){

    player.distance+=50
    player.update()

}











}
}