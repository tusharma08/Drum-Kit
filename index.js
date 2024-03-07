
var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
}

function handleClick() {
    var key = this.innerHTML;
    switch (key) {
        case "w":
            var w = new Audio("sounds/crash.mp3");
            w.play();
            break;
        case "a":
            var a = new Audio("sounds/kick-bass.mp3");
            a.play();
            break;
        case "s":
            var s = new Audio("sounds/snare.mp3");
            s.play();
            break;
        case "d":
            var d = new Audio("sounds/tom-1.mp3");
            d.play();
            break;
        case "j":
            var j = new Audio("sounds/tom-2.mp3");
            j.play();
            break;
        case "k":
            var k = new Audio("sounds/tom-3.mp3");
            k.play();
            break;
        case "l":
            var l = new Audio("sounds/tom-4.mp3");
            l.play();
            break;
        default :
            console.log();
    }
}

function handleKey(beep)
{
    var key = (beep.key);
    switch (key) {
        case "w":
            var w = new Audio("sounds/crash.mp3");
            w.play();
            break;
        case "a":
            var a = new Audio("sounds/kick-bass.mp3");
            a.play();
            break;
        case "s":
            var s = new Audio("sounds/snare.mp3");
            s.play();
            break;
        case "d":
            var d = new Audio("sounds/tom-1.mp3");
            d.play();
            break;
        case "j":
            var j = new Audio("sounds/tom-2.mp3");
            j.play();
            break;
        case "k":
            var k = new Audio("sounds/tom-3.mp3");
            k.play();
            break;
        case "l":
            var l = new Audio("sounds/tom-4.mp3");
            l.play();
            break;
        default :
            console.log();
    }
    
}