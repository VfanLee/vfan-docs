# Mixins

## config.scss

```scss
$namespace: 'vf' !default;
$common-separator: '-' !default;
$element-separator: '__' !default;
$modifier-separator: '--' !default;
$state-prefix: 'is-' !default;
```

## function.scss

```scss
@use 'config';

// join var name
// joinVarName(('button', 'text-color')) => '--vf-button-text-color'
@function joinVarName($list) {
  $name: '--' + config.$namespace;
  @each $item in $list {
    @if $item != '' {
      $name: $name + '-' + $item;
    }
  }
  @return $name;
}

// getCssVarName('button', 'text-color') => '--vf-button-text-color'
@function getCssVarName($args...) {
  @return joinVarName($args);
}

// getCssVar('button', 'text-color') => var(--vf-button-text-color)
@function getCssVar($args...) {
  @return var(#{joinVarName($args)});
}

// getCssVarWithDefault(('button', 'text-color'), red) => var(--vf-button-text-color, red)
@function getCssVarWithDefault($args, $default) {
  @return var(#{joinVarName($args)}, #{$default});
}

// bem('block', 'element', 'modifier') => 'vf-block__element--modifier'
@function bem($block, $element: '', $modifier: '') {
  $name: config.$namespace + config.$common-separator + $block;

  @if $element != '' {
    $name: $name + config.$element-separator + $element;
  }

  @if $modifier != '' {
    $name: $name + config.$modifier-separator + $modifier;
  }

  // @debug $name;
  @return $name;
}
```

## mixins.scss

```scss
@mixin utils-clearfix {
  $selector: &;

  @at-root {
    #{$selector}::before,
    #{$selector}::after {
      display: table;
      content: '';
    }
    #{$selector}::after {
      clear: both;
    }
  }
}

@mixin utils-vertical-center {
  $selector: &;

  @at-root {
    #{$selector}::after {
      display: inline-block;
      content: '';
      height: 100%;
      vertical-align: middle;
    }
  }
}

@mixin utils-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@mixin utils-inline-flex-center {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
```
