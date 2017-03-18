/**
 * 软件1602-吴猛
 * Created by hasee on 2016/12/24.
 */
var jueSeText=new Array();
var JNicoPath=new Array();
var path="../img/zhuanzhi/";    //转职图片的路径
function chaImgAndT(ID) {
    var  guijianshiicoPath="../img/jinengIco/";     //角色技能图标路径
    if(ID=="mingchen1"){
        /**
         * jueSeText 数组保存的是4个转职的文字信息
         *
         * JNicoPath 保存的是4个角色的技能图标的路径
         */
        jueSeText[0]=new Array("剑魂","物理攻击","轻甲","光剑","剑圣","剑神");
        jueSeText[1]=new Array("狂战士","物理攻击","重甲","太刀、巨剑、钝器、部分短剑","浴血魔神","帝血弑天");
        jueSeText[2]=new Array("鬼泣","魔法攻击","布甲","短剑、太刀","弑魂","黑暗君主");
        jueSeText[3]=new Array("阿修罗","魔法攻击","板甲","短剑、太刀","大暗黑天","天帝");
        for(var icoNum=0;icoNum<4;icoNum++){
            JNicoPath[icoNum]=new Array();
            for(var icoNum2=0;icoNum2<6;icoNum2++){
                if(icoNum==0){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"guijianshi/jianshen/"+icoNum2+".jpg";
                }else if (icoNum==1){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"guijianshi/yuxue/"+icoNum2+".jpg";
                }else if(icoNum==2){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"guijianshi/guiqi/"+icoNum2+".jpg";
                }else if(icoNum==3){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"guijianshi/axiuluo/"+icoNum2+".jpg";
                }
            }
        }
        changeImgAndText(jueSeText,"guijianshi",4,JNicoPath);
        chanLiColor(0);
    }else if(ID=="mingcheng2"){
        jueSeText[0]=new Array("柔道","物理攻击","轻甲","臂凯、东方棍","暴风眼","风暴女皇");
        jueSeText[1]=new Array("气功","魔法攻击","布甲","手套","百花缭乱","念帝");
        jueSeText[2]=new Array("街霸","物理攻击、魔法攻击","重甲","爪","毒王","毒神绝");
        jueSeText[3]=new Array("散打","物理攻击","轻甲","拳套、臂凯","武神","极武圣");
        for(var icoNum=0;icoNum<4;icoNum++){
            JNicoPath[icoNum]=new Array();
            for(var icoNum2=0;icoNum2<6;icoNum2++){
                if(icoNum==0){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"gedoujia/roudao/"+icoNum2+".jpg";
                }else if (icoNum==1){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"gedoujia/qigong/"+icoNum2+".jpg";
                }else if(icoNum==2){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"gedoujia/jieba/"+icoNum2+".jpg";
                }else if(icoNum==3){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"gedoujia/sanda/"+icoNum2+".jpg";
                }
            }
        }
        changeImgAndText(jueSeText,"gedou",4,JNicoPath);
        chanLiColor(1);
    }else if(ID=="mingcheng3"){
        jueSeText[0]=new Array("漫游枪手","物理攻击","皮甲","左轮手枪","枪神","掠天之翼");
        jueSeText[1]=new Array("机械师","魔法攻击","布甲","自动手枪","机械战神","机械元首");
        jueSeText[2]=new Array("弹药专家","物理攻击、魔法攻击","皮甲","步枪、自动手枪、手炮","大将军","战场统治者");
        jueSeText[3]=new Array("枪炮师","物理攻击","重甲","手炮","狂暴者","毁灭者");
        for(var icoNum=0;icoNum<4;icoNum++){
            JNicoPath[icoNum]=new Array();
            for(var icoNum2=0;icoNum2<6;icoNum2++){
                if(icoNum==0){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"shenqiangshou/manyou/"+icoNum2+".jpg";
                }else if (icoNum==1){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"shenqiangshou/jixie/"+icoNum2+".jpg";
                }else if(icoNum==2){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"shenqiangshou/danyao/"+icoNum2+".jpg";
                }else if(icoNum==3){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"shenqiangshou/qiangpao/"+icoNum2+".jpg";
                }
            }
        }
        changeImgAndText(jueSeText,"shenqiangshou",4,JNicoPath);
        chanLiColor(2);
    }else if(ID=="mingcheng4"){
        jueSeText[0]=new Array("元素爆破师","魔法攻击","皮甲","魔杖、法杖","魔皇","湮灭之瞳");
        jueSeText[1]=new Array("冰结师","魔法攻击","皮甲","魔杖、法杖","冰冻之心","刹那永恒");
        for(var icoNum=0;icoNum<2;icoNum++){
            JNicoPath[icoNum]=new Array();
            for(var icoNum2=0;icoNum2<6;icoNum2++){
                if(icoNum==0){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"mofashi/yuansu/"+icoNum2+".jpg";
                }else if (icoNum==1){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"mofashi/bingjie/"+icoNum2+".jpg";
                }
            }
        }
        changeImgAndText(jueSeText,"mofashi",2,JNicoPath);
        chanLiColor(3);
    }else if(ID=="mingcheng5"){
        jueSeText[0]=new Array("刺客","物理攻击","皮甲","匕首、双剑","银月","月影星劫");
        jueSeText[1]=new Array("死灵术士","魔法攻击","轻甲","权杖","灵魂收割者","亡魂主宰");
        jueSeText[2]=new Array("忍者","魔法攻击","布甲","苦无","毕方之炎","不知火");
        jueSeText[3]=new Array("影舞者","物理攻击","皮甲","匕首","梦魇","幽冥");
        for(var icoNum=0;icoNum<4;icoNum++){
            JNicoPath[icoNum]=new Array();
            for(var icoNum2=0;icoNum2<6;icoNum2++){
                if(icoNum==0){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"anyeshizhe/cike/"+icoNum2+".jpg";
                }else if (icoNum==1){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"anyeshizhe/siling/"+icoNum2+".jpg";
                }else if(icoNum==2){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"anyeshizhe/renzhe/"+icoNum2+".jpg";
                }else if(icoNum==3){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"anyeshizhe/yingwuzhe/"+icoNum2+".jpg";
                }
            }
        }
        changeImgAndText(jueSeText,"anyeshizhe",4,JNicoPath);
        chanLiColor(4);
    }else if(ID=="mingcheng7"){
        jueSeText[0]=new Array("精灵骑士","物理攻击","板甲","巨剑","星辰之光","大地女神");
        jueSeText[1]=new Array("混沌魔灵","魔法攻击","重甲","短剑","黑魔后","黑曜神");
        for(var icoNum=0;icoNum<4;icoNum++){
            JNicoPath[icoNum]=new Array();
            for(var icoNum2=0;icoNum2<6;icoNum2++){
                if(icoNum==0){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"shouhuzhe/qishi/"+icoNum2+".jpg";
                }else if (icoNum==1){
                    JNicoPath[icoNum][icoNum2]=guijianshiicoPath+"shouhuzhe/hundun/"+icoNum2+".jpg";
                }
            }
        }
        changeImgAndText(jueSeText,"shouhuzhe",2,JNicoPath);
        chanLiColor(6);
    }
}
/*
* 形参
* jueSeTextCan    接收文字信息的数组
* name   角色图片所在的文件目录 名称
 * number   有几个转职角色
 * JNIco    技能图标路径数组
* */
function changeImgAndText(jueSeTextCan,name,number,JNIco) {
    var textNum=0;
    if(number==4){          //判断传入的是几张图片  获得有几个转职
        for(var imgNum=0;imgNum<4;imgNum++){
            document.getElementById('left_characterJieshao').style.overflowY="scroll";      //将div设置为可滚动
            document.getElementById("zhuangzhiImg"+(imgNum+1)).src=path+name+"/"+imgNum+".jpg";         //更换图片
            //noinspection JSDuplicatedDeclaration
            for(var nameTextNum=0;nameTextNum<6;nameTextNum++){                     //更换文字内容和技能图标
                textNum++;
                document.getElementById("nameText"+textNum).innerHTML=jueSeTextCan[imgNum][nameTextNum];    //更改文字内容
                document.getElementById("JiNengIma"+(textNum-1)).src=JNIco[imgNum][nameTextNum];        //更换技能图标
            }
        }
    }else if(number==2){
        location.hash="#getTop";     //回到图片的顶部
        document.getElementById('left_characterJieshao').style.overflowY="hidden";      //将div设置为不可滚动
        for(var imgNum1=0;imgNum1<2;imgNum1++){
            document.getElementById("zhuangzhiImg"+(imgNum1+1)).src=path+name+"/"+imgNum1+".jpg";         //更换图片
            for(var nameTextNum1=0;nameTextNum1<6;nameTextNum1++){
                textNum++;
                document.getElementById("nameText"+textNum).innerHTML=jueSeTextCan[imgNum1][nameTextNum1];
                document.getElementById("JiNengIma"+(textNum-1)).src=JNIco[imgNum1][nameTextNum1];
            }
        }
    }
}
/*
* id 判断第几个名称 li 的背景需要更改
* */
function chanLiColor(id){       //更改名称的背景颜色
    document.getElementById('changeLiColor'+id).style.backgroundColor="#70969F";    //点击的颜色为这个
    for(var butColorNum=0;butColorNum<8;butColorNum++){                 //保持颜色不变
        if(butColorNum==id){
            continue;
        }else{
            document.getElementById('changeLiColor'+butColorNum).style.backgroundColor="#547586";
        }
    }
}