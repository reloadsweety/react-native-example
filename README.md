## React Native Course

### Outline

* Setup & Install
* React Native
* React Navigation
* Fetch APIs 
* ListView, FlatList, ScrollView
* Layout
* Integrated with Redux
* Hooks & Function Component

## Setup & Installation

#### 1. Install ruby

```bash
brew install rbenv ruby-build

echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile

rbenv install 2.6.5
rbenv global 2.6.5

ruby -v
```

#### 2. Install cocoapods

```
sudo gem install cocoapods
```

---

## Init project

```
npx react-native init helloRN
```

## Start project

```
cd helloRN
npx react-native run-ios
```

[React Native Base](https://docs.nativebase.io/)

## React Navigation

Installation

```bash
npm install react-navigation react-navigation-stack

npm install react-native-gesture-handler react-native-reanimated react-native-screens
cd ios & pod install
```

## Fetch APIs

Reference website : https://jsonplaceholder.typicode.com/

```
npm install axios
```

### Install React Redux

```bash
npm install redux react-redux
```

## Clear cahced

```
watchman watch-del-all
npm start --reset-cache
rm -rf /tmp/metro-*
```

https://stackoverflow.com/questions/54215731/mongoose-aggregate-lookup-how-to-filter-by-specific-id