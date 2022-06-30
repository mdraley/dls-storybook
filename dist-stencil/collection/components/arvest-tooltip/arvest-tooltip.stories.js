import { ArvestGroup } from '../../global/ts/storybookGrouping';
import arvestTooltip from './args/arvest-tooltip.args';
import { TooltipPosition, TooltipCta, TooltipTrigger } from '../../global/ts/enums';
export default {
  'title': `${ArvestGroup}/Tooltip`,
  'argTypes': Object.assign({}, arvestTooltip),
  parameters: {
    layout: 'centered'
  }
};
const TemplateTooltip = ({ position, message, trigger, arrow, ctaType, ctaUrl, ctaTitle }) => `
  <div>
    Lorem ipsum
    <arvest-tooltip
      position="${position}"
      message="${message}"
      trigger="${trigger}"
      arrow="${arrow}"
      cta-type="${ctaType}"
      cta-url="${ctaUrl}"
      cta-title="${ctaTitle}"
    >
      <b>tooltip</b>
    </arvest-tooltip> sit amet.
  </div>
`;
export const Tooltip = TemplateTooltip.bind({});
Tooltip.args = {
  'position': TooltipPosition.topCenter,
  'arrow': true,
  'message': 'Nunc bibendum dignissim',
  'trigger': TooltipTrigger.hover,
  'ctaType': TooltipCta.button,
  'ctaUrl': '#tooltip-button-cta',
  'ctaTitle': 'Open Account'
};
