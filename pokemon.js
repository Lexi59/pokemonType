let current = "";
function changeType(type){
    console.log("Fighting " + type);
    var list = document.getElementById('list');
    if(current != ""){document.getElementById(current).style.opacity = ".2";}
    document.getElementById(type).style.opacity = "1";
    current = type;
    if(type == "dragon"){
        list.innerHTML="<figure><img src='ice.png'><figcaption>Ice</figcaption></figure>"+
        "<figure><img src='fairy.png'><figcaption>Fairy</figcaption></figure>";
    }
    else if(type == "normal"){
        list.innerHTML="";
    }
    else if(type == "flying"){
        //fighting, grass, bug
        list.innerHTML = "<figure><img src='fighting.png'><figcaption>Fighting</figcaption></figure>"+
        "<figure><img src='grass.png'><figcaption>Grass</figcaption></figure>"+
        "<figure><img src='bug.png'><figcaption>Bug</figcaption></figure>";
    }
    else if (type == "ground"){
        //fire,electric,poison, rock, steel
        list.innerHTML = "<figure><img src='fire.png'><figcaption>Fire</figcaption></figure>"+
        "<figure><img src='electric.png'><figcaption>Electric</figcaption></figure>"+
        "<figure><img src='poison.png'><figcaption>Poison</figcaption></figure>"+
        "<figure><img src='rock.png'><figcaption>Rock</figcaption></figure>"+
        "<figure><img src='steel.png'><figcaption>Steel</figcaption></figure>";
    }
    else if (type == "bug"){
        //grass,psychic, dark
        list.innerHTML = "<figure><img src='grass.png'><figcaption>Grass</figcaption></figure>"+
        "<figure><img src='psychic.png'><figcaption>Psychic</figcaption></figure>"+
        "<figure><img src='dark.png'><figcaption>Dark</figcaption></figure>";
        
    }
    else if (type == "steel"){
        //ice, rock, fairy
        list.innerHTML = "<figure><img src='ice.png'><figcaption>Ice</figcaption></figure>"+
        "<figure><img src='rock.png'><figcaption>Rock</figcaption></figure>"+
        "<figure><img src='fairy.png'><figcaption>Fairy</figcaption></figure>";
    }
    else if (type == "water"){
        //fire,ground,rock
        list.innerHTML = "<figure><img src='fire.png'><figcaption>Fire</figcaption></figure>"+
        "<figure><img src='ground.png'><figcaption>Ground</figcaption></figure>";
    }
    else if (type == "electric"){
        //water, flying
        list.innerHTML = "<figure><img src='water.png'><figcaption>Water</figcaption></figure>"+
        "<figure><img src='flying.png'><figcaption>Flying</figcaption></figure>";
    }
    else if (type == "ice"){
        //grass, ground, flying, dragon
        list.innerHTML = "<figure><img src='grass.png'><figcaption>Grass</figcaption></figure>"+
        "<figure><img src='ground.png'><figcaption>Ground</figcaption></figure>"+
        "<figure><img src='flying.png'><figcaption>Flying</figcaption></figure>"+
        "<figure><img src='dragon.png'><figcaption>Dragon</figcaption></figure>";
    }
    else if (type == "dark"){
        //ghost, psychic
        list.innerHTML = "<figure><img src='ghost.png'><figcaption>Ghost</figcaption></figure>"+
        "<figure><img src='psychic.png'><figcaption>Psychic</figcaption></figure>";
    }
    else if (type == "fighting"){
        //normal, ice, rock, dark, steel
        list.innerHTML = "<figure><img src='normal.png'><figcaption>Normal</figcaption></figure>"+
        "<figure><img src='ice.png'><figcaption>Ice</figcaption></figure>"+
        "<figure><img src='rock.png'><figcaption>Rock</figcaption></figure>"+
        "<figure><img src='dark.png'><figcaption>Dark</figcaption></figure>"+
        "<figure><img src='steel.png'><figcaption>Steel</figcaption></figure>";
    }
    else if (type == "poison"){
        //grass, fairy
        list.innerHTML = "<figure><img src='grass.png'><figcaption>Grass</figcaption></figure>"+
        "<figure><img src='fairy.png'><figcaption>Fairy</figcaption></figure>";
    }
    else if (type == "rock"){
        //fire, ice, flying, bug
        list.innerHTML = "<figure><img src='fire.png'><figcaption>Fire</figcaption></figure>"+
        "<figure><img src='ice.png'><figcaption>Ice</figcaption></figure>"+
        "<figure><img src='flying.png'><figcaption>Flying</figcaption></figure>"+
        "<figure><img src='bug.png'><figcaption>Bug</figcaption></figure>";
    }
    else if (type == "ghost"){
        //psychic
        list.innerHTML = "<figure><img src='psychic.png'><figcaption>Psychic</figcaption></figure>";
    }
    else if (type == "fire"){
        //grass, bug, ice, steel
        list.innerHTML = "<figure><img src='grass.png'><figcaption>Grass</figcaption></figure>"+
        "<figure><img src='bug.png'><figcaption>Bug</figcaption></figure>"+
        "<figure><img src='ice.png'><figcaption>Ice</figcaption></figure>"+
        "<figure><img src='steel.png'><figcaption>Steel</figcaption></figure>";
    }
    else if (type == "grass"){
        //water, rock, ground
        list.innerHTML = "<figure><img src='water.png'><figcaption>Water</figcaption></figure>"+
        "<figure><img src='rock.png'><figcaption>Rock</figcaption></figure>"+
        "<figure><img src='ground.png'><figcaption>Ground</figcaption></figure>";
    }
    else if (type == "psychic"){
        //fighting, poison
        list.innerHTML = "<figure><img src='fighting.png'><figcaption>Fighting</figcaption></figure>"+
        "<figure><img src='poison.png'><figcaption>Poison</figcaption></figure>";
    }
    else if (type == "dragon"){
        list.innerHTML = "";
    }
    else if (type == "fairy"){
        //fighting, dragon, dark
        list.innerHTML = "<figure><img src='fighting.png'><figcaption>Fighting</figcaption></figure>"+
        "<figure><img src='dragon.png'><figcaption>Dragon</figcaption></figure>"+
        "<figure><img src='dark.png'><figcaption>Dark</figcaption></figure>";
    }
}