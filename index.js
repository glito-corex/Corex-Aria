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
function rmv() {
    if (document.body) {
        //set entry point to the content
        const corexembedremovecontentUI = document.querySelectorAll("#adCtn, #menuBarEl, #perchance-error-indicator, #minimalModeMenuBtn, #perchanceConsoleEl, #mainModelTextEditorCtn, #mainOutputTemplateEditorCtn");         

        //use entry point for remove content
        corexembedremovecontentUI.forEach(el => el.remove());

        //set mutationObserver 
        const observer = new MutationObserver(function () {
            //set entry point to the content
            const corexembedremovecontentUI = document.querySelectorAll("#adCtn, #menuBarEl, #perchance-error-indicator, #minimalModeMenuBtn, #perchanceConsoleEl, #mainModelTextEditorCtn, #mainOutputTemplateEditorCtn");

            //use entry point for remove content
            corexembedremovecontentUI.forEach(el => el.remove());
        });

        //set the observe
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        return;
    }
    //Set the loop
    setTimeout(rmv, 10);
}

//call function (attendreBody)
rmv();