import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Address from './Address';

function buildStory(attrs){
    const address = {
        street: '123 test',
        city: 'Allentown',
        state: 'PA',
        zip: '12345',
        ...attrs
    };
    return <Address {...address}/>
}

storiesOf('Address', module)
    .addDecorator(story => (
        <div>{story()}</div>
    ))
    .add('editable address', () => buildStory({editable: true}))
    .add('not editable address', () => buildStory({editable: false}));