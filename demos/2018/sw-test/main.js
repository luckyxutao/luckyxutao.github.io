
window.onload=()=>{
    var $timeCT = document.getElementById('fromJS')
    window.setInterval(()=>{
        var now = new Date();
        $timeCT.innerHTML = now.toTimeString()
    },1000)
}