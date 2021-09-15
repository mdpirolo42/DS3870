var arrEmployees;
$.getJSON("https://www.swollenhippo.com/getEmployeesByAPIKey.php?APIKey=Mickey2021!", function(result){ //load in employee data from API
    console.log(result);
    arrEmployees = result;
    buildEmployeeCard(); //call function to build employee cards
})

function buildEmployeeCard(){
    $.each(arrEmployees,function(i,person){ //itterate following for each employee in dataset
        if(person.FirstName != 'John'){
            let strHTML = '<div class="card col-3 ml-2 mr-2 mt-5">';
            strHTML += '<img src="images/profile.jpg" alt="Profile Picture" style="margin:auto; max-width:100%;">';
            strHTML += '<h3 class="text-center"><a href="mailto:' + person.Email + '">' + person.FirstName + ' ' + person.LastName + '</a></h3>';
            strHTML += '<h4 class="text-center">' + person.Postion +'</h4>';
            strHTML += '<h4 class="mt-3">Profile Details</h4>';
            strHTML += '<p class="txtHourlyRate" data-rate="' + person.HourlyRate + '">Hourly Rate: ' + person.HourlyRate + '</p>';
            strHTML += '<p>Hire Date: ' + person.HireDate + '</p>';
            strHTML += '<h4 class="mt-3">Pay Calculations</h4>';
            strHTML += '<div class="form-group mb-0">';
            strHTML += '<label class="mr-3">Hours Worked</label>';
            strHTML += '<input class="txtHours">';
            strHTML += '</div>';
            strHTML += '<div class="form-group">';
            strHTML += '<label class="mr-3">Total Pay</label>';
            strHTML += '<input class="txtTotalPay" disabled>'; //disable access for user to type in Total Pay box
            strHTML += '<button class="btn btn-primary btn-block btnCalculatePay">Calculate Pay</button>'
            strHTML += '</div>';
            strHTML += '</div>';
            $('#divEmployeeCards').append(strHTML);
        }
        
    });
}

$(document).on('click','.btnCalculatePay',function() { 
    let decHours = $(this).closest('.card').find('.txtHours').val(); 
    let decRate = $(this).closest('.card').find('.txtHourlyRate').attr('data-rate'); //use closest to set decHours and decRate to local card values
    $(this).closest('.card').find('.txtTotalPay').val(decHours*decRate); //display calculated pay in Total Pay box
});



