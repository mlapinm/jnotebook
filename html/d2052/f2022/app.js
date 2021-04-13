


$(()=>{

  
  let tests = []
  let url = "m01.json"
  $.getJSON(url, function(data) {
    data.forEach(element => {
      
      tests.push(element)
    });
  }).then(()=>{
  



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
  testing(){
    let appropriate = true
    let items = Array.from($(".selected"))
    let selects = [] 
    $(".selected").each((i,e)=>{
      selects.push($(e).text())
    })    
    selects.sort() 
    let responses = tests[number].responses
    responses.sort()
    // responses.pop() 
    appropriate = selects.toString() === responses.toString() 
   
    return appropriate
  }
  
}

class RoundInput{

  input = null
  constructor(test){
    this.test = test
  }
  
  show(){
    for (var name in this.test.asks){
      var text = this.test.asks[name]
      $("<p>"+ text +"</p>").appendTo(".container1")
    }

  this.input = $("<input type='text' size='40'>")  
  this.input.appendTo(".container1")

  }
  testing(){
    let appropriate = true
    let text = this.input.val()
    appropriate = this.test.responses.find((e, i) => {
      return e == text
    })? true : false

    return appropriate
  }
}

class RoundOrdered{
  asks = []
  selects = []
  propers = []

  input = null
  
  constructor(test){
    this.test = test
  }
  
  show(){
    $(".test").text(this.test.variants[0])

    for (var name in this.test.asks){
      var text = this.test.asks[name]
      $("<p>"+ text +"</p>").appendTo(".container1")
    }
  
    for (var o in this.test.variants[1]){
      const select1 = $("<select></select>")
      select1.addClass("select1")
      for (var o in this.test.variants){
        const textOption = this.test.variants[o]
        const option = $("<option>"+textOption+"</option>")
        option.appendTo(select1)
      }
      this.selects.push(select1)
    }

   let k = 0;
    for (var name in this.test.variants){
      var text = this.test.variants[name]
      this.asks.push(text)
      const div1 = $("<div></div>")

      const div11 = $("<div>"+ text +"</div>")
      div11.addClass("request_drop")
      div11.addClass("rounded")
      // div11.appendTo(div1)


      this.selects[k].appendTo(div1)

      const div12 = $("<div>_</div>")
      div12.addClass("proper")
      div12.addClass("rounded")
      // div12.appendTo(div1)
      this.propers.push(div12)

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
      k += 1
    }
    //onsubmit()

  }
  testing(){
    let appropriate = true

    var len = this.selects.length

    let selectVals = []
    this.selects.forEach((select) => {
      let val = $(select).val()
      selectVals.push(val)
    })

    appropriate = 
      this.test.responses.toString() == selectVals.toString()
    return appropriate

  }
}

class RoundDrop{
  asks = []
  selects = []
  propers = []
  
  constructor(test){
    this.test = test
  }
  
  show(){
    $(".test").text(this.test.variants[0])

    for (var name in this.test.asks){
      var text = this.test.asks[name]
      $("<p>"+ text +"</p>").appendTo(".container1")
    }
  
    for (var o in this.test.variants[1]){
      const select1 = $("<select></select>")
      select1.addClass("select1")
      for (var o in this.test.variants[1]){
        const textOption = this.test.variants[1][o]
        const option = $("<option>"+textOption+"</option>")
        option.appendTo(select1)
      }
      this.selects.push(select1)
    }

   let k = 0;
    for (var name in this.test.variants[0]){
      var text = this.test.variants[0][name]
      this.asks.push(text)
      const div1 = $("<div></div>")

      const div11 = $("<div>"+ text +"</div>")
      div11.addClass("request_drop")
      div11.addClass("rounded")
      div11.appendTo(div1)


      this.selects[k].appendTo(div1)

      const div12 = $("<div>_</div>")
      div12.addClass("proper")
      div12.addClass("rounded")
      div12.appendTo(div1)
      this.propers.push(div12)

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
      k += 1
    }
    //onsubmit()
  }

  testing(){
    let appropriate = true

    var len = this.selects.length

    let selectVals = []
    this.selects.forEach((select) => {
      let val = $(select).val()
      selectVals.push(val)
    })

    for( let i = 0 ; i < len ; i++){
      let ask = this.asks[i]
      let resp = selectVals[i] 
      // console.log(ask, resp, this.test.responses)

      let res = this.test.responses.find((e, i) => {
        let ret = e[0] == ask && e[1] == resp
         return ret
      })

      if(res){
        this.propers[i].text('v')
        this.propers[i].removeClass("red")
      }else{
        this.propers[i].text('x')
        this.propers[i].addClass("red")
      }
    }

    this.propers.forEach((val) => {
      let text = val.text()
      if (text != 'v'){
        appropriate = false;
      }
    })
    return appropriate
  }
}

let number = 0
let numberMax = tests.length-1
let round = null  
if(tests[number].type == 'simple'){
  round = new RoundSimple(tests[number])  
} else if(tests[number].type == 'ordered'){
  round = new RoundOrdered(tests[number])  
} else if(tests[number].type == 'drop'){
  round = new RoundDrop(tests[number])  
}else if(tests[number].type == 'input'){
  round = new RoundInput(tests[number])  
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
  } else if(tests[number].type == 'ordered'){
    round = new RoundOrdered(tests[number])  
  } else if(tests[number].type == 'drop'){
    round = new RoundDrop(tests[number])  
  }else if(tests[number].type == 'input'){
    round = new RoundInput(tests[number])  
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
  } else if(tests[number].type == 'ordered'){
    round = new RoundOrdered(tests[number])  
  } else if(tests[number].type == 'drop'){
    round = new RoundDrop(tests[number])  
  }else if(tests[number].type == 'input'){
  round = new RoundInput(tests[number])  
}
round.show()  
  $(".result").text("Result: ")
})  
  
$(".submit").click(()=>{
  onsubmit()

})  

function onsubmit(){
  let isTrue = round.testing()
  $(".result").text("Result: " + isTrue)
  // console.log(isTrue) 
}


// $(".test").text(tests[number].variants)
})
})
