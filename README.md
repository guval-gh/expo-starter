# Expo/React Native Starter

Simple starter for Expo/React Native projects with minimal configuration to start your project.

## Prerequisites

- 🚧 Work in progress...

## Features

- 🚧 Work in progress...

## Getting Started

1. Get the project:

_Don't forget to replace `your-project-name` with your actual project name._

```bash
git clone git@github.com:guval-gh/expo-starter.git your-project-name
cd your-project-name
```

2. Update remote branch:

```bash
git remote set-url origin git@github.com:your-username/your-project-name.git

# To check if the config is ok
git remote -v
```

3. Change the project name in `package.json` and `app.json`:

- `package.json`

```json
{
  "name": "your-project-name"
}
```

- `app.json`

```json
{
  "expo": {
    "name": "Your Project Name",
    "slug": "your-project-name",
    // ...
    "scheme": "your-project-name"
    // ...
  }
}
```

4. Install dependencies:

```bash
yarn install
```

5. Generate the native code:

```bash
npx expo prebuild --clean
```

6. Run projet:

```bash
yarn ios
yarn android
```
