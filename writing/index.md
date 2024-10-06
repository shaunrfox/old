---
layout: default
page-title: "Some things should be documented."
---

<section class="writing-list-wrapper">
	<div class="container">
			{% for post in site.categories.writing %}
				<div class="column writing-post">
					<a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
					<p class="meta">{{ post.date | date_to_string }}</p>
					<div class="excerpt">{{ post.excerpt }}</div>
				</div>
			{% endfor %}
	</div>
</section>
