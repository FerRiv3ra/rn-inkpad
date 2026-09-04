---
sidebar_position: 1
title: Getting Started
---

# Getting Started

## Overview

RN Inkpad was developed with the goal of making it easier to create user interfaces that work and look the same regardless of the `platform` it runs on.

## Installation

- Open a Terminal in your project's folder and run:

```bash npm2yarn
npm install rn-inkpad
```

- That is it: **rn-inkpad has zero dependencies**. Icons are provided by you (lucide, @expo/vector-icons, your own SVGs…), see the [Icons](./components/icon) page.

- Optional: wrap your app in a [ThemeProvider](./theming) to change the default colors once. Every component also accepts `testID` and accessibility props, see [Accessibility & testing](./accessibility).

## Extra

- Example app with every component: [example/](https://github.com/FerRiv3ra/rn-inkpad/tree/main/example).
