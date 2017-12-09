var genAddrId = genAddrId || undefined;
clearInterval(genAddrId);
var btnAddr = document.getElementById("reattach-btn");

function genNewAddr()
{
    btnAddr.click();
    setTimeout(function() { btnAddr.click(); }, 1000);
}

btnAddr.click();
setTimeout(function() { btnAddr.click(); }, 1000);
var genAddrId = setInterval(genNewAddr, 5000);

function stop()
{
    console.log("\n\n\nOK, will now stop after this final attach has been completed!\n\n\n");
    clearInterval(genAddrId);
}
