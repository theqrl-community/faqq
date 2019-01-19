---
---
{% assign faqs = site.faq %}


{% for faq in faqs %}
{% assign refs = faq.ref %}
<div class="section" id="{{ faq.slug }}">
	<ul class="buttons">
		<li><a href="{{ site.baseurl }}/">Start »</a></li>
	</ul>
	<h2 class="statement">{{ faq.title }}</h2>

	<div class="content">
		{{ faq.content }}
	</div>

	<h3>Common FAQ</h3>
	<ul class="buttons {{ faq.slug }}">
		{% for ref in refs %}
			<li class="curated"><a href="#{{ ref }}">
				{% assign subpage = site.faq | where: 'slug', ref %}

				{% for item in subpage %}
				   {{ item.title }}
				{% endfor %}

				 »</a>
			</li>
		{% endfor %}
		{% for faq in faqs %}
			{% if refs contains faq.slug %}
				
			{% else %}
				<li><a href="#{{ faq.slug }}">{{ faq.title }} »</a></li>
			{% endif %}


		{% endfor %}
	</ul>

	<script type="text/javascript">
	// Parent
	var ul = document.querySelector('.{{ faq.slug }}');
	var ulchosen = document.querySelectorAll('.{{ faq.slug }} .curated');

	for (var i = ul.children.length; i >= 0; i--) {
	    ul.appendChild(ul.children[Math.random() * i | 0]);
	}
	for (var i = 0; i < ulchosen.length; i++) {
		ul.prepend(ulchosen[i]);
	}
	</script>
</div>
{% endfor %}