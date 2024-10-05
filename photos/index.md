---
layout: default
page-title: "I shoot photos, too."
---

<section class="photo-wrapper">
	<div class="container photos">
		<div class="column">
			{% for post in site.categories.photos %}
				<div class="photo-post">
					<a class="photo-link" href="{{ post.url }}" style="background-image:url('{{ post.base-path }}/{{ post.home_image }}')"></a>
					<a class="title-link" href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
				</div>
			{% endfor %}
		</div>
	</div>
</section>
