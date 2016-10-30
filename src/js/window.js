(function win() {
	var winTemplate = '<div class="{WIN_TYPE}">' +
				'<div class="win-tlo"></div>' +
				'<div class="win-tli"></div>' +
				'<div class="win-tro"></div>' +
				'<div class="win-tri"></div>' +
				'<div class="win-blo"></div>' +
				'<div class="win-bli"></div>' +
				'<div class="win-bro"></div>' +
				'<div class="win-bri"></div>' +
				'<div class="win-content">' +
				'HELLO' +
				'</div>' +
			'</div>';

	/* drag */
	function enableDraggable () {
		$('.win').draggable({
			cursor: "move",
			handler: ".win-tlo, .win-tro, .win-blo, .win-bro"	
		}); 
	
		$('.win-primary').draggable({
			cursor: "move", 
			handle: ".win-tlo, .win-tro, .win-blo, .win-bro"	
		});
	
		$('.win-success').draggable({
			cursor: "move", 
			handle: ".win-tlo, .win-tro, .win-blo, .win-bro" 
		}); 
 
		$('.win-warning').draggable({
			cursor: "move", 
			handle: ".win-tlo, .win-tro, .win-blo, .win-bro"
		}); 

		$('.win-danger').draggable({
			cursor: "move", 
			handle: ".win-tlo, .win-tro, .win-blo, .win-bro" 
		});
	}
	
	window.initWin = function (id, type) {
	  var win =	document.querySelector('#' + id);

		if (win) {
			win.innerHTML = winTemplate.replace('{WIN_TYPE}', type);
		}
		
		enableDraggable();		
	}	
}($));
