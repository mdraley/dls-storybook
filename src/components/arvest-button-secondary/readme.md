# arvest-button-secondary



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                             | Type                                                         | Default     |
| ----------- | ----------- | ----------------------------------------------------------------------- | ------------------------------------------------------------ | ----------- |
| `disabled`  | `disabled`  | If true, disable mouse events                                           | `boolean`                                                    | `undefined` |
| `isad`      | `isad`      | If true, button will use ad style                                       | `boolean`                                                    | `undefined` |
| `isloading` | `isloading` | If true, spinner for loading                                            | `boolean`                                                    | `undefined` |
| `issmall`   | `issmall`   | If true, button size will be smaller                                    | `boolean`                                                    | `undefined` |
| `label`     | `label`     | Text inside the button. Must not be more than 25 characters. [Required] | `string`                                                     | `'Button'`  |
| `type`      | `type`      | Change the type of the component using the ButtonType enum              | `ButtonType.button \| ButtonType.reset \| ButtonType.submit` | `undefined` |
| `width`     | `width`     | Custom button width                                                     | `number`                                                     | `undefined` |


## Shadow Parts

| Part           | Description |
| -------------- | ----------- |
| `"btn-custom"` |             |


## Dependencies

### Used by

 - [arvest-ad-five-col](../arvest-ad-five-col)
 - [arvest-ad-four-col](../arvest-ad-four-col)
 - [arvest-button-two-up](../arvest-button-two-up)
 - [arvest-card-fullwidth-product-features](../arvest-card-fullwidth-product-features)
 - [arvest-nav-main-menu](../arvest-nav-main-menu)

### Depends on

- [arvest-typography](../arvest-typography)
- [arvest-spinner](../arvest-spinner)

### Graph
```mermaid
graph TD;
  arvest-button-secondary --> arvest-typography
  arvest-button-secondary --> arvest-spinner
  arvest-ad-five-col --> arvest-button-secondary
  arvest-ad-four-col --> arvest-button-secondary
  arvest-button-two-up --> arvest-button-secondary
  arvest-card-fullwidth-product-features --> arvest-button-secondary
  arvest-nav-main-menu --> arvest-button-secondary
  style arvest-button-secondary fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

All components ©2021 Arvest. All rights reserved.
