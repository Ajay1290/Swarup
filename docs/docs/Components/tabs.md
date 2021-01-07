---
id: tabs
title: Tabs
sidebar_label: Tabs
slug: /Compoents/tabs
---

<div className="lead">
    Tabs can be used for inline nvaigation in sites or to show information in a fancy way.
</div>

## Example

<div className="example-showcase">
    <div className="sw-row">
        <div className="sw-col-12">
            <div className="sw-tabs">
                <a className="sw-tab active" tab-target="#apple" >Apple</a>
                <a className="sw-tab" tab-target="#grapes" >Grapes</a>
                <a className="sw-tab" tab-target="#pineapple" >Pineapple</a>
                <a className="sw-tab" tab-target="#watemalon" >Watemalon</a>
            </div>
            <div className="sw-tabs-area">
                <div id="apple" className="sw-tab-content">
                    <h2>Apple</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias repellat cupiditate culpa, a iusto earum, voluptatum, blanditiis delectus sunt commodi quia repudiandae optio voluptatibus repellendus tempora! Modi, nemo quas.</p>
                </div>
                <div id="grapes" className="sw-tab-content">
                    <h2>Grapes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error eos unde nihil provident totam quisquam accusamus consequuntur dolores dignissimos ducimus sint laudantium voluptate voluptatum, nobis aspernatur necessitatibus eum quibusdam.</p>
                </div>
                <div id="pineapple" className="sw-tab-content">
                    <h2>Pineapple</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error eos unde nihil provident totam quisquam accusamus consequuntur dolores dignissimos ducimus sint laudantium voluptate voluptatum, nobis aspernatur necessitatibus eum quibusdam.</p>
                </div>
                <div id="watemalon" className="sw-tab-content">
                    <h2>Watemalon</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error eos unde nihil provident totam quisquam accusamus consequuntur dolores dignissimos ducimus sint laudantium voluptate voluptatum, nobis aspernatur necessitatibus eum quibusdam.</p>
                </div>
           </div>
       </div>
   </div>
</div>

```html
<div className="sw-tabs">
    <a className="sw-tab active" tab-target="#apple" >Apple</a>
    <a className="sw-tab" tab-target="#grapes" >Grapes</a>
    <a className="sw-tab" tab-target="#pineapple" >Pineapple</a>
    <a className="sw-tab" tab-target="#watemalon" >Watemalon</a>
</div>
<div className="sw-tabs-area">
    <div id="apple" className="sw-tab-content">
        <h2>Apple</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div id="grapes" className="sw-tab-content">
        <h2>Grapes</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div id="pineapple" className="sw-tab-content">
        <h2>Pineapple</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div id="watemalon" className="sw-tab-content">
        <h2>Watemalon</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>
```

### Vertical Tabs

<div className="example-showcase">
    <div className="sw-row ">
        <div className="sw-col-4">
            <div className="sw-tabs-vertical">
                <a className="sw-tab active" tab-target="#apple1" >Apple</a>
                <a className="sw-tab" tab-target="#grapes1" >Grapes</a>
                <a className="sw-tab" tab-target="#pineapple1" >Pineapple</a>
                <a className="sw-tab" tab-target="#watemalon1" >Watemalon</a>
            </div>
        </div>
        <div className="sw-col-8">
            <div className="sw-tabs-area">
                <div id="apple1" className="sw-tab-content">
                    <h2>Apple</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias repellat cupiditate culpa, a iusto earum, voluptatum, blanditiis delectus sunt commodi quia repudiandae optio voluptatibus repellendus tempora! Modi, nemo quas.</p>
                </div>
                <div id="grapes1" className="sw-tab-content">
                    <h2>Grapes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error eos unde nihil provident totam quisquam accusamus consequuntur dolores dignissimos ducimus sint laudantium voluptate voluptatum, nobis aspernatur necessitatibus eum quibusdam.</p>
                </div>
                <div id="pineapple1" className="sw-tab-content">
                    <h2>Pineapple</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error eos unde nihil provident totam quisquam accusamus consequuntur dolores dignissimos ducimus sint laudantium voluptate voluptatum, nobis aspernatur necessitatibus eum quibusdam.</p>
                </div>
                <div id="watemalon1" className="sw-tab-content">
                    <h2>Watemalon</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error eos unde nihil provident totam quisquam accusamus consequuntur dolores dignissimos ducimus sint laudantium voluptate voluptatum, nobis aspernatur necessitatibus eum quibusdam.</p>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div className="sw-row ">
    <div className="sw-col-4">
        <div className="sw-tabs-vertical">
            <a className="sw-tab active" tab-target="#apple1" >Apple</a>
            <a className="sw-tab" tab-target="#grapes1" >Grapes</a>
            <a className="sw-tab" tab-target="#pineapple1" >Pineapple</a>
            <a className="sw-tab" tab-target="#watemalon1" >Watemalon</a>
        </div>
    </div>
    <div className="sw-col-8">
        <div className="sw-tabs-area">
            <div id="apple1" className="sw-tab-content">
                <h2>Apple</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div id="grapes1" className="sw-tab-content">
                <h2>Grapes</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div id="pineapple1" className="sw-tab-content">
                <h2>Pineapple</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div id="watemalon1" className="sw-tab-content">
                <h2>Watemalon</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
</div>
```


## ClassName Table

| Classes           |   Description                                                         |
|-------------------|-----------------------------------------------------------------------|
| .sw-tabs *        | Base Tab className creates a default tab                                  |
| .sw-tab           | this stores the tab label                                             |
| .active           | this shows the active tab                                             |
| .sw-tabs-area     | All tab content block goes inside this block                          |
| .sw-tab-content   | All tab content goes inside this block.                               |
