---
title: "아카이브"
layout: archive
permalink: /archive/
author_profile: true
---

{% assign postsByYear = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}
  <h2 id="{{ year.name }}" class="archive__subtitle">{{ year.name }}</h2>
  {% for post in year.items %}
    {% include archive-single.html type="list" %}
  {% endfor %}
{% endfor %}
