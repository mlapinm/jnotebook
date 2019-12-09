function CalcMark(){
    forms = document.querySelectorAll( '.answers' );
    cnt_form = forms.length;
    res = "";
    for(num_form=0; num_form<cnt_form; num_form++){
        form =forms[num_form];
        sel_input = form.querySelector('input:checked');
        if( sel_input ){
            res += form.name + ":" + sel_input.value + ";";
        } else {
            res += form.name + ":0;";
        } 
     }
    document.formrez.test_res.value=res;
  }
