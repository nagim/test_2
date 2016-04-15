window.onload=function(){
  $(document).ready(function() {
    $("code").contents().unwrap()
    $("pre").wrapInner('<code />')
    var b = $(".copy-code-button")
    b.detach()
    $("pre").append($(b))
    $("pre").each(function() {
      $(".copy-code-button").not(':last-child').detach()
    });
  });
}
