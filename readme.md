# QDOM

No framework as framework

## Setup

- npm install -g typescript
- npm install -g parcel-bundler

## Features

QDOM is a starter kit for creating your own dependency free web app. Thanks to Typescript and a handful of well designed patterns it provides a surprisingly feature rich set of capabilities without the use of libraries.

Includes:

- ✓ Html templating
- ✓ Css generation
- ✓ State Management
- ✓ Functional Components
- ✓ Stateful Components

Not Included:

- X Testing (try Cypress)

## Concepts

### Html templating

Html templating is handled through "hyperscript"-esque syntax using a function called `el`. Assisted by Typescript it provides auto-completion intellisense for html tags and their attributes. Here's an example:

This:

```
el('ul', {id:'list-id'})(
  el('li')('item 1'),
  el('li')('item 2')
  el('li')('item 3')
)
```

Generates this:

```
<ul id="list-id">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

### Css generation

Existing somewhere between [CSS in JS](https://cssinjs.org) and [Tailwind](http://tailwindcss.com), qdom generates small atomic composable css classes (called "atoms") on the fly. This allows you to declaratively attach behavior to elements which greatly assists in the creation of an internal design system that is easily maintanable, themeable, etc. It uses Typescript to provide auto-completion intellisense for css properties and maps them to an object where you can easily compose them in your code (using more auto-completion!).

This:

```
// Styles on page
const atoms = {
  'color_black': ['color', 'black'],
  'color_red_on_hover:hover': ['color', 'red'],
};
const cls = style<typeof atoms>(atoms);
```

Generates this css:

```
.color_black { color: black; }
.color_red_on_hover:hover { color: red; }
```

And then using it in a component like this:

```
el('h1', {class:'color_black color_red_on_hover'})('Hello world')
```

Generates html that turns red on hover:

```
<h1 class="color_black color_red_on_hover">Hello World</h1>
```

### State Management

### Functional Components

### Stateful Components

```

```
