// 1.I need to pull the document.getelementbyid. for the html
// 2. research the clock


function whatTime() {
	
			//console.log("Hello")
			var today = new Date();
			var h = today.getHours();
			var m  =today.getMinutes();
			var s  = today.getSeconds();
			h=checkTime(h);
			m=checkTime(m);
			s=checkTime(s);

			function checkTime (i)
			 {
			if (i < 10) {i = "0" + i;};
			return i;

}
			 
			  document.getElementById('txt').innerHTML = "#" + h  + m  + s;
			 document.getElementById("txt").style.backgroundColor = ("#"+h+m+s)

			 // var color= "#hms"
			 // document.getElementById("mainbox").style.backgroundColor = "#"h+m+s;

			 // document.getElementById("mainbox").style.backgroundColor = [color];
		}
			var interval = window.setInterval(whatTime,1000); 
			





whatTime ();