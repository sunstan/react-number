# React-number

A react component for numbers input based on radix-ui.

### Basic structure

```jsx
import { Number, NumberDecrement, NumberField, NumberIncrement, NumberValue } from './Number';

<Number>
  <NumberField>
    <NumberIncrement />
    <NumberValue />
    <NumberDecrement />
  </NumberField>
</Number>
```

### Enhanced structure

```jsx
import { Number, NumberDecrement, NumberField, NumberIncrement, NumberValue } from './Number';

<Number>
  {({ focused, invalid }) => (
    <NumberField>
      <NumberIncrement />
      <NumberValue />
      <NumberDecrement />
    </NumberField>
  )}
</Number>
```
