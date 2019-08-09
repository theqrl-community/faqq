---
title: "It's going to affect Bitcoin"
category: 'statement'
---

## And this is a problem that needs to be addressed sooner rather than later

- A powerful quantum computer can reverse Bitcoin public keys into private keys in a matter of minutes[^QUANTUMATTACK]
- 36% of all BTC are on addresses with exposed public keys[^EXPOSEDKEYS]
- 100% of addresses can be hacked during transactions[^QUANTUMTX]

[^QUANTUMATTACK]: A powerful quantum computer can reverse Bitcoin public keys into private keys in a matter of minutes

	**Reversing Bitcoin keys:**

	If someone has your public key, they can also calculate your private key, which is unthinkable using even today’s most powerful classical computers. But in the days of quantum computers, the public-private keypair will be the weak link. Quantum computers have the potential to perform specific kinds of calculations significantly faster than any normal computer. Besides that, quantum computers can run algorithms that take fewer steps to get to an outcome, taking advantage of quantum phenomena like quantum entanglement and quantum superposition. So quantum computers can run these certain algorithms that could be used to make calculations that can crack cryptography used today. 

	Most blockchains use Elliptic Curve Digital Signature Algorithm (ECDSA) cryptography. Using a quantum computer, [Shor's algorithm](https://arxiv.org/abs/quant-ph/0301141) can be used to break ECDSA.  Meaning: they can derive the private key from the public key. So if they got your public key (and a quantum computer), then they got your private key and they can create a transaction and empty your wallet.
	
	Additionally, the paper [Quantum Attacks on Bitcoin and how to protect against them](https://arxiv.org/pdf/1710.10377.pdf) states "by our most optimistic estimates, as early as 2027 a quantum computer  could  exist  that  can  break  the  elliptic  curve  signature  scheme  in  less  than  10 minutes, the block time used in Bitcoin."

[^EXPOSEDKEYS]: Exposed public keys

	"So together (as of 2018 June 4): 19% addresses (4,242,958 of 22,275,753) that hold 36% bitcoins (6,080,090 of 17,072,361) reveal their public keys." - [How many bitcoins are vulnerable to a hypothetical quantum attack](https://medium.com/@sashagnip/how-many-bitcoins-are-vulnerable-to-a-hypothetical-quantum-attack-3e59e4172e8)


[^QUANTUMTX]: 100% of the addresses can be hacked during transactions:

	"After a transaction has been broadcast to the network, but before it  is  placed  on  the  blockchain  it  is  at  risk  from  a  quantum  attack.   Ifthe secret key can be derived from the broadcast public key before the transaction is placed on the blockchain, then an attacker could use this secret key to broadcast a newtransaction from the same address to his own address.  If the attacker then ensures that this new transaction is placed on the blockchain first, then he can effectively steal all the bitcoin behind the original address." - [Quantum attacks on Bitcoin, and how to protect against them](https://arxiv.org/pdf/1710.10377.pdf)