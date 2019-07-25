$( function () {
	var widget = new mw.widgets.TitleInputWidget( {
		api: new mw.ForeignApi( mw.config.get( 'wgScriptPath' ) + '/api.php', { anonymous: true } ),
		showImages: true,
		showDescriptions: true,
		placeholder: 'Search for a Wikipedia page'
	} );
	$( document.body ).append( widget.$element );
} );
