let turn='0';

let winner=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[]
]
const board=document.querySelector('.board')
board.addEventListener('click',(event)=>{
    const element=event.target;
    if(turn==='0'){
        element.innerHTML="O";
        turn='X';
    }
    else{
        element.innerHTML="X";
        turn='O';
    }
})