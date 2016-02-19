# First Chapter

## Some text

AsciiDoc is mentioned here a lot.

- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars
- [ ] Jupiter
- [ ] Saturn
- [ ] Uranus
- [ ] Neptune
- [ ] Comet Haley

[RST](sdk.rst)

Here's some code:

> **Info** Info

fdg

> **Note** Note

fdgfdg

> **Tag** Tag

fdgfdg
 
> **Comment** Comment

fdgfdg

> **Hint** Hint

fdgfdg

> **Success** Success
 
fdgfdg

> **Warning** Warning

fdgfdg

> **Caution** Caution

fdgfdg

> **Danger** Danger

fdgfdg

> **Quote** Quote

asdasd


> #### Info::Info

dfgfdg

> #### Note::Note

dfgfdg

> #### Tag::Tag

dfgfdg

> #### Comment::Comment

dfgfdg

> #### Hint::Hint

dfgfdg

> #### Success::Success

dfgfdg

> #### Warning::Warning
gfghfh


> #### Caution::Caution

dfgfdg

> #### Danger::Danger

dfgfdg

> #### Quote::Quote

dfgfdg

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
