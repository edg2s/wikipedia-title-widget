$( function () {
	var widget = new mw.widgets.TitleInputWidget( {
		showImages: true,
		showDescriptions: true
	} );
	$( 'body' ).append( widget.$element );
} );
