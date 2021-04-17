function show_hide_password(target)
{
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

function swap() 
{
    var picture = document.getElementById('sign_swap');
    if (picture.src.indexOf('includes/img/sign-ip-downtext-img.png') > -1) {
        picture.src = 'includes/img/Ellipse 31.png';
    } else {
        picture.src = 'includes/img/sign-ip-downtext-img.png';
    }
}

function swap_password() 
{
    var picture = document.getElementById('sign_swap_password');
    if (picture.src.indexOf('includes/img/eye.png') > -1) {
        picture.src = 'includes/img/hide 1.png';
    } else {
        picture.src = 'includes/img/eye.png';
    }
}

function swap_downbtn1()
{
    var picture = document.getElementById('swap_downbtn_id1');
    if (picture.src.indexOf('includes/img/chekmark1.png') > -1) {
        picture.src = 'includes/img/chekmark2.png';
    } else {
        picture.src = 'includes/img/chekmark1.png';
    }
}

function downbtn1() 
{
    var x = document.getElementById("downbtn_visible1");
    if (x.className === "landing-middle-answers-downbtn") {
        x.className += " visible";
    } else {
        x.className = "landing-middle-answers-downbtn";
    }
}

function swap_downbtn2()
{
    var picture = document.getElementById('swap_downbtn_id2');
    if (picture.src.indexOf('includes/img/chekmark1.png') > -1) {
        picture.src = 'includes/img/chekmark2.png';
    } else {
        picture.src = 'includes/img/chekmark1.png';
    }
}

function downbtn2() 
{
    var x = document.getElementById("downbtn_visible2");
    if (x.className === "landing-middle-answers-downbtn") {
        x.className += " visible";
    } else {
        x.className = "landing-middle-answers-downbtn";
    }
}

function swap_downbtn3()
{
    var picture = document.getElementById('swap_downbtn_id3');
    if (picture.src.indexOf('includes/img/chekmark1.png') > -1) {
        picture.src = 'includes/img/chekmark2.png';
    } else {
        picture.src = 'includes/img/chekmark1.png';
    }
}

function downbtn3() 
{
    var x = document.getElementById("downbtn_visible3");
    if (x.className === "landing-middle-answers-downbtn") {
        x.className += " visible";
    } else {
        x.className = "landing-middle-answers-downbtn";
    }
}

function swap_downbtn4()
{
    var picture = document.getElementById('swap_downbtn_id4');
    if (picture.src.indexOf('includes/img/chekmark1.png') > -1) {
        picture.src = 'includes/img/chekmark2.png';
    } else {
        picture.src = 'includes/img/chekmark1.png';
    }
}

function downbtn4() 
{
    var x = document.getElementById("downbtn_visible4");
    if (x.className === "landing-middle-answers-downbtn") {
        x.className += " visible";
    } else {
        x.className = "landing-middle-answers-downbtn";
    }
}

function responsive_bar() 
{
    var x = document.getElementById("auth_responsive");
    if (x.className === "header-auth-links-container") {
        x.className += " responsive";
    } else {
        x.className = "header-auth-links-container";
    }
}

