SEMANTIQUE BASE THEME
----------------------------------------

Semantique, true to it’s name, leverages sass, Zurb foundation and cssgrid to avoid presentational markup.

Zurb Foundation is used to handle breakpoints, common object styles such as cards, media embeds, forms etc.

The point here is to use Foundation for the things it does well, and beyond where it doesn’t. In this way we’re able to make use of CMS Foundation modules such as For Orbit Slider, and  the open Foundation Building blocks collection.   

Layout is implemented using css grid, rather than a grid framework. Without a framework, extra care is required to maintain a consistent underlying  modular grid. Grids are implemented via a simple grid-context mixin
 
Colours are handled via a set of sass variables prefixed “$col-“ for clear differentiation

Type sizing is a work, barely in progress. We will look beyond Foundation’s somewhat arbitrary approach.

The theme is workflow agnostic, but has typically been managed via code kit or equivalent preprocessing app. Common mixins are contained in a global set of ‘abstractions’, which is copied into the theme on build commits, along with autoprefixer processing.  

Additional utility mixins are provided in the global abstractions for transitions, text-wrap, aspect-ratio settings etc.


Note
----
This theme is a child theme designed to be forked, more than 'childed'.
Semantique relies on the Zurb Foundation theme as a parent.
This theme does not support IE, and relies on css grid for layout


After adding a new theme in Drupal 8, you'll need to clear the theme registry's cache, which you can do by clearing all cache in the UI or running `drush cr` , * if you have Drush installed.

Manual sub-theme setup
----------------------

 1. Setup the location for your new sub-theme.

    Clone this theme folder and rename it to the name of 
    your new theme. IMPORTANT: The name of your sub-theme must start with
    an alphabetic character and can only contain lowercase letters, numbers and
    underscores.

 2. Setup the basic information for your sub-theme.

    In your new sub-theme folder, rename the STARTER.info.yml.txt file to include
    the name of your new sub-theme and remove the ".txt" extension. Then edit
    the .info file by editing the name and description field.

    For example, rename the foo/STARTER.info.yml.txt file to foo/foo.info.yml. Edit the
    foo.info.yml file and change "name: Foundation Sub-theme Starter" to
    "name: Foo" and "description: Read..." to "description: A sub-theme".

      Why? The .info.yml file describes the basic things about your theme: its
      name, description, features, template regions, and libraries.
      See the Drupal 8 Theme Guide for more info: https://www.drupal.org/theme-guide/8

    Then, visit your site's Appearance page at admin/appearance to refresh
    Drupal 8's cache of .info file data.

 3. Edit your sub-theme to use the proper function names.

    First, rename STARTER.theme to include the name of your new sub-theme. In this
    example we'll assume that it's renamed foo.theme.

    Edit the foo.theme and theme-settings.php files in your sub-theme's
    folder; replace ALL occurrences of "STARTER" with the name of your
    sub-theme.

    For example, edit foo/foo.theme and foo/theme-settings.php and replace
    every occurrence of "STARTER" with "foo".

    It is recommended to use a text editing application with search and
    "replace all" functionality.

 5. Set your website's default theme.

    Log in as an administrator on your Drupal site, go to the Appearance page at
    admin/appearance and click the "Enable and set default" link next to your
    new sub-theme.



Optional steps:

 7. Modify the markup in the  template files.

    If you decide you want to modify any of the .html.twig template files,
    you can copy Zurb foundation templates to your theme's folder before
    making any changes.And then rebuild the theme registry.

    For example, copy zurb_foundation/templates/page.html.twig to
    THEMENAME/templates/page.html.twig.

 8. Optionally override existing Drupal core *.html.twig templates in your sub-theme.

 9. Add custom css and js files to your sub-theme

    Rename STARTER.libraries.yml to the name of your sub-theme, un-commenting
    lines and making name changes as needed.

    You'll also need to edit your info.yml file to include your new library.
    There are instructions in the info.yml file to help you do this.

 9. Further extend your sub-theme.

    Discover further ways to extend your sub-theme by reading
    Drupal 8's Theme Guide online at: https://www.drupal.org/theme-guide/8
