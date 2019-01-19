---
---




{% assign faqs = site.faq %}

<h1>{{ site.title }}</h1>

<ul class="buttons {{ faq.slug }}">
	{% for faq in faqs %}
			<li><a href="{{ faq.slug }}">{{ faq.title }} »</a></li>
	{% endfor %}
</ul>