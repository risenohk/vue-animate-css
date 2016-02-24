# Usage

## Installation

```
npm install vue-animate-css
```

Add this into your entry file
```
require('vue-animate-css')
```

## Directive
Single animation
```
<p v-animation animate="bounce">Hello World</p>
```

Loop animation
```
<p v-animation animate="bounce" loop>Hello World</p>
```

## Transition

```
<p class="animated" transition="bounce-shake">Hello World</p>
```