addons.registerSettings("settings", (dialog) => {
    dialog.content = `<p>Name:</p><textarea class="luduvoTextarea" role="nameInput">${localStorage.csnameSettings || ""}</textarea>`;
    dialog.onConfirm = ()=>{
        localStorage.setItem("csnameSettings", dialog.dialog.querySelector(`[role="nameInput"]`).value)
    }
})

addons.navigationAddon("/dashboard", e => {
    if (localStorage.csnameSettings) document.querySelector(".text-3xl.md\\:text-5xl.font-bold").innerHTML = (localStorage.csnameSettings)
})
