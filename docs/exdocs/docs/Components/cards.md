---
id: cards
title: Cards
sidebar_label: Cards
slug: /Compoents/cards
---

<div class="lead">
	Cards helps you to show your information more breifly and neatly use Image, Text, Graphs etc.
</div>

## Examples

### Default Card With Image

<div class="example-showcase">
	<div class="sw-card">
	    <div class="sw-card-body">
	        <div class="sw-card-title">Card Title</div>
	        <div class="sw-card-subtitle">Card Subtitle</div>
	        <p>
	            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil natus autem aspernatur dignissimos, sed labore officia illo ducimus corrupti magnam, laboriosam enim! Unde quo velit cumque officia sequi vero tenetur.
	        </p>
	        <div class="sw-card-footer">
	            <button class="sw-btn">Learn More</button>
	            <button class="sw-btn mx-3 sw-btn-text">Go There</button>
	        </div>
	    </div>
	</div>
</div>

```html
<div class="sw-card">
    <div class="sw-card-body">
       <div class="sw-card-title">Card Title</div>
       <div class="sw-card-subtitle">Card Subtitle</div>
       <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil natus autem aspernatur dignissimos, sed labore officia illo ducimus corrupti magnam, laboriosam enim! Unde quo velit cumque officia sequi vero tenetur. </p>
       <div class="sw-card-footer">
           <button class="sw-btn">Learn More</button>
           <button class="sw-btn sw-btn-text">Go There</button>
       </div>
	</div>
</div>
```

### Bottom Card Image

<div class="example-showcase">
	<div class="sw-card">
	    <div class="sw-card-body">
	        <div class="sw-card-title">Card Title</div>
	        <div class="sw-card-subtitle">Card Subtitle</div>
	        <p>
	            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil natus autem aspernatur dignissimos, sed labore officia illo ducimus corrupti magnam, laboriosam enim! Unde quo velit cumque officia sequi vero tenetur.
	        </p>
	        <h5 class="sw-card-footer">
	            <button class="sw-btn">Learn More</button>
	        </h5>
	    </div>
	</div>
</div>

```html
<div class="sw-card">
    <div class="sw-card-body">
        <div class="sw-card-title">Card Title</div>
        <div class="sw-card-subtitle">Card Subtitle</div>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil natus autem aspernatur dignissimos, sed labore officia illo ducimus corrupti magnam, laboriosam enim! Unde quo velit cumque officia sequi vero tenetur.
        </p>
        <h5 class="sw-card-footer">
            <button class="sw-btn">Learn More</button>
        </h5>
    </div>
    <img src="#" class="sw-card-img" style="height: 220px;" />
</div>
```

### Overlay Card Image

<div class="example-showcase">
	<div class="sw-card">
	    <div class="sw-card-img-overlay">
	        <div class="sw-card-body">
	            <div class="sw-card-title">Card Title</div>
	            <div class="sw-card-subtitle">Card Subtitle</div>
	            <p>
	                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil natus autem aspernatur dignissimos, sed labore officia illo ducimus corrupti magnam, laboriosam enim! Unde quo velit cumque officia sequi vero tenetur.
	            </p>
	            <h5 class="sw-card-footer">
	                <button class="sw-btn sw-btn-secondary">Learn More</button>
	            </h5>
	        </div>
	    </div>
	</div>
</div>

```html
<div class="sw-card">
    <div class="sw-card-img-overlay">
        <div class="sw-card-body">
            <div class="sw-card-title">Card Title</div>
            <div class="sw-card-subtitle">Card Subtitle</div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil natus autem aspernatur dignissimos, sed labore officia illo ducimus corrupti magnam, laboriosam enim! Unde quo velit cumque officia sequi vero tenetur.
            </p>
            <h5 class="sw-card-footer">
                <button class="sw-btn sw-btn-secondary">Learn More</button>
            </h5>
        </div>
    </div>
</div>
```