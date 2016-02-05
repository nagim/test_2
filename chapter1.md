# First Chapter

## Some text

AsciiDoc is mentioned here a lot.

Here's some code:

> **Danger** Be careful

```JavaScript
filterArr(qMultiOpt, qArray) {
       if($('#question'+qMultiOpt+' input.checkbox:checked').length < 1) {
               // Hide the array if no multi-opt options are checked
               $('#question'+qArray+'').hide();
       }
       else {
               $('#question'+qArray+'').show();
               // Hide all columns of array
               $('#question'+qArray+' table.question tbody td, #question'+qArray+' table.question thead th').show();
               // Loop through multi-opt checkboxes and, if checked, show corresponding column of array
               $('#question'+qMultiOpt+' input.checkbox').each(function(i){
                       if($(this).attr('checked') == true) {
                               var classArr3 = $(this).attr('id').split('X'+qMultiOpt);
                               var ansCode3 = classArr3[1];
                               $('#question'+qArray+' .ans-'+ansCode3+'').hide();
                       }
               });
       }
}
```

<div class="tabs">
    <ul class="tabs-nav">
        <li>
            <a data-toggle="tab">Java</a>
        </li>
        <li class="active">
            <a data-toggle="tab">C++</a>
        </li>
    </ul>
    <div class="tabs-content">
        <div class="tab-pane" id="java">`Java Code`</div>
        <div class="tab-pane active" id="cpp">`Cpp code`</div>
    </div>
</div>
