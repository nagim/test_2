# First Chapter

## Some text

AsciiDoc is mentioned here a lot.

[RST](sdk.rst)

Here's some code:

> **Info** Info

> **Note** Note

> **Tag** Tag

> **Comment** Comment

> **Hint** Hint

> **Success** Success
 
> **Warning** Warning

> **Caution** Caution

> **Danger** Danger

> **Quote** Quote


```uml
@startuml

    Class Stage
    Class Timeout {
        +constructor:function(cfg)
        +timeout:function(ctx)
        +overdue:function(ctx)
        +stage: Stage
    }
     Stage <|-- Timeout

@enduml
```

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
