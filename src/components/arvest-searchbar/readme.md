# arvest-searchbar



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                    | Type      | Default     |
| ---------- | ----------- | ------------------------------ | --------- | ----------- |
| `isMobile` | `is-mobile` |                                | `boolean` | `false`     |
| `links`    | `links`     | Array of links as json string. | `string`  | `undefined` |


## Events

| Event               | Description                                                                       | Type                  |
| ------------------- | --------------------------------------------------------------------------------- | --------------------- |
| `searchValueChange` | Event emitted when the value entered into search changes. Contains search string. | `CustomEvent<string>` |


## Dependencies

### Used by

 - [arvest-nav](../arvest-nav)
 - [arvest-nav-microsite](../arvest-nav-microsite)

### Depends on

- [arvest-icon](../arvest-icon)
- [arvest-typography](../arvest-typography)

### Graph
```mermaid
graph TD;
  arvest-searchbar --> arvest-icon
  arvest-searchbar --> arvest-typography
  arvest-nav --> arvest-searchbar
  arvest-nav-microsite --> arvest-searchbar
  style arvest-searchbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

All components ©2021 Arvest. All rights reserved.
