addons.navigationAddon("/components", // Addon will activate when the user navigates to /components
    () => { // Code to run when the user enters the page
        console.log("hi")
        ui.setPageContent(`
            <div class="container xl:px-16 px-4 md:mx-auto py-12 flex flex-col gap-8">
                <button class="luduvoButton">Button</button>
                <button class="luduvoButton red">Red Button</button>
                <textarea class="luduvoTextarea" placeholder="textarea"></textarea>
                <button class="luduvoButton" role="dbtn">Dialog button</button>
                <button class="luduvoButton red" role="adbtn">Alert dialog button</button>
            </div>
        `);
        ui.main.querySelector(`[role="dbtn"]`).onclick = () => {
            const dialog = new Dialog("Dialog title", "A descriptive description");
            dialog.content = "<p>You can customize the dialog's title, description, and even confirm button text</p>";
            dialog.show();
        }
        ui.main.querySelector(`[role="adbtn"]`).onclick = () => {
            const alert = new Dialog("Alert!", "", "");
            alert.content = "<p>A dialog with no confirm text is just an alert.</p>";
            alert.show();
        }
    }, () => { // Code to run when the user exits the page
        console.log("Left components page")
    }
);
