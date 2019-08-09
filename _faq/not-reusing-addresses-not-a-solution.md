---
title: "But if you don’t reuse addresses, you’re safe because BTC only exposes the hash of your public key if you have never transferred BTC from that address"
category: misconception
---

## This is not correct. In the transaction you send, you include your public key. The public key is needed to check the signature. As soon as you send your transaction from your device, your public key is exposed on the internet.

You can pretty much distinguish 3 moments on it's journey to confirmation.

- On it's way over the internet from your device to the node(s) it's vulnerable to MITM attacks. At this point of time, that is no problem. There is no incentive to do so because all the info in your transaction is useless for a hacker. But as soon as a quantum computer can derive the private key from the public key, it's gold for hackers. 
- When it arrives at the nodes, it waits in the pool for a miner to add it to a to be mined block. The time it waits here depends on the network capacity vs the amount of transactions that is submitted. When it's overloaded, a transaction can be stuck for a bit until it's picked to be added to a block. (For a bit or for quite some time, this is why transactions take long to be confirmed sometimes.)
- Once added to a block and the miner starts hashing, the blocktime starts out. Now that is 10 min. 

All this time a public key is published and can be obtained. A hijack can be done during all 3 periods. A hijack during the last part, the blocktime, is explained in [this paper](https://arxiv.org/pdf/1710.10377.pdf) For hijacks during blocktime it has to be done within the 10 min blocktime. According to the paper this could be done as early as 2027. But MITM attacks give a way bigger period of time. And when a transaction is waiting to be added to a block the period could be short when BTC is working within it's capacity, but when operating over max capacity this could be an hour or longer. So for these options BTC can be at risk way earlier than 2027.

That goes for any transaction. So for transactions from an unused address or a reused address. Both transactions are the same kind of transactions and can be hijacked during the transaction. Because as soon as you send a transaction, your public key is published and since your transaction is not confirmed instantly there is a window in which your transaction can be hijacked.

**"Okay, but if you don’t reuse your address, you don’t have to worry till there is a real strong quantum computer that can find the pubkey within the 10 min blocktime."**

There are addresses out there with an exposed public key. These addresses don’t have the 10 min time limit. Even if it takes a quantum computer half a year to hack such an address, this will still result in a hack with the negative effects on the BTC price if detected. 
