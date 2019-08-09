---
layout: default
---

{% assign misconceptions = site.faq | where: "category","misconception" %}
{% assign statements = site.faq | where: "category","statement" %}

<h1>
  The FAQQ
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


  <div class="calltoquery">
    <h3>Have a question that's not addressed?</h3>
    <h4>Alternatively, don't agree with something?</h4>
    <p>While we aim to address many of the questions people may have about quantum computing and how it relates to blockchain, it's possible things are missed or is incorrect.</p>
    <p>If you feel something is missed or is otherwise incorrect, we would <strong>love</strong> for you to <a class="cta" href="https://github.com/theqrl-community/faqq/issue">open an issue</a> on our <a href="https://github.com/theqrl-community/faqq">github repository</a>.</p>
  </div>
</div>

<script type="text/javascript">
// Move footnotes to...
var footnotes = document.querySelector('.footnotes');
var newparent = document.querySelector('.footer');

newparent.appendChild(footnotes);
</script>