---
id: forms
title: Forms
sidebar_label: Forms
slug: /Compoents/forms
---

<div class="lead">
	Forms are useful for getting input from user.
</div>

## Normal Types of Inputs

### Underline Input

<div class="example-showcase">
	<div class="sw-form-input-wrapper">
		<label class="sw-form-input-label" for="name">Username</label>
		<input id="name" type="text" class="sw-form-input" />
	</div>
</div>

```html
<div class="sw-form-input-wrapper">
	<label class="sw-form-input-label" for="name">Username</label>
	<input id="name" type="text" class="sw-form-input" />
</div>
```

### Bordered Input

<div class="example-showcase">
	<div class="sw-form-input-wrapper">
	    <label class="sw-form-input-label" for="name">Username</label>
	    <input id="name" type="text" class="sw-form-input-bordered" />
	</div>
</div>

```html
<div class="sw-form-input-wrapper">
    <label class="sw-form-input-label" for="name">Username</label>
    <input id="name" type="text" class="sw-form-input-bordered" />
</div>
```

### Bordered Textarea

<div class="example-showcase">
	<div class="sw-form-input-wrapper">
	    <label class="sw-form-input-label" for="name">Username</label>
	    <textarea id="name" type="text" class="sw-form-input-bordered" cols="30" rows="4"></textarea>
	</div>
</div>

```html
<div class="sw-form-input-wrapper">
    <label class="sw-form-input-label" for="name">Username</label>
    <textarea id="name" type="text" class="sw-form-input-bordered" cols="30" rows="4"></textarea>
</div>
```
## Invalid Types of Inputs

### Undeline Invalid Input

<div class="example-showcase">
	<div class="sw-form-input-wrapper">
	    <label class="sw-form-input-label" for="name">Username</label>
	    <input id="name" type="text" class="sw-form-input is-invalid" />
	    <span class="invalid-text"> This is not a valid input </span>
	</div>
</div>

```html
<div class="sw-form-input-wrapper">
    <label class="sw-form-input-label" for="name">Username</label>
    <input id="name" type="text" class="sw-form-input is-invalid" />
    <span class="invalid-text"> This is not a valid input </span>
</div>
```
### Invalid Bordered Input

<div class="example-showcase">
	<div class="sw-form-input-wrapper">
	    <label class="sw-form-input-label" for="name">Username</label>
	    <input id="name" type="text" class="sw-form-input-bordered is-invalid" />
	    <span class="invalid-text"> This is not a valid input </span>
	</div>
</div>

```html
<div class="sw-form-input-wrapper">
    <label class="sw-form-input-label" for="name">Username</label>
    <input id="name" type="text" class="sw-form-input-bordered is-invalid" />
    <span class="invalid-text"> This is not a valid input </span>
</div>
```

### Invalid Textarea

<div class="example-showcase">
	<div class="sw-form-input-wrapper">
	    <label class="sw-form-input-label" for="name">Username</label>
	    <textarea id="name" type="text" class="sw-form-input-bordered is-invalid" cols="30" rows="4"></textarea>
	    <span class="invalid-text"> This is not a valid input </span>
	</div>
</div>

```html
<div class="sw-form-input-wrapper">
    <label class="sw-form-input-label" for="name">Username</label>
    <textarea id="name" type="text" class="sw-form-input-bordered is-invalid" cols="30" rows="4"></textarea>
    <span class="invalid-text"> This is not a valid input </span>
</div>
```

## Checkbox Input

<div class="sw-checkbox m-5">
    <input type="checkbox" name="s" id="s" />
    <label for="s" class="sw-check"></label>
</div>

```html
<div class="sw-checkbox m-5">
    <input type="checkbox" name="check1" id="check1" />
    <label for="check1" class="sw-check"></label>
</div>
```