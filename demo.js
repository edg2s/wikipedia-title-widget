$( function () {
	var widget = new mw.widgets.TitleInputWidget( {
		api: new mw.Api( { ajax: { dataType: 'jsonp' } } ),
		showImages: true,
		showDescriptions: true
	} );
	$( 'body' ).append( widget.$element );
} );
