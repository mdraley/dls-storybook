# arvest-ad-five-col



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                                                                                        | Type      | Default                        |
| ----------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------ |
| `bgimage`   | `bgimage`   | Change the background image using bgimage and a full URL as a string. Example: <arvest-ad-five-col bgimage="https://www.arvest.com/someimage.jpg">  The default background is a geometric pattern. | `string`  | `this.defaultbg`               |
| `color`     | `color`     | Change the background color. Color options: cobalt, ocean, navy. Default is cobalt.                                                                                                                | `string`  | `'cobalt'`                     |
| `ctatitle`  | `ctatitle`  | CTA / Button text                                                                                                                                                                                  | `string`  | `'Button'`                     |
| `defaultbg` | `defaultbg` |                                                                                                                                                                                                    | `string`  | `'/assets/images/pattern.svg'` |
| `opacity`   | `opacity`   | Change the opacity of the background image. Use a decimal between 0-1. Default value is 0.5 (50%). [optional]                                                                                      | `string`  | `'0.5'`                        |
| `ratio`     | `ratio`     | Ratio options are 5:2 (52), 2:1 (21)                                                                                                                                                               | `string`  | `'52'`                         |
| `showcta`   | `showcta`   | Turn CTA on/off                                                                                                                                                                                    | `boolean` | `true`                         |
| `url`       | `url`       | CTA / Button URL                                                                                                                                                                                   | `string`  | `'https://www.arvest.com'`     |


## Dependencies

### Depends on

- [arvest-typography](../arvest-typography)
- [arvest-button-secondary](../arvest-button-secondary)

### Graph
```mermaid
graph TD;
  arvest-ad-five-col --> arvest-typography
  arvest-ad-five-col --> arvest-button-secondary
  arvest-button-secondary --> arvest-typography
  arvest-button-secondary --> arvest-spinner
  style arvest-ad-five-col fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

All components ©2021 Arvest. All rights reserved.
