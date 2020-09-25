var canvas = new fabric.Canvas('canvas');

var player_x = 10;
var player_y = 10;

var block_width = 30;
var block_height = 30;

var playerObject = "";
var blockObject = "";

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(playerObject);
    });
}

function blockUpdate(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockObject = Img;
        blockObject.scaleToWidth(block_width);
        blockObject.scaleToHeight(block_height);
        blockObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(blockObject);
    });
}

window.addEventListener("keydown",keyPressed);
function keyPressed(e){
    keyPress = e.keyCode;
    console.log(keyPress);

    if(e.shiftKey == true && keyPress == '80'){
        if(block_width <=90){
            block_width = block_width + 10;
            block_height = block_height + 10;
            document.getElementById("current_width").innerHTML = block_width;
            document.getElementById("current_height").innerHTML = block_height;
        }
    }
    if(e.shiftKey == true && keyPress == '77'){
        if(block_width >=20){
            block_width = block_width - 10;
            block_height = block_height - 10;
            document.getElementById("current_width").innerHTML = block_width;
            document.getElementById("current_height").innerHTML = block_height;
        }
    }
    if(keyPress == '67'){
        blockUpdate('cloud.jpg');
        console.log("c");
    }
    if(keyPress == '68'){
        blockUpdate('dark_green.png');
        console.log("d");
    }
    if(keyPress == '71'){
        blockUpdate('ground.png');
        console.log("g");
    }
    if(keyPress == '76'){
        blockUpdate('light_green.png');
        console.log("l");
    }
    if(keyPress == '82'){
        blockUpdate('roof.jpg');
        console.log("r");
    }
    if(keyPress == '84'){
        blockUpdate('trunk.jpg');
        console.log("t");
    }
    if(keyPress == '85'){
        blockUpdate('unique.png');
        console.log("u");
    }
    if(keyPress == '87'){
        blockUpdate('wall.jpg');
        console.log("w");
    }
    if(keyPress == '89'){
        blockUpdate('yellow_wall.png');
        console.log("y");
    }
    if(keyPress == '38'){
        up();
        console.log("up");
    }
    if(keyPress == '39'){
        right();
        console.log("right");
    }
    if(keyPress == '40'){
        down();
        console.log("down");
    }
    if(keyPress == '37'){
        left();
        console.log("left");
    }
}

function up(){
    if(player_y>=0){
        player_y = player_y-block_height;
        console.log("block_height ="+block_height);
        console.log("the position x is"+player_x+" the position Y = "+player_y);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function down(){
    if(player_y<=600){
        player_y = player_y+block_height;
        console.log("block_height ="+block_height);
        console.log("the position x is"+player_x+" the position Y = "+player_y);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function left(){
    if(player_x>=0){
        player_x = player_x-block_width;
        console.log("block_width ="+block_width);
        console.log("the position x is"+player_x+" the position Y = "+player_y);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function right(){
    if(player_x<=1000){
        player_x = player_x+block_width;
        console.log("block_width ="+block_width);
        console.log("the position x is"+player_x+" the position Y = "+player_y);
        canvas.remove(playerObject);
        playerUpdate();
    }
}