window.mwPerformance = { mark: function () {} };

mw.config = new mw.Map();

mw.config.set( {
	// Wiki to use
	wgScriptPath: TitleInputWidgetConfig.wgScriptPath,
	wgArticlePath: TitleInputWidgetConfig.wgArticlePath,
	wgRelevantPageName: '/',
	wgLegalTitleChars: ' %!"$&\'()*,\-./0-9:;=?@A-Z\\\^_`a-z~+\u0080-\uFFFF',
	wgNamespaceIds: {
		media: -2,
		special: -1,
		'': 0,
		talk: 1,
		user: 2,
		user_talk: 3,
		project: 4,
		project_talk: 5,
		file: 6,
		file_talk: 7,
		mediawiki: 8,
		mediawiki_talk: 9,
		template: 10,
		template_talk: 11,
		help: 12,
		help_talk: 13,
		category: 14,
		category_talk: 15,
		page: 250,
		page_talk: 251,
		index: 252,
		index_talk: 253,
		campaign: 460,
		campaign_talk: 461,
		module: 828,
		module_talk: 829,
		topic: 2600,
		image: 6,
		image_talk: 7
	}
} );

mw.messages.set( 'mw-widgets-titleinput-description-redirect', 'redirect to $1' );
mw.messages.set( 'mw-widgets-titleinput-description-new-page', 'page does not exist yet' );
