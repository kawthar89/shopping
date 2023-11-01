var likes=document.getElementsByClassName('like')
console.log(likes)
for(let i=0;i<likes.length;i++)
{
let like=likes[i]
like.addEventListener('click',function(){
if(like.style.color=='red'){
    like.style.color='black'
}else
like.style.color='red'

})
}

// partie ++++

var plussigns=document.getElementsByClassName('plus-btn')
console.log(plussigns)
for(let i=0;i<plussigns.length;i++){
    let pluss=plussigns[i]
    pluss.addEventListener('click',function(){
        x=pluss.previousElementSibling.value ++
        total()
    })
}
//partie ----
var minus=document.getElementsByClassName('minus-btn')
console.log(minus)
for(let i=0;i<minus.length;i++){
   let btnminus=minus[i]
   console.log(btnminus)
   btnminus.addEventListener('click',function(){
    if(btnminus.nextElementSibling.value>1)
     y=btnminus.nextElementSibling.value--
     total()
   })
  
}

//partie delete
 var delated=document.getElementsByClassName('delete')
 var parent=document.getElementsByClassName('Item')
 console.log(delated)
 for(let i=0;i<delated.length;i++){
 let btndelete=delated[i]
 let t=parent[i]
 btndelete.addEventListener('click',function(){
t.remove()
total()
 })
}
// partie sommet

var totalp=document.getElementById('finalPrice')
var parent=document.getElementsByClassName('Item')
function total(){
    var s =0
for(let i=0;i<parent.length;i++){
    item=parent[i]
  
s=s+(item.querySelector('.Quant').value*item.querySelector('.price').innerHTML)
console.log(s)
}
return(totalp.value=s)
}



