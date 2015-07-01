	$(document).ready(function(){
		//script runs through table(s) on the page and adds the responsive table css
		if ( $('table').length ) { //if table exists
			//add ids for the table incase there is more than one on the page
			$('table').each(function(i) {
			    $(this).attr('id', "table" + (i + 1));
			 });
			//Responsive table - adding header content to inline CSS so don't have to do it in back-end
			var generatedCSS = "";
			$('table').each(function( index ) {	
				var tableId = $(this).attr('id');
				$('#'+tableId+' th').each(function( thIndex ) {
					var thText = $(this).text().trim();
				  	generatedCSS = generatedCSS + "#"+tableId+" td:nth-of-type(" + (thIndex+1)  + "):before { content: '"+thText+"'; }";
				});
			});
			//only prepends this styling once if table1 exists which is should if there is a table on the page
			$('#table1').before('<!--[if !IE]><!--><style>@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px)  { '+generatedCSS+' } </style><!--<![endif]-->');
		}
	});