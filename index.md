---
---
{% assign faqs = site.faq %}
{% assign misconceptions = site.faq | where: "category","misconception" %}
{% assign statements = site.faq | where: "category","statement" %}

<h1>
	The QRL FAQQ
	<span>(Frequently Asked Quantum Questions)</span>
</h1>

<h2>Table of Contents</h2>

<h3>Statements</h3>
<p>Start with the statements, when you agree with these, move onto the common misconceptions.</p>
<ul class="buttons">
	{% for faq in statements %}
		<li><a href="{{ faq.slug }}">{{ faq.title }} »</a></li>
	{% endfor %}
</ul>

<h3>Misconceptions</h3>
<ul class="buttons">
	{% for faq in misconceptions %}
		<li><a href="{{ faq.slug }}">{{ faq.title }} »</a></li>
	{% endfor %}
</ul>