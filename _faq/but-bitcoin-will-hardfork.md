---
title: "Bitcoin will just hardfork"
category: misconception
---

## This doesn’t fix the main problem.

What type of hard fork are we talking about? There are a few options to go at it:

**Option 1**

Hard fork with as a result “BTC” becomes --> “BTC with new sig scheme where the old sig scheme is rendered unusable” This would mean all old coins are stuck. They all are on old addresses which only work with the old key pairs and the old signature scheme. THIS IS IMPOSSIBLE.

**Option 2**

Hard fork with as a result BTC = old chain, and QRBTC is new chain 


**Option 2A**

2A Before the hard fork, you will need to register and you can claim your new QRBTC by proving you owned BTC before the time of the fork. Can be done, but what is the value of the QRBTC blockchain and its coins? Not automatically the same as the original BTC. (By the way. How, for example, was the value of BCH established right after the fork?) 

Downsides: 

- You will exclude all users of BTC who didn’t register in time. 
- The value of QRBTC will not be the same as the value of the original BTC. While the value of BTC could decline fast due to the fact the QRBTC is the chain that is pursued as the official chain. So the ones that sell their BTC first, will win. They profit of the top price of BTC, and of the price of QRBTC which will be an extra. But the ones that are late selling their BTC, will sell for a lesser price and might end up netting a loss including the price of QRBTC, so $BTC + $QRBTC might < $BTC before fork.
- This option is not possible when Quantum Computers can already crack ECDSA. Because in that case they could hack the addresses on the original chain and forge registration.

**Option 2B**

After the hard fork, you can claim your QRBTC by proving you own BTC. 

Downsides:
- This has the same downsides as a soft fork. Because eventually anyone with a quantum computer would be able to find the private keys of the old BTC by deriving it from the public keys. That way they could forge ownership and still get the QRBTC through hacking. 
- Also this has the downside of a hard fork where the new chain has a different value then the old chain and the price of the original BTC might decline fast. Crypto is a volatile market with uncertainty, but this would expand that uncertainty hugely.
