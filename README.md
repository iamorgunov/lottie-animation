# LottieAnimation for React

`LottieAnimation` is a lightweight and straightforward React component for adding beautiful animations using Lottie files in your web project.

## Features

- **Simple Integration**: Easily embed Lottie animations.
- **Control Playback**: Configurable loop and autoplay options.
- **Event Handling**: Execute a callback function when the animation completes.
- **Styling**: Apply custom styles and class names.
- **Clean Up**: Automatic cleanup of animations to prevent memory leaks.

## Installation

Install the package via npm:

```
npm install your-package-name
```

or with yarn:

```
yarn add your-package-name
```

Make sure you have `react` and `prop-types` installed in your project as they are peer dependencies of this component.

## Usage

Import the `LottieAnimation` component in your React application and use it as follows:

```
import React from 'react';
import LottieAnimation from 'lottie-animation';

const MyComponent = () => {
  const onComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <LottieAnimation
      animationPath="path-to-your-lottie.json"
      loop={true}
      autoplay={true}
      style={{ width: 200, height: 200 }}
      className="my-custom-class"
      onComplete={onComplete}
    />
  );
};

export default MyComponent;
```

## Props

The following props are available to customize the `LottieAnimation`:

| Prop            | Type       | Default | Description                                           |
|-----------------|------------|---------|-------------------------------------------------------|
| `animationPath` | `string`   |         | **Required.** The path to the Lottie JSON file.       |
| `loop`          | `boolean`  | `true`  | Determines if the animation should loop.              |
| `autoplay`      | `boolean`  | `true`  | Determines if the animation should start automatically. |
| `style`         | `object`   |         | Inline styles for the animation container.            |
| `className`     | `string`   |         | CSS class for the animation container.                |
| `onComplete`    | `function` |         | Callback function when the animation completes.       |

## Contributing

Contributions are always welcome!

## License

Distributed under the MIT License. See `LICENSE` for more information.
