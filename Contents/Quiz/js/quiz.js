

//-----------------------------------------------------
// Quiz Game
//-----------------------------------------------------



//Variables Diclaration
var SignUpGame,
q1selectAns,q2selectAns,q3selectAns,q4selectAns,q5selectAns,q6selectAns,
q7selectAns,q8selectAns,q9selectAns,q10selectAns,
Value1,Value2,Value3,Value4,Value5,
Value6,Value7,Value8,Value9,Value10;

//firt Tab signUp button Event
  SignUpGame =document.getElementById('SignUppGame');

  SignUpGame.addEventListener('click',function () {
    if ($('#name').val() =="") {
      alert("Please enter name");
      document.gameform.name.focus();
      return;
    }
    else if ($('#email').val() =="") {
      alert("Please enter email address");
      document.gameform.email.focus();
      return;
    }
    else if ($('#email').val() !="") {
      if(ValidateEmail($('#email').val())==true);
      else{
        alert("You have entered an invalid email address!");
        document.gameform.email.focus();
        return
      }
    }

  document.querySelector('.tab1').style.display = 'none';
  document.querySelector('.tab2').style.display = 'block';
  document.querySelector('.tab2').style.animation = 'slide-down .4s ease-out';
  });

  //Start Fuction to validate email address
  function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailformat))
      return true;
    else
      return false;
  }
  //End Fuction to validate email address

//Second tab 1st Question
  q1selectAns = document.querySelectorAll('.q1');
  for (var i =0; i<q1selectAns.length; i++) {
    q1selectAns[i].addEventListener('change', function(){
     Value1 = $("input[name='q1']:checked").val();
   // totalScore = totalScore + $("input[name='q1']:checked").val();
  //   totalScore = radioValue + totalScore;
     Value1 = Math.floor(Value1);
     console.log(Value1);
    document.querySelector('.tab2').style.display = 'none';
    document.querySelector('.tab3').style.display = 'block';
    document.querySelector('.tab3').style.animation = 'slide-down .4s ease-out';
    });
  }

//Third tab 2nd Question
  q2selectAns = document.querySelectorAll('.q2');
  for (var i =0; i<q2selectAns.length; i++) {
    q2selectAns[i].addEventListener('change', function(){
     Value2 = $("input[name='q2']:checked").val();
     Value2 = Math.floor(Value2);
    console.log(Value2);
    document.querySelector('.tab3').style.display = 'none';
    document.querySelector('.tab4').style.display = 'block';
    document.querySelector('.tab4').style.animation = 'slide-down .4s ease-out';
    });
  }


//Fourth tab 3rd Question
  q3selectAns = document.querySelectorAll('.q3');
  for (var i =0; i<q3selectAns.length; i++) {
    q3selectAns[i].addEventListener('change', function(){
     Value3 = $("input[name='q3']:checked").val();
     Value3 = Math.floor(Value3);
     console.log(Value3);
    document.querySelector('.tab4').style.display = 'none';
    document.querySelector('.tab5').style.display = 'block';
    document.querySelector('.tab5').style.animation = 'slide-down .4s ease-out';
    });
  }

