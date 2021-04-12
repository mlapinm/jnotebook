$(()=>{
 
let tests = [
{
  asks: [
    "What does 'check out' mean in the sentence:",
    "Check out the Blue Frog or the space-age Pod restaurant..."
  ],
  responses:[
    "Try or investigate"
  ],
  "variants": [
    "Avoid",
    "Pay by cheque",
    "Try or investigate",
    "Cross off"
  ]
},
{
  asks: [
    "Why would a certain level of fitness be required to go on the Northern Lights tour?"
  ],
  responses:[
    "Quite a lot of physical activity is involved"
  ],
  "variants": [
    "To put people off",
    "To make people feel bad",
    "Quite a lot of physical activity is involved"
  ]
},
{
  asks: [
    "I prefer walking ____ driving."
  ],
  responses:[
    "than"
  ],
  variants: [
    "with",
    "than",
    "and"
  ]
},
{
  asks: [
    "TRUE OR FALSE: We add -iest to adjectives ending in -y, e.g. happiest, funniest."
  ],
  responses:[
    "True"
  ],
  variants: [
    "True",
    "False"
  ]
},
{
  asks: [
    "Are there any adjectives in this sentence?:",
    "It was a nightmare."
  ],
  responses:[
    "No"
  ],
  variants: [
    "Yes",
    "No"
  ]
},
{
  asks: [
    "What is the correct definition of the phrase: somewhere hot?"
  ],
  responses:[
    "A country with hot weather"
  ],
  variants: [
    "Hot food",
    "Something that will burn you",
    "A country with hot weather"
  ]
},
{
  asks: [
    "TRUE OR FALSE: Adjectives are used to describe nouns (people, places and things)."
  ],
  responses:[
    "True"
  ],
  variants: [
    "True",
    "False"
  ]
},
{
  asks: [
    "Which from below are amenities you will find in most towns and cities? Choose three."
  ],
  responses:[
    "Restaurants",
    "Banks",
    "Shops"
  ],
  variants: [
    "Sheep",
    "Livestock",
    "Farmland",
    "Restaurants",
    "Banks",
    "Shops"
  ]
},
{
  asks: [
    "Why do we say: 'on the right hand side', instead of 'on the right'?"
  ],
  responses:[
    "So they know it is to the right of the person"
  ],
  variants: [
    "because the person must raise their hand",
    "So they know it is to the right of the person",
    "because we're pointing",
    "because it's polite"
  ]
},
{
  asks: [
    "What does an 'expert guide' do for people when they're travelling?"
  ],
  responses:[
    "show them the best place to go"
  ],
  variants: [
    "provide medical assistance",
    "book accommodation and flights",
    "sell them things",
    "show them the best place to go"
  ]
},
{
  asks: [
    "",
    ""
  ],
  responses:[
    "",
    ""
  ],
  variants: [
    "",
    "",
    ""
  ]
},
]

class Round{
  
  constructor(test){
    this.test = test
  }
  
  show(){
    for (var name in this.test.asks){
      var text = this.test.asks[name]
      $("<p>"+ text +"</p>").appendTo(".container1")
    }
    for (var name in this.test.variants){
      var text = this.test.variants[name]
      const div1 = $("<div>"+ text +"</div>")
      div1.addClass("rounded")
      div1.appendTo(".container1")
      div1.click((e)=>{
        if($(e.target).hasClass("selected")){
          $(e.target).removeClass("selected")
        }else{
          $(e.target).addClass("selected")
        }
      })
    }


  }
  
}

let number = 0
let numberMax = tests.length-1
const round = new Round(tests[number])  
round.show()  
$(".container1").addClass("rounded")

$(".next").click(()=>{
  $(".container1").children().remove()

  if(number<numberMax){
    number+=1
  }
  $("#h4").text("" + (number+1))
  const round = new Round(tests[number])  
  round.show()  
  $(".result").text("Result: ")
})  

$(".previouse").click(()=>{
  $(".container1").children().remove()

  if(number > 0){
    number-=1
  }
  $("#h4").text("" + (number+1))
  const round = new Round(tests[number])  
  round.show()  
  $(".result").text("Result: ")
})  
  
$(".submit").click(()=>{
  
 let items = Array.from($(".selected"))
 let selects = [] 
 $(".selected").each((i,e)=>{
   selects.push($(e).text())
 }) 
 selects.sort() 
 let responses = tests[number].responses
 responses.sort()
 // responses.pop() 
 let isTrue = selects.toString() === responses.toString() 
   $(".result").text("Result: " + isTrue)
 console.log(isTrue) 
 console.log(responses) 
})  
$(".test").text(tests[number].variants)
})
