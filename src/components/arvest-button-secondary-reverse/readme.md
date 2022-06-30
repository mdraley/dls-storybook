# arvest-button-secondary-reverse



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                | Type                                                         | Default     |
| ----------- | ----------- | ---------------------------------------------------------- | ------------------------------------------------------------ | ----------- |
| `disabled`  | `disabled`  | If true, disable mouse events                              | `boolean`                                                    | `undefined` |
| `isloading` | `isloading` | If true, spinner for loading                               | `boolean`                                                    | `undefined` |
| `issmall`   | `issmall`   | If true, button size will be smaller                       | `boolean`                                                    | `undefined` |
| `label`     | `label`     | Text inside the button [Required]                          | `string`                                                     | `'Button'`  |
| `type`      | `type`      | Change the type of the component using the ButtonType enum | `ButtonType.button \| ButtonType.reset \| ButtonType.submit` | `undefined` |


## Shadow Parts

| Part           | Description |
| -------------- | ----------- |
| `"btn-custom"` |             |


## Dependencies

### Used by

 - [arvest-footer](../arvest-footer)
 - [arvest-nav](../arvest-nav)

### Depends on

- [arvest-typography](../arvest-typography)
- [arvest-spinner](../arvest-spinner)

### Graph
```mermaid
graph TD;
  arvest-button-secondary-reverse --> arvest-typography
  arvest-button-secondary-reverse --> arvest-spinner
  arvest-footer --> arvest-button-secondary-reverse
  arvest-nav --> arvest-button-secondary-reverse
  style arvest-button-secondary-reverse fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

All components ©2021 Arvest. All rights reserved.
