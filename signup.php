	
	<?

		include "header.php";

	?>

	<style type="text/css">

		.footer-container
		{
			position: absolute;
			bottom: 0px;
		}

		.header-auth
		{
			display: none;
		}

		@media screen and (max-width: 750px)
		{
			.footer-container
			{
				position: relative;
			}
		}

	</style>

	

	<title>AICAP - Регистрация</title>

	<img class="balls-group landing-balls-top right ingore" src="includes/img/sign-balls.png">

	<div class="title center top-two-em">Sign Up</div>

	<div class="form-container">

		<div class="input-container">
			<input class="input" type="" name="" placeholder="Name">
		</div>

		<div class="input-container">
			<input class="input" type="" name="" placeholder="E-mail">
		</div>

		<div class="input-container">
			<input class="input" id="password-input" name="" placeholder="Password" type="password">
			<a onclick="return show_hide_password(this);">
				<img class="input-eye right" src="includes/img/hide 1.png" id="sign_swap_password" onclick="swap_password();">
			</a>
		</div>

		<div class="input-downtext left sign-up-downtext">
			<img onclick="swap(); "src="includes/img/Ellipse 31.png" id="sign_swap" class="sign-up-downtext-img">
			Accept <a class="sign-up-downtext-tc"> Terms & Conditions</a>
		</div>

		<div class="center sign-btn">Sign Up</div>

		<div class="center sign-in-downer">
			<div class="sign-in-downer-btns">
				<div class="sign-in-downer-text left">or Sign Up with</div>
				<img class="sign-in-downer-btn left" src="includes/img/sign-btns-google.png">
				<img class="sign-in-downer-btn left" src="includes/img/sign-btns-facebook.png">
				<img class="sign-in-downer-btn left" src="includes/img/sign-btns-vk.png">
			</div>
		</div>
	</div>

	<img class="balls-group sign-balls-bottom sign-balls ingore" src="includes/img/sign-balls.png">

	

	<?

		include "footer.php";

	?>