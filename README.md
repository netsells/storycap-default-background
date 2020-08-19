# Storycap Background Storybook Decorator

This module syncs up the background of your project with the backgrounds selected in your stories parameters when used with [@storybook/addon-background](https://www.npmjs.com/package/@storybook/addon-backgrounds). 

Follow the [@storybook/addon-background](https://www.npmjs.com/package/@storybook/addon-backgrounds) guide for settings up available backgrounds in your stories. This decorator will simply set the background to the value set as `default: true` in your background options when the story is captured by storycap.

## Installation

```sh
yarn add -D @netsells/storycap-default-background
```

## Usage

Enable globally:

```js
import withDefaultBackground from '@netsells/storycap-default-background';

export const decorators = [
    withDefaultBackground,
];
```

Enable on a per story basis:

```js
import withDefaultBackground from '@netsells/storycap-default-background';
import MyComponent from '../../../components/MyComponent';

// Enable for all stories in this file
export default {
    decorators: [
        withDefaultBackground,
    ],
};

export const myComponent = () => ({
    // ...component
});

// Enable for single story
myComponent.decorators = [
    withDefaultBackground,
];
```

