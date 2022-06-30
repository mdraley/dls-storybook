import {Component, Host, Listen, State, h, FunctionalComponent} from '@stencil/core';
import { CellVariant } from '../../global/ts/enums';

@Component({
  tag: 'arvest-comparison-table',
  styleUrl: 'arvest-comparison-table.css',
  shadow: true
})
export class ArvestComparisonTable {
  @State() slidePosition: 0;

  @Listen('slidermoved')
  renderSingleColum (index: CustomEvent): void {
    this.slidePosition = index.detail;
  }

  render (): FunctionalComponent {
    return (
      <Host>
        <arvest-comparison-table-headers
          headers={[
            {
              cardTitle: 'Preferred Club',
              description: 'Our checking account with the most features',
              cta: 'Get Started'
            },
            {
              cardTitle: 'Arvest Club',
              description:
                'Enjoy free checks, online BillPay and lots of extras',
              cta: 'Get Started'
            },
            {
              cardTitle: 'myBlue®',
              description:
                'Affordable checking with IDProtect® and valuable benefits',
              cta: 'Get Started'
            },
            {
              cardTitle: 'Basic Blue™',
              description: 'A checking account with paper statements',
              cta: 'Get Started'
            },
            {
              cardTitle: 'Free Blue™',
              description: 'A free checking account with eStatements',
              cta: 'Get Started'
            }
          ]}
        />
        <arvest-accordion
          type="table"
          activeCol={this.slidePosition}
          accordiontitle="Fees"
          rowtitles={[
            'Monthly service charge',
            'Balance to waive monthly service charge*',
            'Free Online BillPay*',
            'Free Online BillPay*',
            'Free Online BillPay*'
          ]}
          cols={[
            [
              { variant: CellVariant.singleText,
                data: '$18 unless waived*' },
              {
                variant: CellVariant.nonBulletList,
                data: [
                  'Any of the following:',
                  '• $20,000 consumer deposits or loans, or',
                  '• $25,000 combined consumer loans & deposits, or',
                  '• $100,000 mortgage loans, or',
                  '• $50,000 brokerage assets, or',
                  '• qualifying managed trusts'
                ]
              },
              { variant: CellVariant.checkmark },
              { variant: CellVariant.singleText,
                data: '$30,000 family' },
              {
                variant: CellVariant.singleText,
                data: 'All ages (single wallet or duplicate-style)'
              }
            ],
            [
              { variant: CellVariant.singleText,
                data: '$12' },
              { variant: CellVariant.na },
              { variant: CellVariant.checkmark },
              { variant: CellVariant.singleText,
                data: '$30,000 family' },
              {
                variant: CellVariant.singleText,
                data: 'All ages (single wallet or duplicate-style)'
              }
            ],
            [
              { variant: CellVariant.singleText,
                data: '$6' },
              { variant: CellVariant.na },
              { variant: CellVariant.checkmark },
              {
                variant: CellVariant.singleText,
                data: '$10,000 account holder(s)'
              },
              {
                variant: CellVariant.singleText,
                data:
                  'Ages 62+ (single wallet style, shipping and handling fees apply)'
              }
            ],
            [
              { variant: CellVariant.singleText,
                data: '$3' },
              { variant: CellVariant.na },
              { variant: CellVariant.singleText,
                data: '$0.50/ea' },
              { variant: CellVariant.dash },
              {
                variant: CellVariant.singleText,
                data:
                  'Ages 62+ (single wallet style, shipping and handling fees apply)'
              }
            ],
            [
              { variant: CellVariant.singleText,
                data: '$0' },
              { variant: CellVariant.na },
              { variant: CellVariant.singleText,
                data: '$0.50/ea' },
              { variant: CellVariant.checkmark },
              {
                variant: CellVariant.singleText,
                data:
                  'Ages 62+ (single wallet style, shipping and handling fees apply)'
              }
            ]
          ]}
        />
        <arvest-accordion
          type="table"
          accordiontitle="Features"
          rowtitles={[
            'IDProtect®†',
            'Earns interest',
            'Free debit card',
            'Free online & mobile banking*',
            'Paper or eStatements*'
          ]}
          cols={[
            [
              { variant: CellVariant.checkmark },
              { variant: CellVariant.checkmark },
              { variant: CellVariant.checkmark },
              { variant: CellVariant.checkmark },
              { variant: CellVariant.singleText,
                data: 'Choice' }
            ],
            [
              { variant: CellVariant.checkmark },
              { variant: CellVariant.dash },
              { variant: CellVariant.checkmark },
              { variant: CellVariant.checkmark },
              { variant: CellVariant.singleText,
                data: 'Choice' }
            ],
            [
              { variant: CellVariant.checkmark },
              { variant: CellVariant.checkmark },
              { variant: CellVariant.checkmark },
              { variant: CellVariant.checkmark },
              { variant: CellVariant.singleText,
                data: 'Choice' }
            ],
            [
              { variant: CellVariant.dash },
              { variant: CellVariant.dash },
              { variant: CellVariant.checkmark },
              { variant: CellVariant.checkmark },
              { variant: CellVariant.singleText,
                data: 'Paper' }
            ],
            [
              { variant: CellVariant.dash },
              { variant: CellVariant.checkmark },
              { variant: CellVariant.checkmark },
              { variant: CellVariant.checkmark },
              { variant: CellVariant.singleText,
                data: 'eStatements' }
            ]
          ]}
        />
        <arvest-accordion
          type="table"
          accordiontitle="Benefits"
          rowtitles={['Additional club package benefits']}
          cols={[
            [
              {
                variant: CellVariant.nonBulletList,
                data: [
                  '2 free cashier\'s checks and/or money Orders per day',
                  '1 money market premium rate',
                  '1 savings rate premium',
                  'Safe deposit box discount (one box only)',
                  'Stop pays at no charge',
                  '6 free non-Arvest ATM transactions / statement cycle (ATM owner may charge additional fee)'
                ]
              }
            ],
            [
              {
                variant: CellVariant.nonBulletList,
                data: [
                  '2 free cashier\'s checks and/or money Orders per day',
                  '1 Savings rate premium',
                  'Safe deposit box discount (one box only)',
                  '1 stop pay at no charge per year'
                ]
              }
            ],
            [{ variant: CellVariant.na }],
            [{ variant: CellVariant.na }],
            [{ variant: CellVariant.na }]
          ]}
        />
      </Host>
    );
  }
}
