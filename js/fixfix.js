(function() {

	function showTime(currentTime) {

		var timeToShow;

		if (!currentTime) {
			currentTime = new Date();
		}
		timeToShow = ( currentTime.getHours() + ':' );
		
		if (currentTime.getHours() < 10){
			timeToShow = "0" + timeToShow;
		}
		if (currentTime.getMinutes() < 10) {
			timeToShow += "0";
		}
		timeToShow += currentTime.getMinutes();

		elMainTime.textContent = timeToShow;
		
	}


	/* function setRightTime(timeDifference) {

		var MLSEC_PER_HOUR = 3600000;
		var currentTime = new Date();
		
		currentTime.setTime(currentTime.getTime()+timeDifference*MLSEC_PER_HOUR);
	} */


	function changeButtonClass(elButton) {
		
		var elButtonClass;

		if ( elButton.hasAttribute('class') ) {
			elButtonClass = elButton.getAttribute('class');
			if (elButtonClass == 'buttonIsPressed') {
				elButton.setAttribute('class', 'buttonIsNotPressed');
			}
			else {
				elButton.setAttribute('class', 'buttonIsPressed');
			}
		}
		
	}
	
			
			

	function pressingButton(e, timeDifference) {

		var MLSEC_PER_MINUTS = 60000;
		var currentTime;
		var elButton, elButtonClass;
		var timeDiffMn = timeDifference;
		var timeDiffMs;
		
		if (timerId) {
			clearInterval(timerId);
		}
		
		elButton = e.target||window.event.srcElement;
		changeButtonClass(elButton);

		
		if (elButton.getAttribute('class') == "buttonIsNotPressed") {
			quaPressedButton -= 1;
			timerId = setInterval( function() {
				currentTime = new Date();
				showTime(currentTime);
			}, 100 );
		} else {
			quaPressedButton += 1;
			timerId = setInterval ( function() {
				currentTime = new Date();
				timeDiffMs = (currentTime.getTimezoneOffset() + timeDiffMn) * MLSEC_PER_MINUTS;
				currentTime.setTime(currentTime.getTime() + timeDiffMs);
				showTime(currentTime);
			}, 100 );
		}
		if (quaPressedButton < 2) {
			return;
		}
		elButton == elMoscowTime ? changeButtonClass(elWorldTime) : changeButtonClass(elMoscowTime);
		quaPressedButton -= 1;
	}

	var elMainTime = document.getElementById("maintime");
	var elMoscowTime = document.getElementById('moscowTime');
	var elWorldTime = document.getElementById('worldTime');
	var quaPressedButton = 0;
	var timerId;
	
	window.addEventListener( "load", function() {
		timerId = setInterval( showTime, 100 );
		} );
	elMoscowTime.addEventListener( "click", function(e) {pressingButton(e, 180)} );
	elWorldTime.addEventListener( "click", function(e) {pressingButton(e, 0)} );
}());





/* function sumArgs() {
	return [].reduce.call(arguments, function(a, b) {
		return a + b;
	});
}
alert( sumArgs(1, 2, 3, 9, 10, -20) ); */


/* function work(a) {
 alert ( 'Я работаю : ' + a  );
}

function makeLogging(f, log) {
	
	 function wrapper(a) {
		log.push(a);
		return f.call(this, a);
	}
	return wrapper;
}
var log = [];
work = makeLogging(work, log);

work(1);
work(5);
for (i = 0; i < log.length; i++) {
 alert( 'Лог:' + log[i] );
}
 */


























