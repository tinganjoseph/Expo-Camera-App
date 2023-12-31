# Expo Camera Readme

Welcome to the Expo Camera project! This readme will guide you through the setup, features, and usage of the Expo Camera module, which allows you to access the device's camera and capture photos and videos in your Expo applications.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Props](#props)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

## Installation
To get started with the Expo Camera, make sure you have Expo installed in your project. If not, you can install it using:

```bash
npm install -g expo-cli
```

Then, install the Expo Camera module using:

```bash
expo install expo-camera
```

## Usage
The Expo Camera module provides an easy way to integrate camera functionality into your Expo app. Import the `Camera` component from `expo-camera` and use it in your components.

## Components
### Camera
The `Camera` component allows you to display a live camera preview and capture media. It supports various features like switching between front and back cameras, capturing photos, and recording videos.

## Props
The `Camera` component accepts various props to customize its behavior, including:
- `type`: Set the camera type (`front` or `back`).
- `flashMode`: Control the flash mode (`on`, `off`, `auto`, `torch`).
- `onCameraReady`: Callback function when the camera is ready.
- `onMountError`: Callback function if there's an error mounting the camera.

For a full list of props and their details, refer to the [Expo Camera documentation](https://docs.expo.dev/versions/latest/sdk/camera/).



## Contributing
Contributions are welcome! If you find any issues or want to improve the Expo Camera module, feel free to submit pull requests on the [GitHub repository](https://github.com/expo/expo/tree/main/packages/expo-camera).

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

