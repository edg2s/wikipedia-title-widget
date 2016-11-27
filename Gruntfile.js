/* eslint-env node */

module.exports = function ( grunt ) {
	var core = '/var/www/MediaWiki/core/',
		ooui = '/var/www/oojs/ui/';

	grunt.loadNpmTasks( 'grunt-contrib-less' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );

	grunt.initConfig( {
		clean: {
			dist: [ 'dist/*' ]
		},
		concat: {
			css: {
				dest: 'dist/titleInputWidget.css',
				src: [
					core + 'resources/lib/oojs-ui/oojs-ui-core-mediawiki.css',
					core + 'resources/lib/oojs-ui/oojs-ui-widgets-mediawiki.css',
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

					ooui + 'src/mixins/GroupElement.js',
					ooui + 'src/mixins/GroupWidget.js',
					ooui + 'src/widgets/SelectWidget.js',

					ooui + 'src/mixins/ClippableElement.js',
					ooui + 'src/widgets/MenuSelectWidget.js',

					ooui + 'src/mixins/FloatableElement.js',
					ooui + 'src/widgets/FloatingMenuSelectWidget.js',

					ooui + 'src/mixins/RequestManager.js',
					ooui + 'src/mixins/LookupElement.js',

					ooui + 'src/mixins/ItemWidget.js',
					ooui + 'src/widgets/OptionWidget.js', // label + flagged + accesskey

					ooui + 'src/widgets/DecoratedOptionWidget.js', // icon+indicator
					ooui + 'src/widgets/MenuOptionWidget.js',

					core + 'resources/lib/oojs-ui/oojs-ui-mediawiki.js',

					core + 'resources/src/mediawiki/mediawiki.js',
					core + 'resources/src/mediawiki/mediawiki.util.js',
					core + 'resources/src/mediawiki/mediawiki.RegExp.js',

					'mw.config.js',
					core + 'resources/src/mediawiki/api.js',

					core + 'resources/src/jquery/jquery.autoEllipsis.js',
					core + 'resources/src/jquery/jquery.byteLimit.js',
					core + 'resources/src/jquery/jquery.byteLength.js',
					core + 'resources/src/jquery/jquery.highlightText.js',

					core + 'resources/src/mediawiki/mediawiki.Title.js',
					core + 'resources/src/mediawiki.widgets/mw.widgets.TitleWidget.js',
					core + 'resources/src/mediawiki.widgets/mw.widgets.TitleOptionWidget.js',
					core + 'resources/src/mediawiki.widgets/mw.widgets.TitleInputWidget.js',
				]
			}
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
		uglify: {
			js: {
				expand: true,
				cwd: 'dist',
				src: [ '**/*.js' ],
				dest: 'dist'
			}
		}
	} );

	grunt.registerTask( 'build', [ 'clean', 'concat', 'uglify', 'less' ] );

	grunt.registerTask( 'default', 'build' );
};