//Fifth tab 4th Question
  q4selectAns = document.querySelectorAll('.q4');
  for (var i =0; i<q4selectAns.length; i++) {
    q4selectAns[i].addEventListener('change', function(){
    Value4 = $("input[name='q4']:checked").val();
     Value4 = Math.floor(Value4);
     console.log(Value4);
    document.querySelector('.tab5').style.display = 'none';
    document.querySelector('.tab6').style.display = 'block';
    document.querySelector('.tab6').style.animation = 'slide-down .4s ease-out';
    });
  }

  //6th tab ... 5th Question
  q5selectAns = document.querySelectorAll('.q5');
  for (var i =0; i<q5selectAns.length; i++) {
    q5selectAns[i].addEventListener('change', function(){
    Value5 = $("input[name='q5']:checked").val();
     Value5 = Math.floor(Value5);
     console.log(Value5);
    document.querySelector('.tab6').style.display = 'none';
    document.querySelector('.tab7').style.display = 'block';
    document.querySelector('.tab7').style.animation = 'slide-down .4s ease-out';
    });
  }

   //7th tab ... 6th Question
  q6selectAns = document.querySelectorAll('.q6');
  for (var i =0; i<q6selectAns.length; i++) {
    q6selectAns[i].addEventListener('change', function(){
    Value6 = $("input[name='q6']:checked").val();
     Value6 = Math.floor(Value6);
     console.log(Value6);
    document.querySelector('.tab7').style.display = 'none';
    document.querySelector('.tab8').style.display = 'block';
    document.querySelector('.tab8').style.animation = 'slide-down .4s ease-out';
    });
  }



 //8th tab ... 7th Question
  q7selectAns = document.querySelectorAll('.q7');
  for (var i =0; i<q7selectAns.length; i++) {
    q7selectAns[i].addEventListener('change', function(){
    Value7 = $("input[name='q7']:checked").val();
     Value7 = Math.floor(Value7);
     console.log(Value7);
    document.querySelector('.tab8').style.display = 'none';
    document.querySelector('.tab9').style.display = 'block';
    document.querySelector('.tab9').style.animation = 'slide-down .4s ease-out';
    });
  }


 //9th tab ... 8th Question
  q8selectAns = document.querySelectorAll('.q8');
  for (var i =0; i<q8selectAns.length; i++) {
    q8selectAns[i].addEventListener('change', function(){
    Value8 = $("input[name='q8']:checked").val();
     Value8 = Math.floor(Value8);
     console.log(Value8);
    document.querySelector('.tab9').style.display = 'none';
    document.querySelector('.tab10').style.display = 'block';
    document.querySelector('.tab10').style.animation = 'slide-down .4s ease-out';
    });
  }

 //10th tab ... 9th Question
  q9selectAns = document.querySelectorAll('.q9');
  for (var i =0; i<q9selectAns.length; i++) {
    q9selectAns[i].addEventListener('change', function(){
    Value9 = $("input[name='q9']:checked").val();
     Value9 = Math.floor(Value9);
     console.log(Value9);
    document.querySelector('.tab10').style.display = 'none';
    document.querySelector('.tab11').style.display = 'block';
    document.querySelector('.tab11').style.animation = 'slide-down .4s ease-out';
    });
  }



    q10selectAns = document.querySelectorAll('.q10');
    for (var i =0; i<q10selectAns.length; i++) {
    q10selectAns[i].addEventListener('change', function(){
    Value10 = $("input[name='q10']:checked").val();
    Value10 = Math.floor(Value10);
    document.querySelector('.tab11').style.display = 'none';
    document.getElementById('gameform').style.display = 'none';

    //Calculate Score

    var totalScore = Value1 + Value2 + Value3 + Value4 + Value5 + Value6 + Value7 + Value8 + Value9 + Value10;
    console.log(totalScore);

    //Show Result Base on some condition

    if (totalScore >= 10 && totalScore <=17) {
    document.querySelector('#Res1').style.display = 'block';
    document.querySelector('#Res1').style.animation = 'slide-down .4s ease-out';
    document.querySelector('.result').value = 'Got Result 1';
    }

   else if (totalScore >= 18 && totalScore <= 24) {
    document.querySelector('#Res2').style.display = 'block';
    document.querySelector('#Res2').style.animation = 'slide-down .4s ease-out';
    document.querySelector('.result').value = 'Got Result 2';
    }

   else if (totalScore >= 25 && totalScore <= 32) {
    document.querySelector('#Res3').style.display = 'block';
    document.querySelector('#Res3').style.animation = 'slide-down .4s ease-out';
    document.querySelector('.result').value = 'Got Result 3';
    }


     else {
     document.querySelector('#Res4').style.display = 'block';
     document.querySelector('#Res4').style.animation = 'slide-down .4s ease-out';
     document.querySelector('.result').value = 'Got Result 4';
     }

//alert(totalScore);
   //document.querySelector('.showScore').innerText = 'You Scored : ' + totalScore;
    document.querySelector('.score').value = totalScore;
    if (i == 4) {
                    formdata = $("#gameform").serialize();
                    $.ajax({
                    type:'POST',
                    url:'https://poundland.pk/AppsImpData/game.php',
                    data:formdata,
                    
                               success:function (response) {
                               $('#success').html(response);
                               }
                    });

                    setTimeout(function() {
                        location.href = 'index.html';
                    }, 15000);
                }
  
    });
    }

