---
id: introduction
title: Introduction
sidebar_label: Introduction
slug: /
---

 
Get started with Swarup, the library for building theme-based, text-friendly and full-responsive websites.

## Quick Start
Looking to quickly add Swarup to your project? 
Use jsDelivr, a free open source CDN. 
Using a package manager or need to download the source files? 
Head to the downloads page.

### CSS
Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Ajay1290/Swarup@0.0.4/dist/CSS/swarup.min.css">
```

### JS
Many of our components require the use of JavaScript to function. Specifically, they require our own JavaScript plugins and Popper. Place one of following `<script>` near the end of your pages, right before the closing `</body>` tag, to enable them.
```html
<script src="https://cdn.jsdelivr.net/gh/Ajay1290/Swarup@0.0.4/dist/JS/swarup.min.js"></script>
```

## Starter Template
Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
<<<<<<< HEAD
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Ajay1290/Swarup@0.0.4/dist/CSS/swarup.min.css">
=======
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Ajay1290/Swarup@0.1/dist/CSS/swarup.min.css">
>>>>>>> 78df9401bd112fde0991c579f907e0867f819c10
</head>
<body>
    <h1>Hello World!</h1>


    
<<<<<<< HEAD
    <script src="https://cdn.jsdelivr.net/gh/Ajay1290/Swarup@0.0.4/dist/JS/swarup.min.js"></script>
=======
    <script src="https://cdn.jsdelivr.net/gh/Ajay1290/Swarup@0.1/dist/JS/swarup.min.js"></script>
>>>>>>> 78df9401bd112fde0991c579f907e0867f819c10
</body>
</html>
```