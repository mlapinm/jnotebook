$(() => {
    let log = $(".log")
    let btn1 = $(".btn1")
    btn1.click(()=>{

        $(".modal-title").text('title')
        $(".modal-text").text('text')

        $("#exampleModal").modal('show')

        log.text(3)
    })

    $('.text-card').click((e) => {
        console.log(e.target.innerText)
        $(".modal-text").text(e.target.id + " " + e.target.innerText)

        $("#exampleModal").modal('show')

    })


    log.text("dum123".substr(3))
})