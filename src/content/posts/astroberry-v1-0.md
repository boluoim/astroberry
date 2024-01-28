---
title: Astroberry v1.0
tags: ["astro", "astroberry"]
author: boluo
createdAt: 2024-01-28 09:42
updatedAt: 2024-01-28 09:42
description: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
---

By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you really are just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.

We get lots of complaints about it actually, with people regularly asking us things like:

> Why is Tailwind removing the default styles on my `h1` elements? How do I disable this? What do you mean I lose all the other base styles too?

We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a p element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look awesome, not awful.

The `@tailwindcss/typography` plugin is our attempt to give you what you actually want, without any of the downsides of doing something stupid like disabling our base styles.

It adds a new prose class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:

```html
<article class="prose">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
  <!-- ... -->
</article>
```

For more information about how to use the plugin and the features it includes, [read the documentation]().

---

## What to expect from here on out

What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like **bold text**, unordered lists, ordered lists, code blocks, block quotes, and even *italics*.

It's important to cover all of these use cases for a few reasons:

- We want everything to look good out of the box.
- Really just the first reason, that's the whole point of the plugin.
- Here's a third pretend reason though a list with three items looks more realistic than a list with two items.

Now we're going to try out another header style.

## Typography should be easy

So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.

Something a wise person once told me about typography is:

> Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.

It's probably **important** that images look okay here by default as well:

![demo](https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)

## Code should look okay by default.

I think most people are going to use [highlight.js]() or [Prism]() or something if they want to style their code blocks but it wouldn't hurt to make them look okay out of the box, even with no syntax highlighting.

Here's what a default tailwind.config.js file looks like at the time of writing:

```js
module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

Hopefully that looks good enough to you.

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
