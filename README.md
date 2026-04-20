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

The application supports theming to allow users to switch between light and dark modes. 

Theme is controlled globally using data attribute applied at the root level of the document.

Attributes include:

  * data-theme – string, defines the active theme for the page
    * light – default light mode
    * dark – dark mode

If no value is explicitly set, the page will default to light mode (or may follow system preferences if implemented).

User interaction (such as a toggle switch) will update the data-theme attribute dynamically.

The selected theme may be persisted (e.g., using local storage) to maintain the user’s preference across sessions.


Steps to define the rules to have modes:

### Use a single theme attribute on root element.

Example:

```
<html data-theme="light">

```

```

<html data-theme="dark">

```
### Define how dark mode works

Attribute name: data-theme
Possible values: light | dark (extendable)
Default behavior: 
  Use system preference (prefers-color-scheme) OR
  Default to light
Override behavior:
  User toggle overrides default
Persistence:
  Stored in localStorage (local storage - is a simple way to save small pieces of data in the users browser so it's still there the next time they come back.)

Save the theme in javascript:

```
lovalStorage.setItem("theme", "dark");

```

Get the theme in javascript:

```
const theme = localStorage.getItem("theme");

```

### Decide CSS strategy
