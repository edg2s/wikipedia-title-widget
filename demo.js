$( function () {
	var widget = new mw.widgets.TitleInputWidget( {
		api: new mw.ForeignApi( mw.config.get( 'wgScriptPath' ) + '/api.php', { anonymous: true } ),
		showImages: true,
		showDescriptions: true
	} );
	$( document.body ).append( widget.$element );
} );
