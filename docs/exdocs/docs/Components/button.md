---
id: buttons
title: Buttons
sidebar_label: Buttons
slug: /Compoents/buttons
---

<div class="lead">
Use Swarup's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
</div>

## Examples
Very basic button which has a color of your theme
The .sw-btn classes are designed to be used with the `<button>` element. However, you can also use these classes on 
`<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

<div class="example-showcase">
	<button class="sw-btn f-18">Button</button>
</div>

```html
<button class="sw-btn">Button</button>
```

## Types of Buttons
Swarup includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.

<div class="example-showcase">
	<button class="sw-btn f-18">Button</button>
	<button class="sw-btn f-18 sw-btn-outline">Button</button>
	<button class="sw-btn f-18 sw-btn-text">Button</button>
	<button class="sw-btn f-18 sw-btn-secondary ">Button</button>
	<button class="sw-btn f-18 sw-btn-surface ">Button</button>
</div>

```html
<button class="sw-btn">Button</button>
<button class="sw-btn sw-btn-outline">Button</button>
<button class="sw-btn sw-btn-text">Button</button>
<button class="sw-btn sw-btn-secondary ">Button</button>
<button class="sw-btn sw-btn-surface ">Button</button>
```

## Button Sizes

<div class="example-showcase">
	<button class="sw-btn f-18 sw-btn-lg">Button</button>
	<button class="sw-btn f-18 sw-btn-md">Button</button>
	<button class="sw-btn f-18">Button</button>
	<button class="sw-btn f-12 sw-btn-sm">Button</button>
</div>

```html
<button class="sw-btn sw-btn-lg">Button</button>
<button class="sw-btn sw-btn-md">Button</button>
<button class="sw-btn">Button</button>
<button class="sw-btn sw-btn-sm">Button</button>
```



## Button Dropdown

### Default Button Dropdown
<div class="example-showcase">
	<div class="sw-btn-group">
	    <button class="sw-btn f-18">Button</button>
	    <div tabindex="2" class="sw-dropdown">
	        <button class="sw-btn sw-droplabel sw-btn-dropdown f-18 " ></button>
	        <div class="sw-dropmenu ">
	            <a href="https://www.google.com" class="sw-item">Apple</a>
	            <div class="sw-item">Grapes</div>
	            <div class="sw-item">Watermelon</div>
	            <div class="sw-item">Watermelon</div>
	        </div>
	    </div>
	</div>
</div>

```html
<div class="sw-btn-group">
    <button class="sw-btn">Button</button>
    <div tabindex="2" class="sw-dropdown">
        <button class="sw-btn sw-droplabel sw-btn-dropdown " ></button>
        <div class="sw-dropmenu ">
            <a href="https://www.google.com" class="sw-item">Apple</a>
            <div class="sw-item">Grapes</div>
            <div class="sw-item">Watermelon</div>
            <div class="sw-item">Watermelon</div>
        </div>
    </div>
</div>
```

### Button Dropdown Lefted

<div class="example-showcase">
    <div class="sw-btn-group">
        <div tabindex="2" class="sw-dropdown">
            <button class="sw-btn sw-droplabel sw-btn-dropdown f-18 " ></button>
            <div class="sw-dropmenu ">
                <a href="https://www.google.com" class="sw-item">Apple</a>
                <div class="sw-item">Grapes</div>
                <div class="sw-item">Watermelon</div>
                <div class="sw-item">Watermelon</div>
            </div>
        </div>
        <button class="sw-btn f-18">Button</button>
    </div>
</div>

```html
<div class="sw-btn-group">
    <div tabindex="2" class="sw-dropdown">
        <button class="sw-btn sw-droplabel sw-btn-dropdown " ></button>
        <div class="sw-dropmenu ">
            <a href="https://www.google.com" class="sw-item">Apple</a>
            <div class="sw-item">Grapes</div>
            <div class="sw-item">Watermelon</div>
            <div class="sw-item">Watermelon</div>
        </div>
    </div>
    <button class="sw-btn">Button</button>
