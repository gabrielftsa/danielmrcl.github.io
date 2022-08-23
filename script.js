function carregar() {
    var detailsElement = window.document.getElementById('details')
    var dataNow = new Date
    var birthDate = new Date("2004-03-05")
    var dateTime = (dataNow - birthDate) / 1000 / 60 / 60 / 24 / 365
    detailsElement.innerHTML = `Gabriel Feitosa/ ${Math.floor(dateTime)}anos / Brazilian / Dev`
}
