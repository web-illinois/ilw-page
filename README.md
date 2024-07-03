# ilw-page

## Overview

This component is used to manage major areas inside an HTML page. 

The version 2 equivalent is the il-page and the "il-formatted" class. 

The ilw-page is intended to hold other components. 

The ilw-page will manage margins appropriately for any component or block that isn't marked with the ilw-width-full class. Some components are built specifically to allow to break these margins and go full width. 

The ilw-page will not manage margins for the header and footer slots. 

Attributes include:

  * illinois - boolean, if the page uses the Illinois default branding
  * expanded - boolean, if true, there will be margins between the unmarked slot and header/footer

If *illinois* is enabled, it will provide styling for the following HTML elements:

  * Paragraphs
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
  <header slot="header"></header>
  <main>
   <ilw-breadcrumbs><ilw-breadcrumbs>
   <ilw-hero><ilw-hero>
   <ilw-call-to-action><ilw-call-to-action>
  </main>
  <footer slot="footer"></footer>
</ilw-page>
```

## Accessibility Notes and Use

Ensure that you are putting the slots in semantic order and that you are either using components that have semantic areas, or you are manually inserting semantic areas. 

Note that this does not change the body tag. You may need to manually add styles to set the body margin and padding to 0. 

## External references

https://www.nngroup.com/articles/golden-ratio-ui-design/
https://gridlover.net/try

