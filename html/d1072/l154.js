$(function() {

  // $('#id01').prepend('<h3>prepend</h3>')
  // $('#id01').append('<h3>append</h3>')

  // $('#id01, .chosen').addClass('highlight')

  //contais
  // $('li:contains("Three")').addClass('highlight')

  //next, previous
  // $('li:contains("Three")').prev().addClass('highlight')
  // $('li:contains("Three")').next().addClass('highlight')

  //siblings, parent
  // $('li:contains("Three")').parent().addClass('highlight')

  // $('li:contains("Three")').siblings().addClass('highlight')
 
  // $('li:nth-child(1)').addClass('highlight')

  // $('p[name="mySecondPara"]').addClass('highlight')

  // $('p[name!="mySecondPara"]').addClass('highlight')
 
  $('p').not('[name]').addClass('highlight')

});







