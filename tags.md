 # Overview

<ul>
    {% for page in book.pages %}
    {% for tag in page.tag %}
    {% if tag == "ascii" %}
    <li><a href="{{page.url | prepend: '..'}}">{{page.title}}</a></li>
    {% endif %}
    {% endfor %}
    {% endfor %} 
</ul>