//index.html load for remove content in root page
//
        //-------------------------------------------------------------
        //Code By Corex Institut (Benjamin Burban) --
        //WebSite - link -> \ https://corexinstitut.netlify.app
        //-------------------------------------------------------------
        //Go home AI Corex Institut
        //WebSite - link -> \ https://corexinstitut.netlify.app/corexai
        //-------------------------------------------------------------
//
//set function (attendreBody)
function attendreBody() {
    if (document.body) {
        //set entry point to the content
        const adCtnncorexariawrappembed = document.getElementById("adCtn");
        const menuBarEllcorexariawrappembed = document.getElementById("menuBarEl");
        const perchancecrxariatycorexariawrappembed = document.getElementById("perchance-error-indicator");
        const minimalModeMenuBtnncorexariawrappembed = document.getElementById("minimalModeMenuBtn");
        const perchanceConsoleElcorexariawrappembed = document.getElementById("perchanceConsoleEl");
        const mainModelTextEditorCtncorexariawrappembed = document.getElementById("mainModelTextEditorCtn");
        const gutter_verticalcorexariawrappembed = document.querySelector('#main .gutter.gutter-vertical');
        const mainOutputTemplateEditorCtncorexariawrappembed = document.getElementById("mainOutputTemplateEditorCtn");
        const statusElcorexariawrappembed = document.getElementById("statusEl");

        //use entry point and remove content
        if (adCtnncorexariawrappembed) {
            adCtnncorexariawrappembed.remove();
        }

        if (menuBarEllcorexariawrappembed) {
            menuBarEllcorexariawrappembed.remove();
        }

        if (perchancecrxariatycorexariawrappembed) {
            perchancecrxariatycorexariawrappembed.remove();
        }

        if (minimalModeMenuBtnncorexariawrappembed) {
            minimalModeMenuBtnncorexariawrappembed.remove();
        }

        if (perchanceConsoleElcorexariawrappembed) {
            perchanceConsoleElcorexariawrappembed.remove();
        }

        if (mainModelTextEditorCtncorexariawrappembed) {
            mainModelTextEditorCtncorexariawrappembed.remove();
        }

        if (gutter_verticalcorexariawrappembed) {
            gutter_verticalcorexariawrappembed.remove();
        }

        if (mainOutputTemplateEditorCtncorexariawrappembed) {
            mainOutputTemplateEditorCtncorexariawrappembed.remove();
        }

        if (statusElcorexariawrappembed) {
            statusElcorexariawrappembed.remove();
        }

        //set mutationObserver 
        const observer = new MutationObserver(function () {
            //set entry point to the content
            const adCtnncorexariawrappembed = document.getElementById("adCtn");
            const menuBarEllcorexariawrappembed = document.getElementById("menuBarEl");
            const perchancecrxariatycorexariawrappembed = document.getElementById("perchance-error-indicator");
            const minimalModeMenuBtnncorexariawrappembed = document.getElementById("minimalModeMenuBtn");
            const perchanceConsoleElcorexariawrappembed = document.getElementById("perchanceConsoleEl");
            const mainModelTextEditorCtncorexariawrappembed = document.getElementById("mainModelTextEditorCtn");
            const gutter_verticalcorexariawrappembed = document.querySelector('#main .gutter.gutter-vertical');
            const mainOutputTemplateEditorCtncorexariawrappembed = document.getElementById("mainOutputTemplateEditorCtn");
            const statusElcorexariawrappembed = document.getElementById("statusEl");

            //use entry point and remove content
            if (adCtnncorexariawrappembed) {
                adCtnncorexariawrappembed.remove();
            }

            if (menuBarEllcorexariawrappembed) {
                menuBarEllcorexariawrappembed.remove();
            }

            if (perchancecrxariatycorexariawrappembed) {
                perchancecrxariatycorexariawrappembed.remove();
            }

            if (minimalModeMenuBtnncorexariawrappembed) {
                minimalModeMenuBtnncorexariawrappembed.remove();
            }

            if (perchanceConsoleElcorexariawrappembed) {
                perchanceConsoleElcorexariawrappembed.remove();
            }

            if (mainModelTextEditorCtncorexariawrappembed) {
                mainModelTextEditorCtncorexariawrappembed.remove();
            }

            if (gutter_verticalcorexariawrappembed) {
                gutter_verticalcorexariawrappembed.remove();
            }

            if (mainOutputTemplateEditorCtncorexariawrappembed) {
                mainOutputTemplateEditorCtncorexariawrappembed.remove();
            }

            if (statusElcorexariawrappembed) {
                statusElcorexariawrappembed.remove();
            }
        });

        //set the observe
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        return;
    }
    //Set the loop
    setTimeout(attendreBody, 10);
}

//call function (attendreBody)
attendreBody();