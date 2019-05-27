/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from "tns-core-modules/data/observable";
import { Page, View } from "tns-core-modules/ui/page";

import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { APP_ROOT_VIEW } from "nativescript-angular/platform-providers";
import { AppModule } from "./app/app.module";

export function onTap(args: EventData) {
    const page: Page = (<any>args.object).page;
    const container: View = page.getViewById("container");

    console.log("Bootstrapping Angular inside: ", container);

    platformNativeScriptDynamic(
        { bootInExistingPage: true },
        [{ provide: APP_ROOT_VIEW, useValue: container }])
        .bootstrapModule(AppModule,);

}