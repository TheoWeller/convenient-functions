Source: https://sass-guidelin.es/

Sass Or SCSS
There is quite a lot of confusion regarding the semantics of the name Sass, and for good reason: Sass means both the preprocessor and its own syntax. Not very convenient, is it?

You see, Sass initially described a syntax of which the defining characteristic was its indentation-sensitivity. Soon enough, Sass maintainers decided to close the gap between Sass and CSS by providing a CSS-friendly syntax called SCSS for Sassy CSS. The motto is: if it’s valid CSS, it’s valid SCSS.

Since then, Sass (the preprocessor) has been providing two different syntaxes: Sass (not all-caps, please), also known as the indented syntax, and SCSS. Which one to use is pretty much up to you since both are strictly equivalent in features. It’s only a matter of aesthetics at this point.

Sass’ whitespace-sensitive syntax relies on indentation to get rid of braces, semi-colons and other punctuation symbols, leading to a leaner and shorter syntax. Meanwhile, SCSS is easier to learn since it’s mostly some tiny extra bits on top of CSS.

I, myself, prefer SCSS over Sass because it is closer to CSS and friendlier to most developers. Because of that, SCSS is the default syntax throughout these guidelines. You can switch to Sass indented syntax in the side panel.


STRUCTURE - SOURCE: https://www.hongkiat.com/blog/sass-tips-tools-for-developers/
Let’s walk through this suggested organization style to examine the purpose of each folder:

/globals – contains Sass files that get applied site-wide like typography, colors, and grids
/components – contains Sass files with component styles like buttons, tables, or input fields
/sections – contains Sass files dedicated to specific pages or areas on a page (might work better combined into the /components/ folder)
/utils – contains third-party utilities like Normalize that can be updated dynamically with tools like Bower.
main.scss – the primary Sass file in the root folder that imports all others.
