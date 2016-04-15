gitbook.events.bind("page.change", function(){
$(document).ready(function() {
$("pre").one("load", function () {
var b = $("button")
b.remove()
$(this).wrapInner('<code />')
$(this).append($(b))
});
});
});