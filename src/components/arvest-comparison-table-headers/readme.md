# arvest-comparison-table-headers



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type    | Default     |
| --------- | --------- | ----------- | ------- | ----------- |
| `headers` | --        |             | `any[]` | `undefined` |


## Events

| Event         | Description | Type                  |
| ------------- | ----------- | --------------------- |
| `slidermoved` |             | `CustomEvent<number>` |


## Dependencies

### Used by

 - [arvest-comparison-table](../arvest-comparison-table)

### Depends on

- [arvest-comparison-table-headercard](../arvest-comparison-table-headercard)
- [arvest-primary-carousel-mobilebtns](../arvest-primary-carousel-mobilebtns)

### Graph
```mermaid
graph TD;
  arvest-comparison-table-headers --> arvest-comparison-table-headercard
  arvest-comparison-table-headers --> arvest-primary-carousel-mobilebtns
  arvest-comparison-table-headercard --> arvest-typography
  arvest-comparison-table-headercard --> arvest-button-primary
  arvest-button-primary --> arvest-typography
  arvest-button-primary --> arvest-spinner
  arvest-comparison-table --> arvest-comparison-table-headers
  style arvest-comparison-table-headers fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

All components ©2021 Arvest. All rights reserved.
