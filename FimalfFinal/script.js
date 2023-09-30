let images = [
    "1.png",
    "2.png", 
    "3.png", 
    "4.png", 
    "5.png", 
    "6.png", 
    "7.png", 
    "8.png", 
    ""
];
let t = false
let puzzle_img = document.getElementsByClassName("puzzle_img");
let puzzle_table = document.getElementsByClassName("T");
let img1 = document.getElementById("img1");
let main = document.getElementById("main");
let counter_text = document.getElementById("counter");
let count = 100

// for(let i = 0; i < puzzle_img.length; i++){
//     let random_index = Math.floor(Math.random()*images.length);
//     puzzle_random_itam = images[random_index]
//     if(puzzle_random_itam==""){
//         puzzle_img[i].setAttribute("src",puzzle_random_itam)
//     }
//     else{
//         puzzle_img[i].setAttribute("src", "img/" + puzzle_random_itam);
//     }
//     images.splice(random_index,1)

// }

    function isPuzzleSolved(){
    let q = 0;
    const corectOrder = ["1.png","4.png","7.png","2.png","5.png","8.png","3.png","6.png"]
    for(let i = 0; i < corectOrder.length; i++){
    if(puzzle_img[i].getAttribute("src") == "img/" + corectOrder[i]){
    q++
    
    }
    }
    if(q==corectOrder.length){
    return true
    }
    else{
    return false
    }
    }

for(let i = 0; i < puzzle_img.length; i++){
    puzzle_img[i].addEventListener('click', function(){
        if(puzzle_img[i+1] && puzzle_img[i+1].getAttribute("src") == "" && i!=2 && i != 5){
            count--
            let empty_col =  puzzle_img[i+1].getAttribute("src");
            let img_col = puzzle_img[i].getAttribute("src");

            puzzle_img[i+1].setAttribute("src",img_col);
            puzzle_img[i].setAttribute("src",empty_col);

        }else if(puzzle_img[i-1] && puzzle_img[i-1].getAttribute("src") == "" && i != 3){
            count--
            let empty_col =  puzzle_img[i-1].getAttribute("src");
             let img_col = puzzle_img[i].getAttribute("src");
             puzzle_img[i-1].setAttribute("src",img_col);
             puzzle_img[i].setAttribute("src",empty_col);

        }else if(puzzle_img[i+3] && puzzle_img[i+3].getAttribute("src") == ""){
            count--
            let empty_col =  puzzle_img[i+3].getAttribute("src");
             let img_col = puzzle_img[i].getAttribute("src");
             puzzle_img[i+3].setAttribute("src",img_col);
             puzzle_img[i].setAttribute("src",empty_col);

        }else if(puzzle_img[i-3] && puzzle_img[i-3].getAttribute("src") == ""){
            count--
            let empty_col =  puzzle_img[i-3].getAttribute("src");
             let img_col = puzzle_img[i].getAttribute("src");
             puzzle_img[i-3].setAttribute("src",img_col);
             puzzle_img[i].setAttribute("src",empty_col);

        }
        if(isPuzzleSolved()){
            
            console.log("You Win");
            puzzle_img[8].setAttribute("src",  "Img/9.png")
            puzzle_table[0].classList.add("scale-in-top")
            puzzle_table[0].style.animationDirection ="reverse"
            img1.style.display ='block'
            img1.classList.add("scale-in-top")
            counter_text.innerHTML ="You win"
            t = true
        }
        if(!t){
            counter_text.innerHTML =count +"/100"
            if(count==0){
                puzzle_table[0].classList.add("scale-in-top")
                puzzle_table[0].style.animationDirection ="reverse"
                counter_text.innerHTML="You Lose"
                let but = document.createElement("a");
                but.innerHTML = "Play again"
                but.setAttribute("href","game.html")
                but.classList.add("a")
                main.append(but)
            }
        }
        
    })
}