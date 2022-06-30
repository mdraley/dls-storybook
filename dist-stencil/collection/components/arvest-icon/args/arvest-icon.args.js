import { getDescription } from '../../../global/ts/globalDocs';
export const arvestGeneralIconOptions = [
  'app-store',
  'arrow-down-light',
  'arrow-left-light',
  'arrow-right-light',
  'arrow-up-light',
  'bell-light',
  'calendar-light',
  'check-circle-light',
  'check-regular',
  'chevron-down-light',
  'chevron-left-light',
  'chevron-right-light',
  'chevron-up-light',
  'clock-light',
  'cog-light',
  'comment-alt-light',
  'credit-card-blank-light',
  'desktop-light',
  'edit-light',
  'ellipsis-h-light',
  'ellipsis-v-light',
  'envelope-light',
  'exclamation-circle-light',
  'exclamation-triangle-light',
  'external-link-light',
  'eye-light',
  'eye-slash-light',
  // 'fdic',
  'file-alt-light',
  'file-pdf-light',
  'folder-light',
  'globe-light',
  'home-alt-light',
  'info-circle-light',
  'layer-group-light',
  'lender',
  'lock-light',
  'lock-open-light',
  'map-marker-light',
  'menu',
  'minus-light',
  'money-bill-wave-alt-light',
  'money-check-edit-light',
  'play-light',
  'play-store',
  'plus-circle-light',
  'plus-light',
  'question-circle-light',
  'question-circle-light-hover',
  'search-light',
  'seedling-light',
  'shield-light',
  'sign-in-light',
  'spinner-third-duotone',
  'th-large-light',
  'times-light',
  'transfer-light',
  'universal-access-light',
  'usd-circle-light',
  'user-alt-light',
  'zelle'
];
export const arvestLegendIconOptions = [
  'credit-card-blank-regular',
  'desktop-regular',
  'dollar-sign-regular',
  'envelope-regular',
  'file-regular',
  'layer-group-regular',
  'lock-regular',
  'money-check-edit-regular',
  'seedling-regular',
  'shield-regular',
  'user-regular'
];
export const arvestTopNavIconOptions = [
  'bookmark-regular',
  'check-circle-regular',
  'comment-alt-regular',
  'folder-regular',
  'globe-regular',
  'map-marker-regular',
  'percentage-regular',
  'phone-alt-regular',
  'question-circle-regular',
  'suitcase-regular',
  'universal-access-regular'
];
export const arvestSocialIconOptions = [
  'arvest-share',
  'dot-facebook',
  'linkedin',
  'twitter',
  'youtube'
];
export const arvestTertiaryIconOptions = [
  'arrow-left-solid',
  'arrow-right-solid',
  'chevron-down-solid'
];
const webcomponent = 'arvest-icon', arvestIconArgs = {
  'icon': {
    'description': getDescription(webcomponent, 'icon'),
    'control': {
      'type': 'select',
      'options': arvestGeneralIconOptions.
        concat(arvestLegendIconOptions).
        concat(arvestTopNavIconOptions).
        concat(arvestSocialIconOptions).
        concat(arvestTertiaryIconOptions)
    }
  }
};
export default arvestIconArgs;
