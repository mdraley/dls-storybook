import {getDescription} from '../../../global/ts/globalDocs';
import {TooltipPosition, TooltipCta, TooltipTrigger} from '../../../global/ts/enums';

const webcomponent = 'arvest-tooltip',

  arvestTooltip = {
    'position': {
      'description': getDescription(
        webcomponent,
        'position'
      ),
      'control': 'select',
      'options': [
        TooltipPosition.topLeft,
        TooltipPosition.topCenter,
        TooltipPosition.topRight,
        TooltipPosition.bottomLeft,
        TooltipPosition.bottomCenter,
        TooltipPosition.bottomRight
      ]
    },
    'arrow': {
      'description': getDescription(
        webcomponent,
        'arrow'
      ),
      'control': 'boolean'
    },
    'message': {
      'description': getDescription(
        webcomponent,
        'message'
      ),
      'control': 'text'
    },
    'trigger': {
      'description': getDescription(
        webcomponent,
        'trigger'
      ),
      'control': 'select',
      'options': [
        TooltipTrigger.hover,
        TooltipTrigger.click
      ]
    },
    'ctaType': {
      'description': getDescription(
        webcomponent,
        'ctaType'
      ),
      'control': 'select',
      'options': [
        TooltipCta.text,
        TooltipCta.button
      ]
    },
    'ctaTitle': {
      'description': getDescription(
        webcomponent,
        'ctaTitle'
      ),
      'control': 'text'
    },
    'ctaUrl': {
      'description': getDescription(
        webcomponent,
        'ctaUrl'
      ),
      'control': 'text'
    }
  };

export default arvestTooltip;
