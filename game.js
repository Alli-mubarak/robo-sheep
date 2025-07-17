 let box = document.getElementById('box');
    let obj = document.getElementById('obj');
    let obs = document.getElementsByClassName('obs');
    let isJumping =false;
    let h = [20,25,30,35];
    let ms = 2000;
    let jmpID;
    let jnm;
    let l1,l2;
    let runID = setInterval(()=>{
    obj.style.width="40px";
    obj.style.height="40px";
       obj.style.clipPath = 'polygon(25px 0,35px 0,40px 10px,30px 10px,30px 30px,25px 30px,25px 35px,20px 35px,20px 30px,10px 30px,10px 40px,5px 40px,5px 30px,1px 30px,1px 40px,0 40px,0 30px,0 10px,25px 10px)';
       l2 = setTimeout(()=>{
            obj.style.clipPath = 'polygon(25px 0,35px 0,40px 10px,30px 10px,30px 30px,25px 30px,20px 30px,10px 30px,25px 30px,25px 40px,20px 40px,20px 30px,10px 30px,10px 35px,5px 35px,5px 30px,1px 30px,1px 40px,0 40px,0 30px,0 10px,25px 10px)';
        },100)
    },200);
    
    box.onclick = () =>{
    if(!isJumping){
    isJumping= true;
    clearInterval(runID);
    clearTimeout(l2);
    jnm = 50;
        jmpID = setInterval(()=>{
            obj.style.top = `calc(100% - ${jnm}px)`;
            jnm+=5;
            if(jnm > 130){
                clearInterval(jmpID);
                jmpID = setInterval(()=>{
                jnm -= 5;
                    obj.style.top = `calc(100% - ${jnm}px)`;
                    if(jnm === 50){
                        clearInterval(jmpID);
                      //isJumping=false;
                    }
                    
                },40);
            }
        },40);
    
    
    
        obj.style.clipPath = 'polygon(25px 0,35px 0,40px 10px,30px 10px,30px 30px,25px 30px,25px 40px,20px 40px,20px 30px,10px 30px,10px 40px,5px 40px,5px 30px,1px 30px,1px 40px,0 40px,0 30px,0 10px,25px 10px)';
        
        
      
        
       l1 = setTimeout(()=>{
            isJumping = false;
            runID = setInterval(()=>{
        obj.style.clipPath = 'polygon(25px 0,35px 0,40px 10px,30px 10px,30px 30px,25px 30px,25px 35px,20px 35px,20px 30px,10px 30px,10px 40px,5px 40px,5px 30px,1px 30px,1px 40px,0 40px,0 30px,0 10px,25px 10px)';
      l2 =  setTimeout(()=>{
            obj.style.clipPath = 'polygon(25px 0,35px 0,40px 10px,30px 10px,30px 30px,25px 30px,20px 30px,10px 30px,25px 30px,25px 40px,20px 40px,20px 30px,10px 30px,10px 35px,5px 35px,5px 30px,1px 30px,1px 40px,0 40px,0 30px,0 10px,25px 10px)';
        },100);
    },200);
        },1300);
        }
        }
    
    let speed = 40;
    let obstaclesID = setInterval(()=>{
    let rh = h[Math.floor(Math.random()*h.length)];
        let div = document.createElement('div');
        box.appendChild(div);
        div.style.height=`${rh}px`;
        div.style.top =`calc(100% - ${rh+13}px)`
        div.setAttribute('class','obs');
        setTimeout(()=>{
        let nm=480;
           div.slID = setInterval(()=>{
               div.style.left =`${nm}px`;
               nm-=5;
               if(nm <= -40){
                   clearInterval(div.slID);
                   box.removeChild(div);
               }
               if(nm < 15 && jnm <= (rh+40)){
               clearInterval(obstaclesID);
              setTimeout(()=>{
                  for(each of obs){
                     clearInterval(each.slID);
                 }
              
              },50);
                   clearInterval(runID);
                   clearInterval(jmpID);
                   clearTimeout(l1);
                   clearTimeout(l2);
                   clearInterval(scoreID);
                 
            let rbtn = document.createElement('button');
            box.appendChild(rbtn);
            rbtn.innerHTML="replay";
            rbtn.setAttribute('onclick','document.location="index.html"');
            box.onclick=()=>{
                rbtn.click();
            }          
               }
               
               if(nm === 50 && !isJumping){
                clearInterval(div.slID);
                  clearInterval(obstaclesID);
                  clearInterval(runID);
                  clearInterval(jmpID);
                  clearInterval(scoreID);
                  clearTimeout(l1);
                   clearTimeout(l2);
                
                 for(each of obs){
                     clearInterval(each.slID);
                 }
                    let rbtn = document.createElement('button');
            box.appendChild(rbtn);
            rbtn.innerHTML="replay";
            rbtn.setAttribute('onclick','document.location="index.html"');
            box.onclick=()=>{
                rbtn.click();
            }
                   
                   obj.style.clipPath = 'polygon(25px 0,35px 0,40px 10px,30px 10px,30px 30px,25px 30px,25px 40px,20px 40px,20px 30px,10px 30px,10px 40px,5px 40px,5px 30px,0 30px,0 10px,25px 10px)';
            
                  
               }
           },speed);
            
        },100)
        ms-= 20;
        
    },ms);
    let score = 0;
    let scorebox= document.getElementById('score');
   let scoreID = setInterval(()=>{
        score++;
     if(score<10){
        scorebox.innerHTML=`000${score}`;
        }else if(score >= 10 && score <100){
            scorebox.innerHTML=`00${score}`;
        }else if(score >= 100 && score <1000){
            scorebox.innerHTML=`0${score}`;
        }else{
            scorebox.innerHTML=score;
        }
    },500);
   document.body.onclick= () =>{
       box.click();
   }
   
    
