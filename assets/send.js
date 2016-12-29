$(document).ready(function(){

    $('form').on('submit',function(){
      var inp = $("form #username");
      var inputValue = {RegistrationNumber:inp.val()};
      var inp2 = $("form #password");
      $.ajax({
        type:'POST',
        url:'/login',
        data:inputValue,
        success:function(data){
          //do something via frontend framework
          location.reload();
        }
      });
    })
  
});
