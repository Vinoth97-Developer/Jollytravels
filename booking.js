let checkValid = false;
let pickupValid = false;
let dropValid = false;
let seatValid = false;
let timeValid = false;
let nameValid = false;
let ageValid = false;
let genderValid = false;
let idValid = false;
let idnoValid = false;
let numberValid = false;
let otpValid = false;

// Getting Value...

let seats = document.getElementsByName("check");
let pickup = document.getElementById("pickup");
let drop = document.getElementById("drop");
let seatno = document.getElementById("seatno");
let time = document.getElementById("time");
let passname = document.getElementById("passname");
let age = document.getElementById("age");
let gender = document.getElementsByName("gender")
let idproof = document.getElementById("idproof");
let idnumber = document.getElementById("idnumber");
let number = document.getElementById("number");
let otp = document.getElementById("otp");


// Checkbox Validation  //

let getSeatValue = () => {
    let checkedValue = [];

    for (let i = 0; i < seats.length; i++) {
        if (seats[i].checked) {
            checkedValue.push(seats[i].value);
        }
    }
    return checkedValue;
};

let handleCheckbox = () => {
   
    let seats = getSeatValue();
    if (seats.length > 0) {
        checkValid = true;
    }
    else {
        alert("Please Choose Seat" )
    }
}

//  Pickup Validation //

let handlePickup = () => {
    if (pickup.value == "") {
        document.getElementById('pickError').innerHTML = "please select pickup point"
    }
    else {

        pickupValid = true;
        document.getElementById('pickError').innerHTML = ""
    }
};

//  Drop Validation //

let handleDrop = () => {
    if (drop.value == "") {
        document.getElementById('dropError').innerHTML = "please select drop point"
    }
    else {
        dropValid = true;
        document.getElementById('dropError').innerHTML = ""
    }
}

// Seat Validation //

let handleSeat = () => {
    if (seatno.value == "") {
        document.getElementById('seatError').innerHTML = "Enter Seat Number"
    }
    else {
        seatValid = true;
        document.getElementById('seatError').innerHTML = "";
        
    }
};

// Time Validation //
let handleTime = () => {
    if (time.value == "") {
        document.getElementById('dateError').innerHTML = "Choose Date And Time"
    }
    else {
        timeValid = true;
        document.getElementById('dateError').innerHTML = ""
    }
};

//  Name Validation //

let handleName = () => {
    if (passname.value == "") {

        document.getElementById('nameError').innerHTML = "Please Enter Passenger Name"
    }
    else {
        nameValid = true;
        document.getElementById('nameError').innerHTML = ""
    }
};

// Age Validation //
let handleAge = () => {
    if (age.value == "") {
        document.getElementById('ageError').innerHTML = "Please Enter Age"
    }

    else {
        ageValid = true;
        document.getElementById('ageError').innerHTML = ""

    }
};

//  Gender Validation //

let handleGender = () => {
    if (gender[0].checked) {
        return gender[0].value
    } else if (gender[1].checked) {
        return gender[1].value;
    } else {
        return "";
    }
};
let genderValidation = () => {
    let gender = handleGender();
    if (gender !== "") {
        genderValid = true;
    } else {
        alert("Choose a Gender")
    }
};

//  Id Validation //

let handleId = () => {

    if (idproof.value == "") {
        document.getElementById('proofError').innerHTML = "Please Choose Id Proof"
    }
    else {
        idValid = true;
        document.getElementById('proofError').innerHTML = ""
    }

};

// Id Number Validation //

let handleIdno = () => {
    if (idnumber.value == "") {
        document.getElementById('idnoError').innerHTML = "please Enter ID Number"
    }

    else {
        idnoValid = true;
        document.getElementById('idnoError').innerHTML = ""
    }
};

//  Number Validation //

let handleNumber = () => {
    if (number.value == "") {
        document.getElementById('phoneError').innerHTML = "Enter Phone Number"
    }
    else if (number.value.length > 10) {
        document.getElementById('phoneError').innerHTML = "please Enter Valid Number"
    }
    else {
        numberValid = true;
        document.getElementById('phoneError').innerHTML = ""

    }

};

//  OTP Validation //

let handleOtp = () => {
    if (otp.value == "") {
        document.getElementById('otpError').innerHTML = "Enter 4 Digit OTP"
    }
    else {
        otpValid = true;
        document.getElementById('otpError').innerHTML = ""
    }
};

let handleSubmit = () => {
    event.preventDefault();
    handleCheckbox();
    handlePickup();
    handleDrop();
    handleSeat();
    handleTime();
    handleName();
    handleAge();
    handleGender();
    handleId();
    handleIdno();
    handleNumber();
    handleOtp();


    let details = {
        check: check.value,
        pickup: pickup.value,
        drop: drop.value,
        seatno: seatno.value,
        time: time.value,
        passname: passname.value,
        age: age.value,
        gender: gender.value,
        idproof: idproof.value,
        idnumber: idnumber.value,
        number: number.value,
        otp: otp.value,
    };
    
    if (checkValid && pickupValid && dropValid && seatValid && timeValid && nameValid && ageValid && genderValid && idValid && idnoValid && numberValid && otpValid) {
        window.location = "./ticketconfirm.html";}
    else {
        alert("please choose seat And Fill All Deatails")

    }

}















































































































