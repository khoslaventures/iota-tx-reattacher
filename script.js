var reattachBtn = document.getElementById("reattach-btn");

function genNewAddr()
{
    reattachBtn.click();
    setTimeout(function() { reattachBtn.click(); }, 1000);
}

reattachBtn.click();
setTimeout(function() { reattachBtn.click(); }, 1000);

function stop()
{
    console.log("\n\n\nOK, will now stop after this final attach has been completed!\n\n\n");
}
