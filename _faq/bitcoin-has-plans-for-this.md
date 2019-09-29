---
title: "Bitcoin’s developers have already planned for this"
category: misconception
---

## Their current best plan will not be enough to avoid severe challenges.

- A discussion from early 2018 laid out a soft-fork proposal, but this would still leave millions of bitcoin in vulnerable addresses with lost private keys[^SOFT]
- Recently, longer signatures (nominally harder to crack) were proposed in a dev discussion. This is a stopgap at best [^LONGSIGS].
- Any soft-fork solution requires all users to actively participate in moving their funds to new qc-proof addresses. Those who do not put not only their own funds but the security of the entire network at risk.


[^SOFT]: Softfork

	A soft fork would leave the old signature scheme valid, and quantum resistant signatures optional. People could keep using their old addresses if they want (reusing of addresses is not advised now either, but it happens a lot anyway). The old signatures, in this scenario, would need to be rejected by miners. The idea would be to force everyone to use QR signatures in an attempt to make the largest possible percentage of the circulating supply quantum resistant. Due to lost addresses (estimated to represent 20% of BTC), this percentage will never be 100%.

	Having quantum resistance as an option is no option at all, because it would do little to protect the value of BTC. If there were quantum-resistant BTC mixed with non-quantum-resistant BTC, a hack of non-quantum-resistant coins would devalue the quantum-resistant BTC, because they would all be part of the same circulating supply, on the same network. The bottom line will be: BTC got hacked. 
	
	The only true option is a hard fork, and the only function of "legacy" BTC would be for owners to prove they own BTC, so that they can claim the quantum-resistant version of their BTC. Again, this would only work if 100% of BTC got claimed / transitioned, and if there was an arbitrary deadline for users to transition their old BTC (which would result in many people missing the deadline and essentially having their money deleted. This group would likely include Satoshi). If not, then a leftover percentage of BTC would remain vulnerable to a quantum hack indefinitely. After such a hack, the attackers could transition their stolen "legacy" BTC and claim QR BTC on the new chain just as any legitimate owner could, resulting in a "quantum-resistant" network where QC attackers might own a significant percentage of the supply, allowing them to manipulate the price severely. 

[^LONGSIGS]: Longer signatures

	That is not a solution. For example going 256 to 384 bit curves would mean a quantum computer with 3484 qubits instead of 2330 qubits could break the signature scheme. That is not even double and postpones the problem either half a year or one year, depending which estimate you take. (Doubling of qubits every year, or every two years). It does however have the same problems as a real solution.
	
	If you would make a serious timeline assessment of all the works to be done on the blockchain, consensus (majority of the nodes upgrade because the old signature scheme should become invalid), supporting systems and migration, a year would not even be enough to implement the next new upgrade that would be in line. The changes in the blockchain itself, the supporting systems, the exchanges, the migration of users coins. It's not simply a core framework upgrade, all aspects of the project will end up needing an upgrade. And only after the signature scheme is implemented and thoroughly tested, the supporting systems that allow the blockchain to operate will also need to be upgraded. Software wallets, hardware wallets, block explorers, mining operations, pools... anything connected to an API and more will also need a brush up on code to be compliant with the new changes. After that, one or more external audits would be ideal. All nodes need to upgrade --> consensus. Chances on a smooth consensus are slim due to the fact that such a change constitutes only a very temporary solution, with all the negative consequences of bigger signature sizes. Exchanges would also need to adapt to the new specifications. For BTC and Ethereum, this process is going to be extra complex as they need to fully disable their old signature scheme. After that, all users will need to move their coins to the new addresses to enjoy the new post-quantum security. None of the lost addresses will be protected by this, because nobody can move those coins.

	All these steps take time. Estimates need to be made for each step. There's a lot of money at stake. And then quite soon after that, they'll have to go at it again. What they will do next? Go for 512 bit curves? Same issues.
	
	This solution is just a temporary patchwork fix with bigger downsides than upsides. For every day a real solution is postponed, more addresses will be lost, which will result in a larger percentage of BTC being vulnerable forever. Upgrading to a real quantum resistant signature scheme is the only thing worth looking at.
