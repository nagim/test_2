jQuery(window).bind('onbeforeunload' ,function(){
$(document).ready(function() {
$("pre").contents()
        .filter(function(){return this.nodeType === 3}).add(".red")
        .wrap('<code />');
});
}