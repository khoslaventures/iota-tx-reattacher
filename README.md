# IOTA Transaction Reattacher

I quickly put together this script after not having my transaciton confirmed on the IOTA tangle when moving it to an exchange.

It's not a headless script, so you'll need the IOTA Wallet (GUI) in order to run this.

## Instructions

On a Mac, run this command to launch the IOTA Wallet with console privleges:
```open /Applications/IOTA\ Wallet.app --args --enableDeveloperConsole```

Once that's done, go to your `History`, and for the transaction that's not confirming, click on `Show Bundle`. From here, copy and paste the contents of `script.js` into the Console and the script will run. Run this for as long as you'd like, but keep in mind IOTA's proof of work is going to leverage a lot of your CPU while this is happening. It might help to select a node such as the ones listed at the top of `iota.dance`.

To stop the script, type `stop()` in the console.