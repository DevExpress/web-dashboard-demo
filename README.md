# Html JavaScript Web Dashboard Application

The following application demonstrates the DevExpress [HTML JavaScript Web Dashboard]((https://www.devexpress.com/Support/Center/Question/Details/T532254)). The JavaScript client side is hosted on the [GitHub Pages](https://pages.github.com), while the ASP.NET MVC / Web API server side - on [DevExpress.com](https://www.devexpress.com).

**See in action:**

https://devexpress.github.io/web-dashboard-demo/

![html-dashboard-demo](https://user-images.githubusercontent.com/17986517/35871357-13796742-0b75-11e8-9b12-a90de4813b96.png)



## Benefits of This Approach

The Web Dashboard can now be easily rendered on the client-side, while having data fed to it by an ASP.NET MVC / Web API back-end. This means you can:

- Integrate a dashboard into any place that supports HTTP requests (e.g., see the [GitHub Pages Demo](https://devexpress.github.io/web-dashboard-demo/)).
- Publish Web Dashboard as a part of applications based on Angular, Knockout, Vue and similar frameworks.
- Use the Dashboard side-by-side with [DevExtreme](https://js.devexpress.com) client-side widgets to create highly responsive web apps.


## Server-Side Configuration

The server-side of this project is hosted on the **DevExpress.com**. See the [Getting Started](https://docs.devexpress.com/Dashboard/12136/Getting-Started) section of the [DevExpress Dashboard Documentation](https://docs.devexpress.com/Dashboard/12049/Dashboard) to learn how to create the Web Dashboard application:

- [Create an ASP.NET MVC Designer](https://docs.devexpress.com/Dashboard/116313/Getting-Started/Creating-an-ASP-NET-MVC-Dashboard-Designer-Application)
- [Create an ASP.NET Core Designer](https://docs.devexpress.com/Dashboard/119284/getting-started/build-end-user-dashboard-designer-applications/create-an-asp.net-core-designer)

## Client-Side Configuration

The **index.html** file contains the client-side configuration and consists of the following main parts:

1. The attached stylesheet and scripts inside the `<head>` section:
```html
<head>
    <!-- ... -->
    <link href="styles/dx.dashboard-control.bundle.light.css" rel="stylesheet" />
    <script src="scripts/dx.dashboard-control.third-party.min.js"></script>
    <script src="scripts/dx.dashboard-control.bundle.min.js"></script>
</head>
```

2. A `<div>` element with the specified Web Dashboard ID and position inside the `<body>` section. The control is rendered inside this div element.
```html
<body>
   <div id="container" style="position: absolute; left: 0; right: 0; top: 0; bottom: 0">
   </div>
</body>
```
  
3. A script inside the `<head>` section. The script contains the Web Dashboard control settings.

```html
<head>
    <!-- ...-->
    <script>
        window.onload = function () {
            // ...
  
            // Adds required HTML resources to the DOM:
            DevExpress.Dashboard.ResourceManager.embedBundledResources();
            
            // Creates a new Web Dashboard control with the specified ID and settings:
            var dashboardControl = new DevExpress.Dashboard.DashboardControl(document.getElementById("container"), {
                // Configures an URL where the Web Dashboard's server-side is hosted:
                endpoint: "https://demos.devexpress.com/services/dashboard/api",
                workingMode: "Viewer",
                extensions: {
                    "dashboard-panel": (control) => new DevExpress.Dashboard.DashboardPanelExtension(control)
                }
            });
            
            // Renders the created dashboard.
            dashboardControl.render();
        };
    </script>
</head>
```

To get more details about the Web Dashboard server-side and client-side configuration, refer to [HTML JavaScript Dashboard Control](https://docs.devexpress.com/Dashboard/119108/building-the-designer-and-viewer-applications/web-dashboard/html-javascript-dashboard-control).

## License

These files are distributed under the **MIT** license (free and open-source), but can only be used with a commercial DevExpress Dashboard software product. You can [review the license terms](https://www.devexpress.com/Support/EULAs/NetComponents.xml) or [download a free trial version](https://go.devexpress.com/DevExpressDownload_UniversalTrial.aspx) of the Dashboard suite at [DevExpress.com](https://www.devexpress.com).

## Get More Information

- [Getting Started with the current approach](https://docs.devexpress.com/Dashboard/119109/getting-started/build-web-dashboard-applications/create-an-html-javascript-dashboard-application-global-namespaces)
- [Getting Started with the modular approach](https://docs.devexpress.com/Dashboard/400322/getting-started/build-web-dashboard-applications/create-an-html-javascript-dashboard-application-modular-approach)
- [DevExpress Blog post](https://community.devexpress.com/blogs/news/archive/2017/08/02/ctp-client-side-web-dashboard-integrated-with-angular-knockout-vue-and-more.aspx)
- [DevExpress Dashboard documentation](https://docs.devexpress.com/Dashboard/12049/Dashboard)
