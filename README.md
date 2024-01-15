# نرم‌افزار خلاصه‌کننده مقالات - شورت لاگ

![لوگو شورت لاگ](./src/assets/logo.png)

## توضیحات

این پروژه یک خلاصه‌کننده مقاله با استفاده از شورت لاگ است. این برنامه به شما امکان می‌دهد تا لینک یک مقاله را وارد کرده و خلاصه آن را دریافت کنید. همچنین، تاریخچه لینک‌های وارد شده را نیز ذخیره می‌کند.

## اجزاء

### Hero Component

کامپوننت `Hero` وظیفه نمایش هدر (header) صفحه اصلی را دارد. این شامل لوگو، دکمه گیت‌هاب، و دو عنوان متنی است.

```jsx
// ./src/components/Hero.jsx
import { logo } from "../assets";

const Hero = () => {
  // ...
};

export default Hero;
```
````

### Demo Component

کامپوننت `Demo` برای ارائه یک واسط کاربری برای وارد کردن لینک مقاله و نمایش خلاصه آن استفاده می‌شود.

```jsx
// ./src/components/Demo.jsx
import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  // ...
};

export default Demo;
```

## نصب و اجرا

1. کلون ریپازیتوری:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. نصب وابستگی‌ها:

   ```bash
   cd your-repo
   npm install
   ```

3. اجرا:

   ```bash
   npm start
   ```

## مجوز

[MIT License](./LICENSE)

EN README

# Article Summarizer - ShortLog

![ShortLog Logo](./src/assets/logo.png)

## Description

This project is an article summarizer using ShortLog. The application allows you to enter the link to an article and retrieve its summary. It also keeps a history of entered links.

## Components

### Hero Component

The `Hero` component is responsible for displaying the main header of the home page. It includes a logo, a GitHub button, and two text titles.

```jsx
// ./src/components/Hero.jsx
import { logo } from "../assets";

const Hero = () => {
  // ...
};

export default Hero;
```

### Demo Component

The `Demo` component provides a user interface for entering an article link and displaying its summary.

```jsx
// ./src/components/Demo.jsx
import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  // ...
};

export default Demo;
```

## Installation and Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Install dependencies:

   ```bash
   cd your-repo
   npm install
   ```

3. Run:

   ```bash
   npm start
   ```

## License

[MIT License](./LICENSE)

```

```