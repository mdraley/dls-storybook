import { JsonDocsComponent, JsonDocsProp } from '@stencil/core/internal';
import * as Doc from '../../docs/docs';

export const getDoc = (webcomponent: string): Array<JsonDocsComponent> => {
  return Doc.default.components.filter((obj) => obj.tag === webcomponent);
};

export const getProps = (webcomponent: string): Array<JsonDocsProp> => {
  return getDoc(webcomponent)[0].props;
};

export const getDescription = (webcomponent: string, propName: string): string => {
  return getProps(webcomponent).filter((obj) => obj.name === propName)[0].docs;
};

export const getDefault = (webcomponent: string, propName: string): string => {
  return getProps(webcomponent).filter((obj) => obj.name === propName)[0].default;
};
