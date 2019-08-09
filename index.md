---
---
{% assign faqs = site.faq %}
{% assign misconceptions = site.faq | where: "category","misconception" %}
{% assign statements = site.faq | where: "category","statement" %}

<h1>
	The FAQQ
	<span>(Frequently Asked Quantum Questions)</span>
</h1>

<h2>Table of Contents</h2>

<h3>Statements & Assertions</h3>
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

<h3>Resources</h3>

<h4>Series: Quantum resistant blockchain and cryptocurrency, the full analysis</h4>

<ul>
	<li><a href="https://medium.com/altcoin-magazine/quantum-resistant-blockchain-and-cryptocurrency-the-full-analysis-in-seven-parts-part-1-daa211565a68">Part 1. Laying the groundwork</a></li>
	<li><a href="https://medium.com/altcoin-magazine/quantum-resistant-blockchain-and-cryptocurrency-the-full-analysis-in-seven-parts-part-2-c15b82e5ea55">Part 2. Blockchain mathematical concepts</a></li>
	<li><a href="https://medium.com/altcoin-magazine/quantum-resistant-blockchain-and-cryptocurrency-the-full-analysis-in-seven-parts-part-3-f9193634ecc5">Part 3. Quantum resistant blockchains explained</a></li>
	<li><a href="https://medium.com/altcoin-magazine/quantum-resistant-blockchain-and-cryptocurrency-the-full-analysis-in-seven-parts-part-4-7583673ad681">Part 4. Challenges in upgrading existing blockchains</a></li>
	<li><a href="https://medium.com/altcoin-magazine/quantum-resistant-blockchain-and-cryptocurrency-the-full-analysis-in-seven-parts-part-5-7d9afffa05bf">Part 5. Challenges in upgrading existing blockchains, continued</a></li>
	<li><a href="https://medium.com/altcoin-magazine/quantum-resistant-blockchain-and-cryptocurrency-the-full-analysis-in-seven-parts-part-6-769973d3decf">Part 6. Why BTC is vulnerable for quantum attacks sooner than todays estimates</a></li>
	<li><a href="https://medium.com/altcoin-magazine/quantum-resistant-blockchain-and-cryptocurrency-the-full-analysis-in-seven-parts-part-7-61e15f561a9f">Part 7. Commong arguments and false claims</a></li>
</ul>


<h4>Academic Papers</h4>

<ul>
	<li>
		<a href="https://arxiv.org/pdf/1710.10377.pdf">Quantum attacks on Bitcoin, and how to protect against them</a>
	</li>
	<li>
		<a href="https://eprint.iacr.org/2017/598.pdf">Quantum Resource Estimates for ComputingElliptic Curve Discrete Logarithms</a>
	</li>
</ul>