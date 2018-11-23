window.mwNow = Date.now;
if ( !window.module ) {
	window.module = {};
}
window.$VARS = {
	baseModules: []
};
window.$CODE = {
	profileExecuteStart: function () {},
	profileExecuteEnd: function () {},
	profileScriptStart: function () {},
	profileScriptEnd: function () {}
};
window.RLQ = [];
