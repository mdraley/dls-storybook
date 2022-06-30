# arvest-button-tertiary



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                            | Type                                                         | Default     |
| ---------- | ---------- | ---------------------------------------------------------------------- | ------------------------------------------------------------ | ----------- |
| `disabled` | `disabled` | If true, disable mouse events                                          | `boolean`                                                    | `undefined` |
| `label`    | `label`    | Text inside the button. Must not be more than 30 characters [Required] | `string`                                                     | `'Button'`  |
| `type`     | `type`     | Change the type of the component using the ButtonType enum             | `ButtonType.button \| ButtonType.reset \| ButtonType.submit` | `undefined` |


## Shadow Parts

| Part           | Description |
| -------------- | ----------- |
| `"btn-custom"` |             |


## Dependencies

### Used by

 - [arvest-card-3-col-text-cta](../arvest-card-3-col-text-cta)
 - [arvest-card-3-col-text-image](../arvest-card-3-col-text-image)
 - [arvest-card-3-col-text-img-cta](../arvest-card-3-col-text-image-cta)
 - [arvest-card-4-col-text-glyph](../arvest-card-4-col-text-glyph)
 - [arvest-card-4-col-text-image](../arvest-card-4-col-text-image)
 - [arvest-card-4-col-text-img-cta](../arvest-card-4-col-text-img-cta)
 - [arvest-card-fullwidth](../arvest-card-fullwidth)

### Depends on

- [arvest-typography](../arvest-typography)
- [arvest-icon](../arvest-icon)

### Graph
```mermaid
graph TD;
  arvest-button-tertiary --> arvest-typography
  arvest-button-tertiary --> arvest-icon
  arvest-card-3-col-text-cta --> arvest-button-tertiary
  arvest-card-3-col-text-image --> arvest-button-tertiary
  arvest-card-3-col-text-img-cta --> arvest-button-tertiary
  arvest-card-4-col-text-glyph --> arvest-button-tertiary
  arvest-card-4-col-text-image --> arvest-button-tertiary
  arvest-card-4-col-text-img-cta --> arvest-button-tertiary
  arvest-card-fullwidth --> arvest-button-tertiary
  style arvest-button-tertiary fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

All components ©2021 Arvest. All rights reserved.
