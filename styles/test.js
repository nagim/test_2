$(document).ready(function() {
$("pre").one("load", function () {
$(this).wrapInner('<code />')
//var b = $("button")
//b.remove()
//$($("code")).after($("button"))
//$(this).append($(b))
//$("pre").contents().filter(function(){return this.nodeType === 3}).wrap('<code />')
//$("code").add($(".red").wrap('<code />'))
});
});