function up_button()
{
	text = document.getElementById("counter")
	var val = parseInt(text.innerHTML)
	val++
	text.innerHTML = val;
}

function down_button()
{
	text = document.getElementById("counter")
	var val = parseInt(text.innerHTML)
	val--
	text.innerHTML = val;
}

document.getElementById("up").onclick = up_button
document.getElementById("down").onclick = down_button

