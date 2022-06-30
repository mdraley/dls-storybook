# arvest-nav



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description              | Type     | Default     |
| ---------------- | ---------------- | ------------------------ | -------- | ----------- |
| `activeindex`    | `activeindex`    |                          | `number` | `0`         |
| `navData`        | --               | Navigation data array  * | `INav`   | `navData`   |
| `searchbarlinks` | `searchbarlinks` |                          | `string` | `undefined` |


## Events

| Event               | Description | Type                   |
| ------------------- | ----------- | ---------------------- |
| `showMobileNavMain` |             | `CustomEvent<boolean>` |


## Dependencies

### Depends on

- [arvest-logo](../arvest-logo)
- [arvest-icon](../arvest-icon)
- [arvest-typography](../arvest-typography)
- [arvest-button-secondary-reverse](../arvest-button-secondary-reverse)
- [arvest-searchbar](../arvest-searchbar)
- [arvest-nav-main-menu](../arvest-nav-main-menu)

### Graph
```mermaid
graph TD;
  arvest-nav --> arvest-logo
  arvest-nav --> arvest-icon
  arvest-nav --> arvest-typography
  arvest-nav --> arvest-button-secondary-reverse
  arvest-nav --> arvest-searchbar
  arvest-nav --> arvest-nav-main-menu
  arvest-button-secondary-reverse --> arvest-typography
  arvest-button-secondary-reverse --> arvest-spinner
  arvest-searchbar --> arvest-icon
  arvest-searchbar --> arvest-typography
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
  style arvest-nav fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

All components ©2021 Arvest. All rights reserved.
