		
		function description(msg){   // Show Description Details on Div 'description'
			if (msg=="Summary") {
				document.getElementById('description').innerHTML = "Cover Letter - Professional Summary";
			} 
			if (msg=="Experience") {
				document.getElementById('description').innerHTML = "Employment Details";
			} 
			if (msg=="Education") {
				document.getElementById('description').innerHTML = "Academic Achievements Details";
			} 
			if (msg=="Skills") {
				document.getElementById('description').innerHTML = "Soft and Hard Skills Details";			
			} 
			
		}

		function clear_description(){  // Do not show nothing on Div 'description'
			   document.getElementById('description').innerHTML = "";
		}


		// JavaScript Function for TOOLTIP 
        function ready(){
            $('[data-toggle="tooltip"]').tooltip();
        }

        function showDate(){
	
			var fecha = new Date();
			var diames = fecha.getDate();
			var diasemana = fecha.getDay();
			var mes = fecha.getMonth()+ 1;
			var ano = fecha.getFullYear();
			
			
			var textosemana = new Array(7);			
			textosemana[0]="Sunday";
			textosemana[1]="Monday";
			textosemana[2]="Tuesday";
			textosemana[3]="Wednesday";
			textosemana[4]="Thursday";
			textosemana[5]="Friday";
			textosemana[6]="Saturday";
			
			var textomes = new Array (12);
			textomes[1]="Jan";
			textomes[2]="Feb";
			textomes[3]="Mar";
			textomes[4]="Apr";
			textomes[5]="May";
			textomes[6]="June";
			textomes[7]="July";
			textomes[7]="Aug";
			textomes[9]="Sep";
			textomes[10]="Oct";
			textomes[11]="Nov";
			textomes[12]="Dec";	
	
			document.getElementById('fecha').innerHTML = textosemana[diasemana] + ", " + textomes[mes] + " " + diames + "th " + " " + ano + "<br>";
}