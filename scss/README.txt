

Frameworks
----------


Thsi theme users Zurb Foundation semantically (vis sass) for general styling such as padding and colours, but the superior Susy Grid framework for layout. these libraries are outside the main scss dir.


Sass Structure
==============

		*   styles.scss (or app)
				This file shouldn't ideally directly contain any CSS code, instead
				it only serves to combine the CSS contained in other Sass partials
				through @import directives.


The file structure has subfolders organized thus:

		*   variables
				Global Sass variables and mixin 'settings' defining layout and look and feel (referred 
				in some other themes are "utils". 

		*   variables
				Global Sass variables and mixin 'settings' defining layout and look and feel (referred 
				in some other themes are "utils".  Once this file is completed the theme's styleguide should be completely styled.

		*   base.
				Describing  general common HTML (forms etc) and Drupal elements, as distinct from 
				specific page "components".

		*   layout
				The layout of the major regions (usually, but not necessarily Drupal regions) that components 
				will be added to. 

		*   components
				Full  components and their sub-components (LIKE 'modules' in SMACSS) that can be placed within the
				layout  - e.g.: tabs, footer, menu, search.

		*   general
				general look and feel styling and elemental styling that doesn't fit in anywhere else.








REFERENCE
=========
Introduction to Sass (http://sass-lang.com/)
============================================
Sass makes CSS fun again. Sass is an extension of CSS3, adding nested rules,
variables, mixins, selector inheritance, and more. It’s translated to well-
formatted, standard CSS using the command line tool or a web-framework plugin.

Sass has two syntaxes. The new main syntax (as of Sass 3) is known as “SCSS”
(for “Sassy CSS”), and is a superset of CSS3’s syntax. This means that every
valid CSS3 stylesheet is valid SCSS as well. SCSS files use the extension .scss.

The second, older syntax is known as the indented syntax (or just “Sass”).
Inspired by Haml’s terseness, it’s intended for people who prefer conciseness
over similarity to CSS. Instead of brackets and semicolons, it uses the
indentation of lines to specify blocks. Although no longer the primary syntax,
the indented syntax will continue to be supported. Files in the indented syntax
use the extension .sass.

@see http://sass-lang.com/docs.html
	Please refer to the Sass documentation for further information about the
	syntax.

Use a preprocessor app like codekit or prepros, OR an automated workflow such 
as gulp to compile sass and refresh your browser.