import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PropertyInformation from './PropertyInformation';

function buildStory(attrs){
    const propertyInformation = {
        typeOfProperty: 'Single family',
        sizeOfProperty: '1000 sq/ft',
        ...attrs
    };
    return <PropertyInformation {...propertyInformation}/>
}

storiesOf('PropertyInformation', module)
    .addDecorator(story => (
        <div>{story()}</div>
    ))
    .add('editable information', () => buildStory({editable: true}))
    .add('not editable information', () => buildStory({editable: false}));