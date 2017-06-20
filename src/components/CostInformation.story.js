import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import CostInformation from './CostInformation';

function buildStory(attr){
    const costInformation = {
        buildingCost: 120000,
        landCost: 30000,
        percentDown: 25,
        amortizationPeriod: 27.5,
        ...attr
    };
    return <CostInformation {...costInformation}/>
}

storiesOf("CostInformation", module)
    .addDecorator(story => (
        <div>{story()}</div>
    ))
    .add('editable information', () => buildStory({editable: true}))
    .add('not editable information', () => buildStory({editable: false}));