# arvest-category-card



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description              | Type      | Default     |
| -------------- | --------------- | ------------------------ | --------- | ----------- |
| `bgimage`      | `bgimage`       | URL for background image | `string`  | `undefined` |
| `label`        | `label`         | Label text for card      | `string`  | `undefined` |
| `linkcta`      | `linkcta`       | Link CTA text            | `string`  | `undefined` |
| `selectButton` | `select-button` | Button CTA text          | `string`  | `'Select'`  |
| `showButton`   | `show-button`   | Turn Button on/off       | `boolean` | `undefined` |
| `showLabel`    | `show-label`    | Turn Label on/off        | `boolean` | `undefined` |
| `showLink`     | `show-link`     | Turn Link on/off         | `boolean` | `undefined` |


## Dependencies

### Used by

 - [arvest-debit-credit-card-grid](../arvest-debit-credit-card-grid)

### Depends on

- [arvest-button-primary](../arvest-button-primary)

### Graph
```mermaid
graph TD;
  arvest-debit-credit-card-selector --> arvest-button-primary
  arvest-button-primary --> arvest-typography
  arvest-button-primary --> arvest-spinner
  arvest-debit-credit-card-grid --> arvest-debit-credit-card-selector
  style arvest-debit-credit-card-selector fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

All components ©2021 Arvest. All rights reserved.
