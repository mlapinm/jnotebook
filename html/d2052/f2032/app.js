$(()=>{
 
let tests = [
  {
    "number": "1",
    "type": "drop",
    "asks": [
      "q1",
      "q1"
    ],
    "responses": [
      [
        "s11",
        "s21"
      ],
      [
        "s12",
        "s22"
      ],
      [
        "s13",
        "s23"
      ]
    ],
    "variants": [
      [
        "s12",
        "s13",
        "s11"
      ],
      [
        "s21",
        "s23",
        "s22"
      ]
    ]
  },
  {
    "number": "1",
    "type": "drop",
    "asks": [
      "q1",
      "q1"
    ],
    "responses": [
      [
        "s11",
        "s21"
      ],
      [
        "s12",
        "s22"
      ],
      [
        "s13",
        "s23"
      ]
    ],
    "variants": [
      [
        "s12",
        "s13",
        "s11"
      ],
      [
        "s21",
        "s23",
        "s252"
      ]
    ]
  }
]
class RoundSimple{
  
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
      const div1 = $("<div></div>")

      const div11 = $("<div>"+ text +"</div>")
      div11.addClass("request")
      div11.addClass("rounded")
      div11.appendTo(div1)

      const div12 = $("<div>11</div>")
      div12.addClass("request")
      div12.addClass("rounded")
      div12.appendTo(div1)


      div1.appendTo(".container1")
      div11.click((e)=>{
        if($(e.target).hasClass("selected")){
          $(e.target).removeClass("selected")
        }else{
          $(e.target).addClass("selected")
        }
      })
    }


  }
  
}

class RoundDrop{
  
  constructor(test){
    this.test = test
  }
  
  show(){
    $(".test").text(this.test.variants[0])

    for (var name in this.test.asks){
      var text = this.test.asks[name]
      $("<p>"+ text +"</p>").appendTo(".container1")
    }

    const select1 = $("<select></select>")
    select1.addClass("select1")
    for (var name in this.test.variants[0]){
      var text = this.test.variants[0][name]
      const div1 = $("<div></div>")

      const div11 = $("<div>"+ text +"</div>")
      div11.addClass("request")
      div11.addClass("rounded")
      div11.appendTo(div1)

      const div12 = $("<div>11</div>")
      const textOption = this.test.variants[1][name]
      const options = $("<option>"+textOption+"<option>")
      options.appendTo(select1)
      div12.addClass("responce")
      div12.addClass("rounded")
      // div12.appendTo(div1)

      select1.appendTo(div1)
      const divEmpty = $("<div style='clear:both'></div>")
      divEmpty.appendTo(div1)


      div1.appendTo(".container1")
      div11.click((e)=>{
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
let round = null  
if(tests[number].type == 'simple'){
  round = new RoundSimple(tests[number])  
} else if(tests[number].type == 'drop'){
  round = new RoundDrop(tests[number])  
}

round.show()  
$(".container1").addClass("rounded")

$(".next").click(()=>{
  $(".container1").children().remove()

  if(number<numberMax){
    number+=1
  }
  $("#h4").text("" + (number+1))

  if(tests[number].type == 'simple'){
    round = new RoundSimple(tests[number])  
  } else if(tests[number].type == 'drop'){
    round = new RoundDrop(tests[number])  
  }

  round.show()  
  $(".result").text("Result: ")
})  

$(".previouse").click(()=>{
  $(".container1").children().remove()

  if(number > 0){
    number-=1
  }
  $("#h4").text("" + (number+1))
  if(tests[number].type == 'simple'){
    round = new RoundSimple(tests[number])  
  } else if(tests[number].type == 'drop'){
    round = new RoundDrop(tests[number])  
  }
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
// $(".test").text(tests[number].variants)
})
