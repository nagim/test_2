window.onload=function(){
  $(document).ready(function() {
    $("pre").wrapInner('<code />')
    var b = $(".copy-code-button")
    b.remove()
    $("pre").append($(b))
  });
}