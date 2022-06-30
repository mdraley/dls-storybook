import { ArvestGroup } from '../../global/ts/storybookGrouping';
import { arvestGeneralIconOptions, arvestLegendIconOptions, arvestTopNavIconOptions, arvestSocialIconOptions, arvestTertiaryIconOptions } from './args/arvest-icon.args';
export default {
  'title': `${ArvestGroup}/Icons/Icon Grid`
};
export const IconsGrid = () => {
  const iconsGeneral = arvestGeneralIconOptions.map((iconName) => {
    return `
        <div style="
          width: 180px;
          height: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #ddd;
          margin: 5px;
          padding: 10px;
          border-radius: 5px;
          background-color: #eeeeee;
        ">
            <div style="display: flex; flex-direction: column; text-align: center;">
                <div style="width: 140px;"><arvest-icon icon=${iconName} /></div>
                <div style="font-size: 12px;">${iconName}</div>
            </div>
        </div>
    `;
  });
  const iconsLegend = arvestLegendIconOptions.map((iconName) => {
    return `
        <div style="
          width: 180px;
          height: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #ddd;
          margin: 5px;
          padding: 10px;
          border-radius: 5px;
          background-color: #eeeeee;
        ">
            <div style="display: flex; flex-direction: column; text-align: center;">
                <div style="width: 140px;"><arvest-icon icon=${iconName} /></div>
                <div style="font-size: 12px;">${iconName}</div>
            </div>
        </div>
    `;
  });
  const iconsTopNav = arvestTopNavIconOptions.map((iconName) => {
    return `
        <div style="
          width: 180px;
          height: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #ddd;
          margin: 5px;
          padding: 10px;
          border-radius: 5px;
          background-color: #eeeeee;
        ">
            <div style="display: flex; flex-direction: column; text-align: center;">
                <div style="width: 140px;"><arvest-icon icon=${iconName} /></div>
                <div style="font-size: 12px;">${iconName}</div>
            </div>
        </div>
    `;
  });
  const iconsSocial = arvestSocialIconOptions.map((iconName) => {
    return `
        <div style="
          width: 180px;
          height: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #ddd;
          margin: 5px;
          padding: 10px;
          border-radius: 5px;
          background-color: #eeeeee;
        ">
            <div style="display: flex; flex-direction: column; text-align: center;">
                <div style="width: 140px;"><arvest-icon icon=${iconName} /></div>
                <div style="font-size: 12px;">${iconName}</div>
            </div>
        </div>
    `;
  });
  const iconsTertiary = arvestTertiaryIconOptions.map((iconName) => {
    return `
        <div style="
          width: 180px;
          height: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #ddd;
          margin: 5px;
          padding: 10px;
          border-radius: 5px;
          background-color: #eeeeee;
        ">
            <div style="display: flex; flex-direction: column; text-align: center;">
                <div style="width: 140px;"><arvest-icon icon=${iconName} /></div>
                <div style="font-size: 12px;">${iconName}</div>
            </div>
        </div>
    `;
  });
  return '<div style="display: flex; flex-direction: row; flex-wrap: wrap;"><h1 style="width: 100%;">General</h1>' + iconsGeneral.join('') + '</div>' +
    '<div style="display: flex; flex-direction: row; flex-wrap: wrap;"><h1 style="width: 100%;">Legend</h1>' + iconsLegend.join('') + '</div>' +
    '<div style="display: flex; flex-direction: row; flex-wrap: wrap;"><h1 style="width: 100%;">Top Nav</h1>' + iconsTopNav.join('') + '</div>' +
    '<div style="display: flex; flex-direction: row; flex-wrap: wrap;"><h1 style="width: 100%;">Social</h1>' + iconsSocial.join('') + '</div>' +
    '<div style="display: flex; flex-direction: row; flex-wrap: wrap;"><h1 style="width: 100%;">Tertiary</h1>' + iconsTertiary.join('') + '</div>';
};
IconsGrid.argTypes = {
  icon: { control: { disable: true } }
};
