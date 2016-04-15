$(window).load(function() {
$("pre").one("load", function () {
var b = $("button");
b.remove();
$(this).wrapInner('<code />');
$(this).append($(b));
runPage();
});
});