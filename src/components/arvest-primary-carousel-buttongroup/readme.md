# arvest-primary-carousel-buttongroup



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type      | Default     |
| --------------- | ---------------- | ----------- | --------- | ----------- |
| `ismobile`      | `ismobile`       |             | `boolean` | `false`     |
| `slidePosition` | `slide-position` |             | `number`  | `undefined` |
| `slides`        | `slides`         |             | `string`  | `undefined` |


## Events

| Event                       | Description | Type                  |
| --------------------------- | ----------- | --------------------- |
| `primaryCarouselBtnClicked` |             | `CustomEvent<number>` |


## Dependencies

### Used by

 - [arvest-primary-hero-carousel](../arvest-primary-hero-carousel)

### Depends on

- [arvest-primary-carousel-mobilebtns](../arvest-primary-carousel-mobilebtns)
- [arvest-typography](../arvest-typography)

### Graph
```mermaid
graph TD;
  arvest-primary-carousel-buttongroup --> arvest-primary-carousel-mobilebtns
  arvest-primary-carousel-buttongroup --> arvest-typography
  arvest-primary-hero-carousel --> arvest-primary-carousel-buttongroup
  style arvest-primary-carousel-buttongroup fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

All components ©2021 Arvest. All rights reserved.
