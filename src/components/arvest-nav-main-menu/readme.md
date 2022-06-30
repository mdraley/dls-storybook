# arvest-nav-mainlink



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute       | Description                                | Type             | Default     |
| ------------- | --------------- | ------------------------------------------ | ---------------- | ----------- |
| `activeIndex` | `active-index`  | Active tab with underline style            | `number`         | `0`         |
| `isLightMode` | `is-light-mode` | If true, change font colors for light mode | `boolean`        | `false`     |
| `navData`     | `nav-data`      | Navigation data array  *                   | `INav \| string` | `undefined` |
| `navType`     | `nav-type`      |                                            | `string`         | `undefined` |


## Dependencies

### Used by

 - [arvest-nav](../arvest-nav)
 - [arvest-nav-microsite](../arvest-nav-microsite)

### Depends on

- [arvest-ad-four-col](../arvest-ad-four-col)
- [arvest-typography](../arvest-typography)
- [arvest-badge](../arvest-badge)
- [arvest-button-secondary](../arvest-button-secondary)
- [arvest-button-primary](../arvest-button-primary)
- [arvest-accordion](../arvest-accordion)

### Graph
```mermaid
graph TD;
  arvest-nav-main-menu --> arvest-ad-four-col
  arvest-nav-main-menu --> arvest-typography
  arvest-nav-main-menu --> arvest-badge
  arvest-nav-main-menu --> arvest-button-secondary
  arvest-nav-main-menu --> arvest-button-primary
  arvest-nav-main-menu --> arvest-accordion
  arvest-ad-four-col --> arvest-typography
  arvest-ad-four-col --> arvest-button-secondary
  arvest-button-secondary --> arvest-typography
  arvest-button-secondary --> arvest-spinner
  arvest-button-primary --> arvest-typography
  arvest-button-primary --> arvest-spinner
  arvest-accordion --> arvest-typography
  arvest-accordion --> arvest-comparison-table-cell
  arvest-accordion --> arvest-icon
  arvest-comparison-table-cell --> arvest-typography
  arvest-nav --> arvest-nav-main-menu
  arvest-nav-microsite --> arvest-nav-main-menu
  style arvest-nav-main-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

All components ©2021 Arvest. All rights reserved.
