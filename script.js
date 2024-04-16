const flip = document.getElementById("flip")
const reset = document.getElementById("reset")

const head = document.getElementById("head")
const tail = document.getElementById("tail")

const cnt1 = document.getElementById("hCnt")
const cnt2 = document.getElementById("tCnt")

let hCnt = 0
let tCnt = 0

reset.addEventListener('click',function(){
    tail.style.backgroundColor = 'white'
    head.style.backgroundColor = 'white'
    hCnt = 0
    tCnt = 0
    cnt1.innerHTML = `${hCnt}`
    cnt2.innerHTML = `${tCnt}`
    t.style.fontSize = 16+"px";
    h.style.fontSize = 16+"px";
})

flip.addEventListener('click', function(){

    const random = parseInt(Math.random() * 10)
    const h = document.getElementById("h")
    const t = document.getElementById("t")

    if(random%2 == 0){
        hCnt++
        head.style.backgroundColor = '#1E90FF';
        tail.style.backgroundColor = 'white';
        let newSize = 16 * 2
        h.style.fontSize = newSize+"px";
        t.style.fontSize = 16+"px";

        blink(head)
    } else {
        tCnt++
        head.style.backgroundColor = 'white';
        tail.style.backgroundColor = '#1E90FF';
        let newSize = 16 * 2;
        t.style.fontSize = newSize+"px";
        h.style.fontSize = 16+"px";

        blink(tail)
    }

    cnt1.innerHTML = `${hCnt}`
    cnt2.innerHTML = `${tCnt}`

})

function blink(element) {
    element.classList.add('blink');
    setTimeout(function() {
        element.classList.remove('blink');
    }, 500);
}