</div>
```

### Button Dropdown Double Sided

<div class="example-showcase">
	<div class="sw-btn-group">
		<div tabindex="2" class="sw-dropdown">
		    <button class="sw-btn sw-droplabel sw-btn-dropdown f-18 " ></button>
		    <div class="sw-dropmenu ">
		        <a href="https://www.google.com" class="sw-item">Apple</a>
		        <div class="sw-item">Grapes</div>
		        <div class="sw-item">Watermelon</div>
		        <div class="sw-item">Watermelon</div>
		    </div>
		</div>
		<button class="sw-btn f-18">Button</button>
		<div tabindex="2" class="sw-dropdown">
		    <button class="sw-btn sw-droplabel sw-btn-dropdown f-18 " ></button>
		    <div class="sw-dropmenu ">
		        <a href="https://www.google.com" class="sw-item">Apple</a>
		        <div class="sw-item">Grapes</div>
		        <div class="sw-item">Watermelon</div>
		        <div class="sw-item">Watermelon</div>
		    </div>
		</div>
	</div>
</div>

```html
<div class="sw-btn-group">
    <div tabindex="2" class="sw-dropdown">
        <button class="sw-btn sw-droplabel sw-btn-dropdown " ></button>
        <div class="sw-dropmenu ">
            <a href="https://www.google.com" class="sw-item">Apple</a>
            <div class="sw-item">Grapes</div>
            <div class="sw-item">Watermelon</div>
            <div class="sw-item">Watermelon</div>
        </div>
    </div>
    <button class="sw-btn">Button</button>
    <div tabindex="2" class="sw-dropdown">
        <button class="sw-btn sw-droplabel sw-btn-dropdown " ></button>
        <div class="sw-dropmenu ">
            <a href="https://www.google.com" class="sw-item">Apple</a>
            <div class="sw-item">Grapes</div>
            <div class="sw-item">Watermelon</div>
            <div class="sw-item">Watermelon</div>
        </div>
    </div>
</div>
```

## Button Groups

<div class="example-showcase">
    <div class="sw-btn-group">
        <button class="sw-btn f-18">Hello</button>
        <button class="sw-btn f-18">Hello</button>
        <button class="sw-btn f-18">Hello</button>
    </div>
</div>

```html
<div class="sw-btn-group">
	<button class="sw-btn">Hello</button>
	<button class="sw-btn">Hello</button>
	<button class="sw-btn">Hello</button>
</div>
```

<div class="example-showcase">
	<div class="sw-btn-group">
	    <button class="sw-btn f-18">Hello</button>
	    <button class="sw-btn f-18 sw-btn-secondary">Hello</button>
	    <button class="sw-btn f-18">Hello</button>
	</div>
</div>

```html
<div class="sw-btn-group">
    <button class="sw-btn">Hello</button>
    <button class="sw-btn sw-btn-secondary">Hello</button>
    <button class="sw-btn">Hello</button>
</div>
```


<div class="example-showcase">
	<div class="sw-btn-group">
        <button class="sw-btn f-18 sw-btn-secondary">Hello</button>
        <button class="sw-btn f-18">Hello</button>
        <button class="sw-btn f-18 sw-btn-secondary">Hello</button>
    </div>
</div>

```html
<div class="sw-btn-group">
    <button class="sw-btn sw-btn-secondary">Hello</button>
    <button class="sw-btn">Hello</button>
    <button class="sw-btn sw-btn-secondary">Hello</button>
</div>
```


## Button Shadow

<div class="example-showcase">
	<button class="sw-btn f-18 raised">Hello</button>
</div>

```html
<button class="sw-btn raised">Hello</button>
```

## Class Table

| Classes 		  	|	Description 														|
|-------------------|-----------------------------------------------------------------------|
| .sw-btn * 	  	| Base Button class creates a default solid button						|
| .sw-btn-outline 	| For button with outline 												|
| .sw-btn-text	  	| For button with no outline											|
| .sw-btn-secondary | For button with secondary color 										|
| .sw-btn-surface 	| For button with surface color 										|
| .sw-btn-lg 		| For large size button													|
| .sw-btn-md	 	| For medium size buttons bigger than default							|
| .sw-btn-sm	 	| For small size button													|
| .sw-btn-group	 	| For grouping serval button together 									|
| .sw-btn-dropdown 	| For adding dropdown functionalite to normal button					|
