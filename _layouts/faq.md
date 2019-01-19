---
layout: default
---

<div class="section">
  <ul class="buttons">
    <li><a href="{{ site.baseurl }}/">« Start</a></li>
  </ul>
  <h1 class="statement">{{ page.title }}</h1>

  <div class="content">
    {{ content }}
  </div>

  <h3>Common FAQQ</h3>
  <ul class="buttons {{ faq.slug }}">
    {% for reference in page.ref %}
      <li class="curated"><a href="{{ site.baseurl }}/{{ reference }}">
        {% assign subpage = site.faq | where: 'slug', reference %}

        {% for item in subpage %}
           {{ item.title }}
        {% endfor %}

         »</a>
      </li>
    {% endfor %}

    {% for faqq in site.faq %}
      {% if page.ref contains faqq.slug %}
        
      {% else %}
        <li><a href="{{ site.baseurl }}/{{ faqq.slug }}">{{ faqq.title }} »</a></li>
      {% endif %}


    {% endfor %}
  </ul>

  <script type="text/javascript">
  // Parent
  // var ul = document.querySelector('.{{ faq.slug }}');
  // var ulchosen = document.querySelectorAll('.{{ faq.slug }} .curated');

  // for (var i = ul.children.length; i >= 0; i--) {
  //     ul.appendChild(ul.children[Math.random() * i | 0]);
  // }
  // for (var i = 0; i < ulchosen.length; i++) {
  //   ul.prepend(ulchosen[i]);
  // }
  </script>
</div>
