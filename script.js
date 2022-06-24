var hms=document.getElementById("h_m_s");

setInterval(function(){
	var date= new Date();

	let h=date.getHours();
	let m=date.getMinutes();
	let s=date.getSeconds();

	let am_pm="AM";

	if(h>12){
		am_pm="PM";
		h=h%12;
	}

	if(h<10)
		h="0" + h;
	if(m<10)
		m="0" + m;
	if(s<10)
		s="0" + s;

		hms.innerHTML = h+":"+m+":"+s+" "+am_pm;
},1000);
