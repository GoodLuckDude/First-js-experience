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

		$elMainTime.text(timeToShow);
		
	}

	/* function setRightTime(timeDifference) {

		var MLSEC_PER_HOUR = 3600000;
		var currentTime = new Date();
		
		currentTime.setTime(currentTime.getTime()+timeDifference*MLSEC_PER_HOUR);
	} */


	function changeButtonClass($elButton) {
		$elButton.attr('class', 'buttonIsNotPressed');
		$elButton.animate({
			backgroundColor: 'rgba(128, 128, 128, 0)'
		}, 200);
	}
	
			
			

	function pressingButton(e, timeDifference) {

		var MLSEC_PER_MINUTS = 60000;
		var currentTime;
		var elButton;
		var timeDiffMn = timeDifference;
		var timeDiffMs;
		
		if (timerId) {
			clearInterval(timerId);
		}
		
		elButton = e.target||window.event.srcElement;

		
		if (elButton.getAttribute('class') == "buttonIsNotPressed") {
			timerId = setInterval( function() {
				currentTime = new Date();
				showTime(currentTime);
			}, 100 );
		} else {
			timerId = setInterval ( function() {
				currentTime = new Date();
				timeDiffMs = (currentTime.getTimezoneOffset() + timeDiffMn) * MLSEC_PER_MINUTS;
				currentTime.setTime(currentTime.getTime() + timeDiffMs);
				showTime(currentTime);
			}, 100 );
		}

	}

	var $elMainTime = $('#mainTime');
	var elButtonMoscowTime = document.getElementById('buttonMoscowTime');
	var elButtonWorldTime = document.getElementById('buttonWorldTime');
	var elButtonCalcTime = document.getElementById('buttonCalcTime');
	var quaPressedButton = 0;
	var timerId;
	var $elCalcTimePanel = $('#calcTimePanel');
	var $buttons = $(':button');
	var timeZone = new Date().getTimezoneOffset();
	
	var DELAY_OF_ANIMATION = 200;
	
	window.addEventListener( "load", function() {
		timerId = setInterval( showTime, 100 );
		} );

	$buttons.on('mouseover click mouseout', function(e) {
		var $extraButton;
		var $thisButton = $(this);
		
		$thisButton.stop(1,1);
		var buttonClass = this.getAttribute('class');
		if (e.type == 'mouseover') {
			if(buttonClass == 'buttonIsPressed') {
				$thisButton.animate({
					backgroundColor: 'rgba(128, 128, 128, 0.2)'
				}, DELAY_OF_ANIMATION);
				return;
			};
			$thisButton.animate({
				backgroundColor: 'rgba(128, 128, 128, 0.07)'
			}, DELAY_OF_ANIMATION);
		} else if(e.type == 'mouseout') {
				if(this.getAttribute('class') == 'buttonIsPressed') {
					$thisButton.animate({
					backgroundColor: 'rgba(128, 128, 128, 0.15)'
					}, DELAY_OF_ANIMATION);
					return;
				};
				$thisButton.animate({
				backgroundColor: 'rgba(128, 128, 128, 0)'
				}, DELAY_OF_ANIMATION);
		}	else {				//click
			if(buttonClass == 'buttonIsNotPressed') {
				if($(':button.buttonIsPressed').length > 0){
					$extraButton = $(':button.buttonIsPressed');
					changeButtonClass($extraButton);
				}
					
				quaPressedButton += 1;
				this.setAttribute('class', 'buttonIsPressed');
				$thisButton.animate({
					backgroundColor: 'rgba(128, 128, 128, 0.2)'
				}, DELAY_OF_ANIMATION);
				
			} else {
				quaPressedButton -= 1;
				this.setAttribute('class', 'buttonIsNotPressed');
				$thisButton.animate({
					backgroundColor: 'rgba(128, 128, 128, 0.09)'
				}, DELAY_OF_ANIMATION)
			}
			
			buttonClass = this.getAttribute('class');	//Обновляем после смены класса
			
			if(this == elButtonMoscowTime) {
				pressingButton(e, 180);
				
			} else if(this == elButtonWorldTime) {
				pressingButton(e, 0);
				
			} else {			//Расчитать время
				var $elCalcAndMailTime = $elMainTime.add($elCalcTimePanel);
				$elCalcAndMailTime.stop(0, 1);
				if ( buttonClass === 'buttonIsPressed' ) {
					$elMainTime.fadeToggle(500,
					'linear',
					function() {
						$elCalcTimePanel.fadeToggle(500)
					});
					return;
				}
				$elCalcAndMailTime.stop(0, 1);
				$elCalcTimePanel.fadeToggle(500,
				'linear',
				function () {
					$elMainTime.fadeToggle(500)
				});	
			}
		}
	});
	
	
	
	
	var $inputToCalc = $("input:text");
	$inputToCalc.on('focus', function(e) {
		$(this).on('keypress', function(e) {
			if ( !(47 < e.which && e.which < 58) ) {
				e.preventDefault();
			}
			if ( this == $inputToCalc[0] ) {
				if ($(this).val() == 0 && e.which > 50) {
					$(this).val('0');
				}
			}
		});
	});


			
	
	
	
	
	
	
	
	
	
	
	
	
	
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


























