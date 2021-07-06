$(() => {
    let log = $(".log")
    let text1 = "She want him to tell her the truth"
    const utterance = new SpeechSynthesisUtterance(text1);
    window.speechSynthesis.speak(utterance);
    log.text(text1)

})