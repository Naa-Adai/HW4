$(function(){
    $("#firstNum_error").hide();
    $("#secondNum_error").hide();
    $("#thirdNum_error").hide();
    $("#forthNum_error").hide();
    
    var firstNum_error = false;
    var secondNum_error = false;
    var thirdNum_error = false;
    var forthNum_error = false;
    
    $("#firstNum").focusout(function(){
        check_firstNum();
    });
    $("#secondNum").focusout(function(){
        check_secondNum();
    });
    $("#thirdNum").focusout(function(){
        check_thirdNum();
    });
    $("#forthNum").focusout(function(){
        check_forthNum();
    });

function check_firstNum(){
    var firstNum = $("#firstNum").val();
    if($.isNumeric(firstNum) == true && firstNum !== '' && firstNum > -50 && firstNum < 50){
        $("firstNum_error").hide();
        $("#firstNum").css("border-bottom","2px solid #34F458");
    }else if ($.isNumeric(firstNum) == false || firstNum == '') {
        $("firstNum_error").html("Invalid Input! Enter only Numbers");
        $("firstNum_error").show();
        $("#firstNum").css("border-bottom","2px solid #F90A0A");
        firstNum_error = true;
    } else if(firstNum < -50 || firstNum > 50){
         $("firstNum_error").html("Error! Number must between -50 and 50");
        $("firstNum_error").show();
        $("#firstNum").css("border-bottom","2px solid #F90A0A");
        firstNum_error = true;
    }
}

function check_secondNum(){
    var secondNum = $("#secondNum").val();
    if($.isNumeric(secondNum) == true && secondNum !== '' && secondNum > -50 && secondNum < 50){
        $("secondNum_error").hide();
        $("#secondNum").css("border-bottom","2px solid #34F458");
    }else if ($.isNumeric(secondNum) == false || secondNum == '') {
        $("secondNum_error").html("Invalid Input! Enter only Numbers");
        $("secondNum_error").show();
        $("#secondNum").css("border-bottom","2px solid #F90A0A");
        secondNum_error = true;
    } else if(secondNum < -50 || secondNum > 50){
        $("secondNum_error").html("Error! Number must between -50 and 50");
        $("secondNum_error").show();
        $("#secondNum").css("border-bottom","2px solid #F90A0A");
        secondNum_error = true;
    }else if(secondNum < firstNum){
        $("secondNum_error").html("Error! Number must between greater than Starting Vertical Number");
        $("secondNum_error").show();
        $("#secondNum").css("border-bottom","2px solid #F90A0A");
        secondNum_error = true;
    }
}

function check_thirdNum(){
    var thirdNum = $("#thirdNum").val();
    if($.isNumeric(thirdNum) == true && thirdNum !== '' && thirdNum > -50 && thirdNum < 50){
        $("thirdNum_error").hide();
        $("#thirdNum").css("border-bottom","2px solid #34F458");
    }else if ($.isNumeric(thirdNum) ==false || thirdNum == '') {
        $("thirdNum_error").html("Invalid Input! Enter only Numbers");
        $("thirdNum_error").show();
        $("#thirdNum").css("border-bottom","2px solid #F90A0A");
        thirdNum_error = true;
    } else if(thirdNum < -50 || thirdNum > 50){
         $("thirdNum_error").html("Error! Number must between -50 and 50");
        $("thirdNum_error").show();
        $("#thirdNum").css("border-bottom","2px solid #F90A0A");
        thirdNum_error = true;
    }
}

function check_forthNum(){
    var forthNum = $("#forthNum").val();
    if($.isNumeric(forthNum) == true && forthNum !== '' && forthNum > -50 && forthNum < 50){
        $("forthNum_error").hide();
        $("#forthNum").css("border-bottom","2px solid #34F458");
    }else if ($.isNumeric(forthNum) == false || forthNum == '') {
        $("forthNum_error").html("Invalid Input! Enter only Numbers");
        $("forthNum_error").show();
        $("#forthNum").css("border-bottom","2px solid #F90A0A");
        forthNum_error = true;
    } else if(forthNum < -50 || forthNum > 50 || ){
        $("forthNum_error").html("Error! Number must between -50 and 50");
        $("forthNum_error").show();
        $("#forthNum").css("border-bottom","2px solid #F90A0A");
        forthNum_error = true;
    }else if(forthNum < thirdNum){
        $("forthNum_error").html("Error! Number must between greater than Starting Horizontal Number");
        $("forthNum_error").show();
        $("#forthNum").css("border-bottom","2px solid #F90A0A");
        forthNum_error = true;
    }
}



$("#multiply").submit(function(){
    firstNum_error = false;
    secondNum_error = false;
    thirdNum_error = false;
    forthNum_error = false;
    
    var table = "";
    
    check_firstNum();
    check_secondNum();
    check_thirdNum();
    check_forthNum();
    
    
    if(firstNum_error === false && secondNum_error === false && thirdNum_error === false && forthNum_error === false){
    alert("Registration Successfull");
    /*for(var i = firstNum-1; i <= secondNum; i++){
    table += "<tr>";
    for(var j = thirdNum; j <= forthNum; j++){
        if(i== firstNum-1 && j == thirdNum){
            table += "<th>x</th>";
        }
        if(i==firstNum-1){
            table += "<th>" + j + "</th>";
        } else if (j == thirdNum){
            table += "<th>" + i   + "</th>";
        }else if(j == forthNum){
            table += "<td>" + i * (j-1) + "</td>";
            table += "<td>" + i * j + "</td>";
        }else{
        table += "<td>" + i * (j-1) + "</td>";
        }
    }
    table += "</tr>";
}
  
    $("#output").prepend(table);*/
    return true;
    
    }else{
        alert("Incorrect Input!!! Please refill")
        return false;
    }
    });
});

