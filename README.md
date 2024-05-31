# ilw-page

## Overview

This component is used to manage major areas inside an HTML page. 

The version 2 equivalent is the il-page and the "il-formatted" class. 

The ilw-page is intended to hold other components. 

The ilw-page will manage margins appropriately for any component or block that isn't marked with the ilw-width-full class or that isn't flagged as normally full width (il-content, il-hero, il-page-title). 

Attributes include:

  * enforceTheme (boolean, see below)
  * sidebar (left, right, off, see below)

If *enforceTheme* is enabled, it will provide styling for the following HTML elements:

  * Paragraphs
  * Headings
  * Lists
  * Inline formatting, such as emphasis and hyperlinks

Slots include

  * header
  * first
  * sidebar (in the below graphic, sidebar is set to left)
  * (unnamed)
  * last
  * footer


```
-------------------------------------------------------------------------
|                                 header                                |
|_______________________________________________________________________|
|                                                                       |
|                                  first                                |
|                                                                       |
|_______________________________________________________________________|
|           |                                                           |
|           |                                                           |
|           |                                                           |
|  sidebar  |                    (unnamed)                              |
|           |                                                           |
|           |                                                           |
|           |                                                           |
|__________ | __________________________________________________________|
|                                                                       |
|                                  last                                 |
|                                                                       |
|                                                                       |
|_______________________________________________________________________|
|                                                                       |
|                                 footer                                |
|                                                                       |
-------------------------------------------------------------------------
```

If the sidebar attribute is set to none, then the sidebar slot will be ignored.

There will be no margin changes between the "first", unnamed, and "last" slot. 

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
<ilw-page enforceTheme="true" slot="left">
  <header slot="header"></header>
  <main>
  <div slot="first">
   <ilw-breadcrumbs><ilw-breadcrumbs>
   <ilw-hero><ilw-hero>
  <div>
  <ilw-section-nav slot="sidebar"></ilw-section-nav>
  <ilw-call-to-action slot="last"><ilw-call-to-action>
  </main>
  <footer slot="footer"></footer>
</ilw-page>
```

## Accessibility Notes and Use

Ensure that you are putting the slots in semantic order and that you are either using components that have semantic areas, or you are manually inserting semantic areas. 

Note that this does not change the body tag. You may need to manually add styles to put the body margin and padding to 0. 

## External references

N/A