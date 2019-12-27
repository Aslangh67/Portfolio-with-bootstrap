const about=$(".about")
const contact=$(".contact")
const portfolio=$(".portfolio")
const aboutClick=$(".about-click")
const conatactClick=$(".contact-click")
const portfolioClick=$(".portfolio-click")


portfolio.hide()
contact.hide()
portfolioClick.click(function(event){
    event.preventDefault()
    portfolio.show()
    about.hide()
    contact.hide()
})
conatactClick.click(function(event){
    event.preventDefault()
    contact.show()
    about.hide()
    portfolio.hide()
})
aboutClick.click(function(event){
    event.preventDefault()
    about.show()
    portfolio.hide()
    contact.hide()
})
$(".submit-btn").click(function(event){
    event.preventDefault()
    alert("This fuction is not operational yet, sorry for the inconvenience")
})


