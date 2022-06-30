# arvest-nav-microsite



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description                              | Type     | Default                                                                                                                                                                                                                                                                         |
| ---------------- | ---------------- | ---------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `activeindex`    | `activeindex`    | Active tab that has the underline        | `number` | `0`                                                                                                                                                                                                                                                                             |
| `navData`        | --               | Navigation data array  *                 | `INav`   | `navData`                                                                                                                                                                                                                                                                       |
| `searchbarlinks` | `searchbarlinks` | Frequently asked questions for searchbar | `string` | ``[     {"label":"Find my routing number", "href":"https://arvest.com"},     {"label":"Apply for a loan", "href":"https://arvest.com"},     {"label":"Open an account", "href":"https://arvest.com"},     {"label":"Order / reorder checks", "href":"https://arvest.com"}   ]`` |


## Events

| Event                    | Description | Type                   |
| ------------------------ | ----------- | ---------------------- |
| `showMobileNavMicrosite` |             | `CustomEvent<boolean>` |


## Dependencies

### Depends on

- [arvest-logo](../arvest-logo)
- [arvest-icon](../arvest-icon)
- [arvest-typography](../arvest-typography)
- [arvest-searchbar](../arvest-searchbar)
- [arvest-nav-main-menu](../arvest-nav-main-menu)

### Graph
```mermaid
graph TD;
  arvest-nav-microsite --> arvest-logo
  arvest-nav-microsite --> arvest-icon
  arvest-nav-microsite --> arvest-typography
  arvest-nav-microsite --> arvest-searchbar
  arvest-nav-microsite --> arvest-nav-main-menu
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
  style arvest-nav-microsite fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

All components ©2021 Arvest. All rights reserved.
