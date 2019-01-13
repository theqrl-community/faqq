---
---
{% assign faqs = site.faq %}


{% for faq in faqs %}
{% assign refs = faq.ref %}
<div class="section" id="{{ faq.slug }}">
	<h2 class="statement">{{ faq.title }}</h2>

	<div class="content">
		{{ faq.content }}  
		
	</div>

	<ul class="buttons">
	<!--	{% for ref in refs %}
			<li><a href="#{{ ref }}">
			{% assign subpage = site.faq | where: 'slug', ref %}

			{% for item in subpage %}
			   {{ item.title }}
			{% endfor %}

			 »</a>
			</li>
		{% endfor %} -->

		{% for faq in faqs %}
		<li><a href="#{{ faq.slug }}">{{ faq.title }} »</a></li>
		{% endfor %}
		<li><a href="{{ site.baseurl }}/">Start »</a></li>

	</ul>
</div>
{% endfor %}


<!-- <h3>For easy reference</h3>
<ul>
	{% for faq in faqs %}
	<li><a href="#{{ faq.slug }}">{{ faq.title }} »</a></li>
	{% endfor %}
	<li><a href="{{ site.baseurl }}/">Start »</a></li>
</ul> -->