function play_sound(c) {
    var name = "";
    switch (c) {
        case "w":
            { name = "kick"; break; }
        case "a":
            { name = "tom1"; break; }
        case "s":
            { name = "tom4"; break; }
        case "d":
            { name = "snare"; break; }
        case "j":
            { name = "tom3"; break; }
        case "k":
            { name = "tom2"; break; }
        case "l":
            { name = "crash"; break; }
        default:
            { name = "error"; }

    }
    if (name != "error") {
        var sound = new Audio('sounds/' + name + '.mp3')
        sound.play()
    } else {
        console.log(name + " for the " + c)
    }
}


function button_animation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);

}

function drum_and_no_bass() {

    for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
            play_sound(this.innerHTML);
            button_animation(this.innerHTML)

        });
    document.addEventListener("keydown", function(event) {

        play_sound(event.key);
        button_animation(event.key);

    });
}
drum_and_no_bass()