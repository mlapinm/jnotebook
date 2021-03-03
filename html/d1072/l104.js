

var playlist = new Array();
playlist[1] = "The Yoy Formidable"
playlist[2] = "Young the Giant"
playlist[3] = "Washed Out"
document.write("333")

var i = 0
while (i < playlist.length){
    document.write("<br> Now Playing: " + playlist[i])
    i++
}

// 333
// Now Playing: undefined
// Now Playing: The Yoy Formidable
// Now Playing: Young the Giant
// Now Playing: Washed Out