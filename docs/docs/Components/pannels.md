---
id: pannels
title: Pannels
sidebar_label: Pannels
slug: /Compoents/pannels
---

<div class="lead">
	Pannels are the new components by Swarup which helps you to create more focous on one task
	at a time.
</div>

## Example

Pannel is a parent component and wing is a child components under one pannel components there could be any amount of wing components can exist. Among all wings only wing at a time can have `.show` class and that only wing is visible on site. In each wing there is button with class `.wing-btn` which gets attribute `wing-target` in which we have to place id of particular wing. By pressing this button our currently active wing get disappears and the targeted wing shown on the site.

<div class="example-showcase">
	<div class="sw-panel">
        <div class="sw-wing show" id="wing1">
            <h1>Wing-1</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis esse beatae nemo ratione vel et maxime assumenda alias? Reprehenderit unde, autem cumque atque rerum facere deleniti et cum est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laudantium, accusantium explicabo numquam maxime modi in aliquid quae dolore. Eligendi provident tenetur porro voluptas sequi sit nobis nihil omnis rerum.
            </p>
            <button class="sw-btn wing-btn" wing-target='#wing2'>Next Wing</button>
        </div>
        <div class="sw-wing" id="wing2">
            <h1>Wing-2</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem saepe et temporibus vero recusandae qui ex suscipit mollitia sequi. Cupiditate hic voluptas sequi rem, perferendis porro magni excepturi cum quis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ab at animi in a, natus consequatur earum necessitatibus quidem delectus qui adipisci quasi velit. Eos ipsum quos commodi adipisci sapiente.
            </p>
            <button class="sw-btn wing-btn" wing-target='#wing1'>Previous Wing</button>
            <button class="sw-btn wing-btn" wing-target='#wing3'>Next Wing</button>
        </div>
        <div class="sw-wing" id="wing3">
            <h1>Wing-3</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem saepe et temporibus vero recusandae qui ex suscipit mollitia sequi. Cupiditate hic voluptas sequi rem, perferendis porro magni excepturi cum quis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ab at animi in a, natus consequatur earum necessitatibus quidem delectus qui adipisci quasi velit. Eos ipsum quos commodi adipisci sapiente.
            </p>
            <button class="sw-btn wing-btn" wing-target='#wing2'>Previous Wing</button>
        </div>
    </div>
</div>

```html
<div class="sw-panel">
    <div class="sw-wing show" id="wing1">
        <h1>Wing-1</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis esse beatae nemo ratione vel et maxime assumenda alias? Reprehenderit unde, autem cumque atque rerum facere deleniti et cum est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laudantium, accusantium explicabo numquam maxime modi in aliquid quae dolore. Eligendi provident tenetur porro voluptas sequi sit nobis nihil omnis rerum.
        </p>
        <button class="sw-btn wing-btn" wing-target='#wing2'>Next Wing</button>
    </div>
    <div class="sw-wing" id="wing2">
        <h1>Wing-2</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem saepe et temporibus vero recusandae qui ex suscipit mollitia sequi. Cupiditate hic voluptas sequi rem, perferendis porro magni excepturi cum quis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ab at animi in a, natus consequatur earum necessitatibus quidem delectus qui adipisci quasi velit. Eos ipsum quos commodi adipisci sapiente.
        </p>
        <button class="sw-btn wing-btn" wing-target='#wing1'>Previous Wing</button>
        <button class="sw-btn wing-btn" wing-target='#wing3'>Next Wing</button>
    </div>
    <div class="sw-wing" id="wing3">
        <h1>Wing-3</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem saepe et temporibus vero recusandae qui ex suscipit mollitia sequi. Cupiditate hic voluptas sequi rem, perferendis porro magni excepturi cum quis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ab at animi in a, natus consequatur earum necessitatibus quidem delectus qui adipisci quasi velit. Eos ipsum quos commodi adipisci sapiente.
        </p>
        <button class="sw-btn wing-btn" wing-target='#wing2'>Previous Wing</button>
    </div>
</div>
```

## Class Table

| Classes           |   Description                                                         |
|-------------------|-----------------------------------------------------------------------|
| .sw-panel *       | Base Pannel class creates a default pannel                            |
| .sw-wing          | For the wing block                                                    |
| .show             | this shows the active wing                                            |