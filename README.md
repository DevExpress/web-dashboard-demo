# Html JavaScript Web Dashboard Application

The following application is the DevExpress [HTML JavaScript Web Dashboard]((https://www.devexpress.com/Support/Center/Question/Details/T532254)). The JavaScript client side is hosted on the [GitHub Pages](https://pages.github.com), while the ASP.NET MVC / Web API server side - on [DevExpress.com](https://www.devexpress.com).

**See in action:**

https://devexpress.github.io/web-dashboard-demo/

![html-dashboard-demo](https://user-images.githubusercontent.com/17986517/35871357-13796742-0b75-11e8-9b12-a90de4813b96.png)

## Benefits of This Approach

The Web Dashboard can now be easily rendered on the client-side, while having data fed to it by an ASP.NET MVC / Web API back-end. This means you can:

- Integrate a dashboard into any place that supports HTTP requests (e.g., see the [GitHub Pages Demo](https://devexpress.github.io/web-dashboard-demo/)).
- Publish Web Dashboard as a part of applications based on Angular, Knockout, Vue and similar frameworks.
- Use the Dashboard side-by-side with [DevExtreme](https://js.devexpress.com) client-side widgets to create highly responsive web apps.


## Requirements
The application requires the following DevExpress npm packages:

```cmd
npm install devexpress-dashboard devextreme @devexpress/analytics-core
```

Make sure the following requirements are met:

- The script version on the client should match with libraries version on the server up to a minor version.
- Versions of the DevExpress npm packages should be identical (their major and minor versions should be the same).

## Client-Side Configuration

The **index.html** file contains the client-side configuration and consists of the following main parts:

1. The attached stylesheet and scripts inside the `<head>` section:

	```html
	<head>
		<!-- Styles -->
		<link href="styles/dx.common.css" rel="stylesheet" />
		<link href="styles/dx.light.css" rel="stylesheet" />
		<link href="styles/dx-analytics.common.css" rel="stylesheet" />
		<link href="styles/dx-analytics.light.css" rel="stylesheet" />
		<link href="styles/dx-querybuilder.css" rel="stylesheet" />
		<link href="styles/dx-dashboard.light.min.css" rel="stylesheet" />

		<!-- 3rd-party dependencies -->
		<script src="scripts/jquery.min.js"></script>
		<script src="scripts/jquery-ui.min.js"></script>
		<script src="scripts/knockout-latest.js"></script>
		<script src="scripts/ace/ace.js"></script>
		<script src="scripts/ace/ext-language_tools.js"></script>
		<script src="scripts/ace/theme-dreamweaver.js"></script>
		<script src="scripts/ace/theme-ambiance.js"></script>

		<script src="scripts/dx.all.js"></script>
		<script src="scripts/dx-analytics-core.min.js"></script>
		<script src="scripts/dx-querybuilder.min.js"></script>
		<script src="scripts/dx-dashboard.min.js"></script>
	</head>
	```

2. A `<div>` element with the specified Web Dashboard ID and position inside the `<body>` section. The control is rendered inside this div element.
```html
<body>
    <div id="container" style="position: absolute; top: 0;left: 0; bottom: 0; right: 0;">
    </div>
</body>
```
  
3. A script inside the `<head>` section. The script contains the Web Dashboard control settings.

```html
<head>
    <!-- ...-->
    <script>
        window.onload = function () {
            // Adds required HTML resources to the DOM.
            DevExpress.Dashboard.ResourceManager.embedBundledResources();

            // Creates a new Web Dashboard control with specified settings.
            var dashboardControl = new DevExpress.Dashboard.DashboardControl(document.getElementById("container"), {
                // Configures an URL where the Web Dashboard's server-side is hosted.
                endpoint: "https://demos.devexpress.com/services/dashboard/api",
                workingMode: "Viewer",
                extensions: {
                    "dashboard-panel": function (control) { return new DevExpress.Dashboard.DashboardPanelExtension(control); }
                }
            });

            // Renders the created dashboard.
            dashboardControl.render();
        }
    </script>
</head>
```

To get more details about the Web Dashboard server-side and client-side configuration, refer to [HTML JavaScript Dashboard Control](https://docs.devexpress.com/Dashboard/119108/building-the-designer-and-viewer-applications/web-dashboard/html-javascript-dashboard-control).

## Server-Side Configuration

The server-side of this project is hosted on the **DevExpress.com**. See the [Get Started](https://docs.devexpress.com/Dashboard/12136/Getting-Started) section of the [DevExpress Dashboard Documentation](https://docs.devexpress.com/Dashboard/12049/Dashboard) to learn how to create the Web Dashboard application:

- [Create an ASP.NET MVC Dashboard](https://docs.devexpress.com/Dashboard/116313/get-started/build-web-dashboard-applications/create-an-aspnet-mvc-dashboard-application)
- [Create an ASP.NET Core 2.0+ Dashboard](https://docs.devexpress.com/Dashboard/119284/get-started/build-web-dashboard-applications/create-an-aspnet-core-2-dashboard-application)
- [Create an ASP.NET Core 3.0 Dashboard](https://docs.devexpress.com/Dashboard/401369/get-started/build-web-dashboard-applications/create-an-aspnet-core-3-dashboard-application)

## License

These files are distributed under the **MIT** license (free and open-source), but can only be used with a commercial DevExpress Dashboard software product. You can [review the license terms](https://www.devexpress.com/Support/EULAs/NetComponents.xml) or [download a free trial version](https://go.devexpress.com/DevExpressDownload_UniversalTrial.aspx) of the Dashboard suite at [DevExpress.com](https://www.devexpress.com).

## Get More Information

- [Get Started with the current approach](https://docs.devexpress.com/Dashboard/119109/get-started/build-web-dashboard-applications/create-an-html-javascript-dashboard-application-global-namespaces)
- [Get Started with the modular approach](https://docs.devexpress.com/Dashboard/400322/get-started/build-web-dashboard-applications/create-an-html-javascript-dashboard-application-modular-approach-angular)
- [DevExpress Blog post](https://community.devexpress.com/blogs/news/archive/2017/08/02/ctp-client-side-web-dashboard-integrated-with-angular-knockout-vue-and-more.aspx)
- [DevExpress Dashboard documentation](https://docs.devexpress.com/Dashboard/12049/Dashboard)
