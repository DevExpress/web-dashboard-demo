# Web Dashboard Application on Angular

The following application contains the DevExpress Dashboard Component for Angular. The client side is hosted on the GitHub Pages and gets data from the server side that hosts on DevExpress.com.

**Demo:** https://devexpress.github.io/web-dashboard-demo/


![demo-image-main](images/demo-image-main.png)


The Web Dashboard can be rendered on the client side, with data supplied by an ASP.NET Core / ASP.NET MVC backend. This allows you to do the following:

- Publish a Web Dashboard as part of an Angular application.
- Integrate the Web Dashboard into anything that supports HTTP requests (e.g., websites, web applications). See the following demo for details: [DevExpress Dashboard Demo](https://devexpress.github.io/web-dashboard-demo/)).
- Use the Web Dashboard with [DevExtreme](https://js.devexpress.com) client-side widgets to create responsive web apps.

> Web Dashboard components are available for both [Angular](https://docs.devexpress.com/Dashboard/400409) and [React](https://docs.devexpress.com/Dashboard/400683), but you can also create a [JavaScript Web Dashboard](https://github.com/devexpress/web-dashboard-demo) application.


## Demo Structure
This demo application uses the following DevExpress npm packages:
- `devexpress-dashboard`
- `devexpress-dashboard-angular`
- `@devexpress/analytics-core`
- `devextreme devextreme-angular`

When you create your own application with a Dashboard Angular component, ensure that the following requirements are met:

- The script version on the client side should match the library version (including the minor version) on the server side.
- The DevExpress npm package versions should be identical (major and minor versions should be the same).

The client part is an Angular application, where the `DxDashboardControlModule` module is used. Take a look at the following files:

- [app.module.ts](./src/app/app.module.ts)

  Imports the `DxDashboardControlModule` module.
- [app.component.html](./src/app/app.component.html)

  Embeds the `dx-dashboard-control` component.
- [app.component.ts](./src/app/app.component.ts)

  Contains the application logic.
  
 The server side of this project is an ASP.NET Core application hosted on DevExpress.com (`https://demos.devexpress.com/services/dashboard/api`).
  
 ## Documentation

- [Get Started: How to Create a Dashboard Angular Application](https://docs.devexpress.com/Dashboard/400322?v=20.2)
- [Client-Side Configuration (Angular)](https://docs.devexpress.com/Dashboard/400409?v=20.2)
- [Server-Side Configuration (ASP.NET Core)](https://docs.devexpress.com/Dashboard/119166?v=20.2)
- [Server-Side Configuration (ASP.NET MVC)](https://docs.devexpress.com/Dashboard/119500?v=20.2)

## License

These files are distributed under the **MIT** license (free and open-source), but can only be used with a commercial DevExpress Dashboard software product. You can [review the license terms](https://www.devexpress.com/Support/EULAs/NetComponents.xml) or [download a free trial version](https://go.devexpress.com/DevExpressDownload_UniversalTrial.aspx) of the Dashboard suite at [DevExpress.com](https://www.devexpress.com).
