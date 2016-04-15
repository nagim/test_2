require(["gitbook"], function(gitbook) {
gitbook.events.bind("page.change", function() {
    $("pre > code").contents().unwrap()
    $("pre").wrapInner('<code />')
    var b = $(".copy-code-button")
    b.detach()
    $("pre").append($(b))
    $("pre").each(function() {
      $(".copy-code-button").not(':last-child').detach()
    });
  });
 });