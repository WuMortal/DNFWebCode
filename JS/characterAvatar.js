/**
 * Created by hasee on 2016/12/16.
 */
//循环给游戏人物头像赋值地址
    var characterArrary=new Array(14);
    for(var x=0;x<characterArrary.length;x++){
        characterArrary[x]="img/Character_img/CharacterTouxiang/"+x+".png";
    }
    for(var j=0;j<14;j++){
        if(j==0){
            document.getElementById("character_touxiang1").style.backgroundImage = "url(img/Character_img/CharacterTouxiang/click_after/0.png)";
        }else{
            document.getElementById("character_touxiang"+(j+1)).style.backgroundImage = "url("+characterArrary[j]+")";
        }
    }
