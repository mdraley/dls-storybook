import * as Doc from '../../docs/docs';
export const getDoc = (webcomponent) => {
  return Doc.default.components.filter((obj) => obj.tag === webcomponent);
};
export const getProps = (webcomponent) => {
  return getDoc(webcomponent)[0].props;
};
export const getDescription = (webcomponent, propName) => {
  return getProps(webcomponent).filter((obj) => obj.name === propName)[0].docs;
};
export const getDefault = (webcomponent, propName) => {
  return getProps(webcomponent).filter((obj) => obj.name === propName)[0].default;
};
