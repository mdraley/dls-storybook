# arvest-category-card-grid



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute | Description                      | Type    | Default    |
| ---------- | --------- | -------------------------------- | ------- | ---------- |
| `cardData` | --        | Data Array to render Cards with. | `any[]` | `cardData` |


## Dependencies

### Depends on

- [arvest-debit-credit-card-selector](../arvest-debit-credit-card-selector)
- [arvest-typography](../arvest-typography)
- [arvest-icon](../arvest-icon)

### Graph
```mermaid
graph TD;
  arvest-debit-credit-card-grid --> arvest-debit-credit-card-selector
  arvest-debit-credit-card-grid --> arvest-typography
  arvest-debit-credit-card-grid --> arvest-icon
  arvest-debit-credit-card-selector --> arvest-button-primary
  arvest-button-primary --> arvest-typography
  arvest-button-primary --> arvest-spinner
  style arvest-debit-credit-card-grid fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

All components ©2021 Arvest. All rights reserved.
