# arvest-form



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                 | Type      | Default     |
| ------------ | ------------- | ------------------------------------------- | --------- | ----------- |
| `action`     | `action`      | Submit URL for action attribute.            | `string`  | `undefined` |
| `buttonText` | `button-text` |                                             | `string`  | `'Submit'`  |
| `inline`     | `inline`      |                                             | `boolean` | `undefined` |
| `method`     | `method`      | Method for action prop ex. "get" or "post". | `string`  | `undefined` |


## Events

| Event        | Description        | Type               |
| ------------ | ------------------ | ------------------ |
| `formSubmit` | Form submit event. | `CustomEvent<any>` |


## Dependencies

### Depends on

- [arvest-button-primary](../arvest-button-primary)

### Graph
```mermaid
graph TD;
  arvest-form --> arvest-button-primary
  arvest-button-primary --> arvest-typography
  arvest-button-primary --> arvest-spinner
  style arvest-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

All components ©2021 Arvest. All rights reserved.
