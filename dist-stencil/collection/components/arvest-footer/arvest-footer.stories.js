import { ArvestGroup } from '../../global/ts/storybookGrouping';
import arvestFooterArgs from './args/arvest-footer.args';
export default {
  title: `${ArvestGroup}/Footer`,
  argTypes: Object.assign({}, arvestFooterArgs),
  parameters: {
    layout: 'fullscreen'
  }
};
const TemplateFooter = ({ withnav }) => `
    <arvest-footer withnav="${withnav}">
        <arvest-footer-content>
            <arvest-typography slot="header" variant="navigation" color="white">
            Investments and insurance products:
            </arvest-typography>
            <li slot="list-item" class="list-item">
            <arvest-typography variant="caption" color="white">
                Not a deposit
            </arvest-typography>
            </li>
            <li slot="list-item">
            <arvest-typography variant="caption" color="white">
                Not guaranteed by the bank or its affiliates
            </arvest-typography>
            </li>
            <li slot="list-item">
            <arvest-typography variant="caption" color="white">
                Not FDIC-insured, and not insured by any federal
                government agency
            </arvest-typography>
            </li>
            <li slot="list-item">
            <arvest-typography variant="caption" color="white">
                May go down in value
            </arvest-typography>
            </li>
        </arvest-footer-content>
        <arvest-footer-content>
          <arvest-typography slot="header" variant="navigation" color="white">
            Product & service providers
          </arvest-typography>
          <li slot="list-item" class="list-item">
            <arvest-typography variant="caption" color="white">
              Investment and trust products and services are provided by Arvest
              Investments, Inc., doing business as Arvest Wealth Management,
              member FINRA/SIPC, an SEC-registered investment adviser and a
              subsidiary of Arvest Bank. The Investment Management Group is the
              investment advisory group of Arvest Wealth Management.
            </arvest-typography>
          </li>
          <li slot="list-item">
            <arvest-typography variant="caption" color="white">
              Securities are offered and cleared through Pershing, LLC, a BNY
              Mellon company, member NYSE/SIPC.
            </arvest-typography>
          </li>
          <li slot="list-item">
            <arvest-typography variant="caption" color="white">
              Insurance products are made available through Arvest Insurance,
              Inc., which is registered as an insurance agency. Arvest Insurance
              products are underwritten by unaffiliated insurance companies.
            </arvest-typography>
          </li>
        </arvest-footer-content>
    </arvest-footer>
`;
export const Footer = TemplateFooter.bind({});
Footer.args = {
  withnav: true
};
