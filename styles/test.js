window.onload=function(){
  $(document).ready(function() {
    $("pre").wrapInner('<code />')
    var b = $("button")
    b.remove()
    $("pre").append($(b))
  });
}