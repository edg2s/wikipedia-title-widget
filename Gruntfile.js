/* eslint-env node, es6 */

module.exports = function ( grunt ) {
	var core = '/var/www/MediaWiki/core/',
		ooui = '/var/www/oojs/ui/';

	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-less' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-css-url-embed' );
	grunt.loadNpmTasks( 'grunt-eslint' );

	grunt.initConfig( {
		clean: {
			dist: [ 'dist/*' ],
			tmp: [ 'dist/mediawiki.mixins' ]
		},
		concat: {
			mixins: {
				dest: 'dist/mediawiki.mixins',
				src: [
					core + 'resources/src/mediawiki.less/mediawiki.mixins.less'
				]
			},
			css: {
				dest: 'dist/titleInputWidget.css',
				src: [
					core + 'resources/lib/ooui/oojs-ui-core-wikimediaui.css',
					core + 'resources/lib/ooui/oojs-ui-widgets-wikimediaui.css',
					core + 'resources/src/mediawiki.widgets/mw.widgets.TitleWidget.less'
				]
			},
			js: {
				dest: 'dist/titleInputWidget.js',
				src: [
					core + 'resources/lib/oojs/oojs.jquery.js',

					ooui + 'src/core.js',
					ooui + 'src/mixin.js',
					ooui + 'src/HtmlSnippet.js',
					ooui + 'src/Theme.js',

					ooui + 'src/Element.js',
					ooui + 'src/Widget.js',

					ooui + 'src/mixins/FlaggedElement.js',
					ooui + 'src/mixins/TabIndexedElement.js',
					ooui + 'src/mixins/TitledElement.js',
					ooui + 'src/mixins/AccessKeyedElement.js',
					ooui + 'src/widgets/Widget.js',
					ooui + 'src/widgets/InputWidget.js',

					ooui + 'src/mixins/IconElement.js',
					ooui + 'src/mixins/IndicatorElement.js',
					ooui + 'src/mixins/PendingElement.js',
					ooui + 'src/mixins/LabelElement.js',
					ooui + 'src/widgets/TextInputWidget.js',

					ooui + 'src/widgets/IconWidget.js',

					ooui + 'src/mixins/GroupElement.js',
					ooui + 'src/mixins/GroupWidget.js',
					ooui + 'src/widgets/SelectWidget.js',

					ooui + 'src/mixins/ClippableElement.js',
					ooui + 'src/mixins/FloatableElement.js',
					ooui + 'src/widgets/MenuSelectWidget.js',

					ooui + 'src/mixins/FloatableElement.js',
					ooui + 'src/widgets/FloatingMenuSelectWidget.js',

					ooui + 'src/mixins/RequestManager.js',
					ooui + 'src/mixins/LookupElement.js',

					ooui + 'src/mixins/ItemWidget.js',
					ooui + 'src/widgets/OptionWidget.js', // label + flagged + accesskey

					ooui + 'src/widgets/DecoratedOptionWidget.js', // icon+indicator
					ooui + 'src/widgets/MenuOptionWidget.js',

					core + 'resources/lib/ooui/oojs-ui-wikimediaui.js',

					'mwnow.js',
					core + 'resources/src/startup/mediawiki.js',
					core + 'resources/src/mediawiki.base/mediawiki.base.js',
					core + 'resources/src/mediawiki.util.js',
					core + 'resources/src/mediawiki.RegExp.js',

					'mw.config.js',
					core + 'resources/src/mediawiki.api/index.js',
					core + 'resources/src/mediawiki.ForeignApi.core.js',

					'loader.intro.mediawiki.String.js',
					core + 'resources/src/mediawiki.String.js',
					'loader.outro.js',

					core + 'resources/src/mediawiki.Title/Title.js',
					core + 'resources/src/mediawiki.Title/phpCharToUpper.js',
					core + 'resources/src/mediawiki.widgets/mw.widgets.TitleWidget.js',
					core + 'resources/src/mediawiki.widgets/mw.widgets.TitleOptionWidget.js',
					core + 'resources/src/mediawiki.widgets/mw.widgets.TitleInputWidget.js'
				]
			}
		},
		eslint: {
			all: [
				'*.js',
				'!loader.*'
			]
		},
		less: {
			options: {
				paths: [ 'css/' ]
			},
			all: {
				expand: true,
				cwd: 'dist',
				src: [ '**/*.css' ],
				dest: 'dist'
			}
		},
		cssUrlEmbed: {
			ooui: {
				options: {
					baseDir: '/var/www/MediaWiki/core/resources/lib/oojs-ui',
					failOnMissingUrl: false
				},
				expand: true,
				cwd: 'dist',
				src: [ '**/*.css' ],
				dest: 'dist'
			},
			widgets: {
				options: {
					baseDir: '/var/www/MediaWiki/core/resources/src/mediawiki.widgets',
					failOnMissingUrl: false
				},
				expand: true,
				cwd: 'dist',
				src: [ '**/*.css' ],
				dest: 'dist'
			}
		},
		uglify: {
			js: {
				expand: true,
				cwd: 'dist',
				src: [ '**/*.js' ],
				dest: 'dist'
			}
		}
	} );

	grunt.registerTask( 'pre-build', [
		'eslint',
		'clean:dist',
		'concat'
	] );
	grunt.registerTask( 'post-build', [
		'less',
		'cssUrlEmbed',
		'clean:tmp'
	] );

	grunt.registerTask( 'build', [ 'pre-build', 'uglify', 'post-build' ] );
	grunt.registerTask( 'build-dev', [ 'pre-build', 'post-build' ] );

	grunt.registerTask( 'default', 'build' );
};
