---
layout: post
title:  "Fox Icons"
date:   2016-07-25
categories: writing
excerpt: "The Fox Icons set started as a way to have custom assets at hand for use in our projects. The idea was that they'd be easily accesible for developers and designers alike, but also would bring a unified style to help make the look and feel of our apps more consistent&hellip;"
---

The [Fox Icons](/work/fox-icons.html) set started as a way to have custom assets at hand for use in our projects. The idea was that they'd be easily accesible for developers and designers alike, but also would bring a unified style to help make the look and feel of our apps more consistent.

When I made the first set, I sought to cover all of the existing icons we has in the project, plus any others I could imagine that would come up as we added new features.

To enforce consistency when designing the icons, I created a grid to use as a guide. It was 30px &times; 30px but I kept the edges of each icon mostly withing the center 20px &times; 20px. This helped immensely in keeping the scale similar, which can be a challenge when working with icons. It also helped me maintain a consistent level of detail, challenging me to make the icons ever more simplified and readable. In the beginning, before high-resolution screens, the pixel grid also helped keep things sharp. Keeping lines and points matching up with pixel intersections ensured that the edges would not become blurry.

Technology-wise, the web was transitioning away from using images for icons and many people were exploring alternatives. The leader of the day, with pretty decent browser coverage, was to create an icon font. This involved registering all of the icons as extra glyphs in a custom font. A few services popped up to help you generate your fonts for free, so I jumped on one of those.

That season lasted for a while, but the web kept pushing. Browsers grew and began supporting more and more options for icons. Most notably, SVGs began to rise to the top as the best way to get vector-based icons to the web.

This new shift was intriguing to me because along the way, working with the icon font revealed a few difficulties that made me question if there was another way to go. Firstly, updating an icon font was tedious. Accessing the icons was done using an easily definable class name, but each time you wanted to add an icon, you had to completely regenerate your font, which caused things to break if you weren't careful. Secondly, exact positioning of text-based fonts on the web is a difficult job, using CSS. Font-based icons are no different. I realized it was taking considerable amounts of tweaking to get the icons just right because their position was relative to the font's baseline, rather than acting like a rectangle like everything else on the web.

There are also a few different ways to use SVGs, which I've tried over time. I've landed on the solution of defining them in the head of each page using a definition list, then just rendering them based on their id. Chris Coyier has a great [article on CSS-Tricks](https://css-tricks.com/svg-sprites-use-better-icon-fonts/) about creating and using SVGs like this.

I was happy to give SVGs a try, and I've never looked back. They're code-based, they render as rectangles by default, you can affect them easily through CSS, and they're more browser-compatible every day. It's now trivial to add a new icon and push it up to Github, where all of the projects I work on can gain easy access. Plus, they're registered with Bower (thanks Broderick), which makes keeping up to date in a project easy.

I've created a page on my site, which anyone can get to, to use as a simple documentation page. My icon set is free to use, and I'm happy to share it with the design and dev community. If you add it to one of your projects, let me know. I'd love to know what you think and if they've been helpful to you.