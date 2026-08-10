# ilw-page

## Overview

This component is used to manage major areas inside an HTML page. 

The version 2 equivalent is the il-page and the "il-formatted" class. 

The ilw-page is intended to hold other components. 

The ilw-page will manage margins appropriately for any component or block that isn't marked with the ilw-width-full class. Some components are built specifically to allow to break these margins and go full width. 

The ilw-page will not manage margins for the header and footer slots. 

The ilw-page elevates the header slot's z-index to 300 to allow dropdown menus to override any other items in the main slot. The main slot and footer slot do not have z-index set, and are assumed to be 0. 

Attributes include:

  * expanded - boolean, if true, there will be margins between the unmarked slot and header/footer

Classes include

  * ilw-font - boolean, if the page uses the Illinois default fonts
  * ilw-format - boolean, if the page uses the Illinois default fonts and colors. 
  * ilw-margin - boolean, if the page uses the Illinois default margins. Note that this will prevent horizontal scrolling on the page. 

`ilw-font` and `ilw-format` will change:

  * Headings
  * Lists
  * Inline formatting, such as emphasis and hyperlinks

Slots include

  * header
  * footer


```
-------------------------------------------------------------------------
|                                 header                                |
|_______________________________________________________________________|
|                                                                       |
|                                                                       |
|                                                                       |
|                                (unnamed)                              |
|                                                                       |
|                                                                       |
|                                                                       |
|_______________________________________________________________________|
|                                                                       |
|                                 footer                                |
|                                                                       |
-------------------------------------------------------------------------
```


## Contact Team

jonker@illinois.edu

## NPM Install

None yet, still in alpha.

## Files

None yet, still in alpha.

## Code Examples

```
<ilw-page>
  <header slot="header"></header>
  <main></main>
  <footer slot="footer"></footer>
</ilw-page>
```

```
<ilw-page illinois="true">
  <il-header slot="header"></il-header>
  <main>
   <ilw-breadcrumbs><ilw-breadcrumbs>
   <ilw-hero><ilw-hero>
   <ilw-call-to-action><ilw-call-to-action>
  </main>
  <il-footer slot="footer"></il-footer>
</ilw-page>
```

## Accessibility Notes and Use

Ensure that you are putting the slots in semantic order and that you are either using components that have semantic areas, or you are manually inserting semantic areas. 

Note that this does not change the body tag. You may need to manually add styles to set the body margin and padding to 0. 

## External references

https://www.nngroup.com/articles/golden-ratio-ui-design/
https://gridlover.net/try




## Theme/Dark Mode

The application supports theming to allow users to switch between light and dark modes when Dark Mode is enabled for the website.

Theme configuration is controlled globally using data attributes applied at the root level of the document.

Attributes include:
  
* data-dark-mode-enabled – boolean, determines whether Dark Mode is available for the page
  * true – Dark Mode is supported and the user can toggle between light and dark modes
  * false – Dark Mode is not supported; the Dark Mode option is disabled and an informational message is displayed

* data-theme – string, defines the active theme for the page
  * light – default light mode
  * dark – dark mode

If data-dark-mode-enabled is set to false, the Dark Mode checkbox is disabled and the user is informed that Dark Mode is not supported on the website.

If no theme is explicitly set, the application defaults to light mode (or may follow system preferences if system theme support is implemented).

User interaction through the Dark Mode checkbox updates the data-theme attribute dynamically when Dark Mode is enabled.

The selected theme may be persisted (for example, using local storage) to maintain the user’s preference across sessions.


Steps to define the rules to have modes:

### Use theme attributes on root element.
Theme availability and the active theme are controlled using data attributes applied at the root level.

Example:

```
<!-- Dark Mode supported --> 
<html data-dark-mode-enabled="true" data-theme="light"> 
```

```
<!-- Dark Mode supported and currently enabled --> 
<html data-dark-mode-enabled="true" data-theme="dark"> 
```

```
<!-- Dark Mode not supported --> 
<html data-dark-mode-enabled="false" data-theme="light"> 
```

### Define how Dark Mode works

* Attribute name: data-dark-mode-enabled
* Possible values: 
  * true - Dark Mode is supported and the user can toggle between light and dark modes
  * false - Dark Mode is not supported. The Dark Mode checkbox is disabled and an informational message is displayed

### Theme override behaviour

* When Dark Mode is enabled:
  * User selection from the Dark Mode checkbox updates the data-theme attribute dynamically.
  * The selected theme overrides the default theme preference.
* When Dark Mode is disabled:
  * The Dark Mode checkbox is disabled.
  * The application remains in Light Mode.

### Persistence

The selected theme may be stored in localStorage so the user's preference is maintained across browser sessions.

localStorage is a simple way to save small pieces of data in the user's browser so the data remains available when the user returns.

```
localStorage.setItem("theme", "dark");
```

* Override behavior:
  * User toggle overrides default
* Persistence:
  * Stored in localStorage (local storage - is a simple way to save small pieces of data in the users browser so it's still there the next time they come back.)

Save the theme in javascript:

```
lovalStorage.setItem("theme", "dark");
```

Retrieve the saved theme in JavaScript:

```
const theme = localStorage.getItem("theme");

```

### Decide CSS strategy (WIP)
