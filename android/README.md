# Corex Aria - Build Commands

## Install EAS CLI
```bash
npm install -g eas-cli
```

## Login to Expo
```bash
eas login
```

## Configure Project (without Git)
```powershell
$env:EAS_NO_VCS=1
eas build:configure
```

## Build Preview APK (for website)
```powershell
$env:EAS_NO_VCS=1
eas build -p android --profile preview
```

One line version:
```powershell
$env:EAS_NO_VCS=1; eas build -p android --profile preview
```

## Build Production AAB (for Play Store)
```powershell
$env:EAS_NO_VCS=1
eas build -p android --profile production
```

One line version:
```powershell
$env:EAS_NO_VCS=1; eas build -p android --profile production
```
