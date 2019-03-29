---
layout: default
---

{% assign misconceptions = site.faq | where: "category","misconception" %}
{% assign statements = site.faq | where: "category","statement" %}

<h1>
  The QRL FAQQ
  <span>(Frequently asked Quantum Questions)</span>
</h1>

<div class="section">
  <ul class="buttons head">
    <li><a href="{{ site.baseurl }}/">« Table of Contents</a></li>
  </ul>

  <h1 class="statement">{{ page.title }}</h1>

  <div class="content">
    {{ content }}
  </div>

  <h3>Other Assertions</h3>
  <ul class="buttons two">
    {% for statement in statements %}
      {% if statement.title != page.title %}
        <li><a href="{{ site.baseurl }}/{{ statement.slug }}">{{ statement.title }} »</a></li>
      {% endif %}
    {% endfor %}
  </ul>

  <h3>Common Misconceptions</h3>
  <ul class="buttons two">
    {% for reference in page.ref %}
      <li class="curated"><a href="{{ site.baseurl }}/{{ reference }}">
        {% assign subpage = site.faq | where: 'slug', reference %}

        {% for item in subpage %}
           {{ item.title }}
        {% endfor %}

         »</a>
      </li>
    {% endfor %}

    {% for faqq in misconceptions %}
      {% if page.ref contains faqq.slug %}
        
      {% else %}
        <li><a href="{{ site.baseurl }}/{{ faqq.slug }}">{{ faqq.title }} »</a></li>
      {% endif %}


    {% endfor %}
  </ul>

  <div class="footer">
    <h3>Footnotes</h3>
  </div>


</div>
<script type="text/javascript">
// Parent
// var ul = document.querySelector('.buttons.two ');
// var ulchosen = document.querySelectorAll('.buttons.two .curated');


// for (var i = ul.children.length; i >= 0; i--) {
//     ul.appendChild(ul.children[Math.random() * i | 0]);
// }
// for (var i = 0; i < ulchosen.length; i++) {
//   ul.prepend(ulchosen[i]);
// }

// Move footnotes to...
var footnotes = document.querySelector('.footnotes');
var newparent = document.querySelector('.footer');

newparent.appendChild(footnotes);
</script>