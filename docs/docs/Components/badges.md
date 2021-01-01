---
id: badges
title: Badges
sidebar_label: Badges
slug: /Compoents/badges
---

<div class="lead">
	Badges helps to notify user spicifically on component.
</div>

## Examples

### Inline Badge

<div class="example-showcase">
	<button class="sw-btn f-18 sw-btn-surface m-4">
	    Notifications
	    <div class="sw-badge">10</div>
	</button>
</div>

```html
<button class="sw-btn sw-btn-surface m-4">
    Notifications
    <div class="sw-badge">10</div>
</button>
```

### Overlay Badge

<div class="example-showcase">
	<button class="sw-btn f-18 sw-btn-surface m-4">
	    Mail
	    <div class="sw-badge sw-badge-pill sw-badge-overlay rounded" >10</div>
	</button>
</div>

```html
<button class="sw-btn sw-btn-surface m-4">
    Mail
    <div class="sw-badge sw-badge-pill sw-badge-overlay rounded" >10</div>
</button>
```

## Class Table

| Classes 		  	|	Description 														|
|-------------------|-----------------------------------------------------------------------|
| .sw-badge * 	  	| Base Badge class creates a default solid badge						|
| .sw-badge-pill 	| For oval like shape	 												|