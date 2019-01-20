---
title: "Bitcoin’s developers have already planned for this"
category: misconception
---

## Their current best plan will not be enough to avoid severe challenges.

- A discussion from early 2018 laid out a soft-fork proposal, but this would still leave millions of bitcoin in vulnerable addresses with lost private keys[^SOFT]
- Recently, longer signatures (nominally harder to crack) were proposed in a dev discussion. This is a stopgap at best [^LONGSIGS].
- Any soft-fork solution requires all active users to comply. Those who do not put not only their own funds but the security of the entire network at risk.


[^SOFT]: Softfork

	A soft fork would leave the old signature scheme valid, and quantum resistant signatures optional. People could keep using their old addresses if they want. (Reusing of addresses is not advised now either, but it happens a lot anyway.) The old signatures need to be rejected. Because you need to force everyone to use QR signatures in an attempt to make the biggest percentage of the circulating supply quantum resistant. (Which will never be a 100% due to lost addresses.).

	Having quantum resistance as an option is no option at all. It's about protecting the value of BTC. If you would have quantum resistant BTC coins mixed with non quantum resistant BTC, a hack of non quantum resistant coins would devalue the quantum resistant BTC just as much because they all part of the same circulating supply. The bottom line will be: BTC got hacked. 
	
	Only option is hard fork, and the only function of old BTC would be for owners to prove they own BTC so they can claim QR BTC. But then again, it would only work if 100% of BTC got claimed. Because if not, then a left over percentage of BTC would still be out there and vulnerable for a quantum hack. After the hack they could be used to claim QR BTC just as any legit owners could do, still resulting in a hack. And since BTC got quite a bit of lost coins (about 20%), a 100% QR BTC is not possible ever. But that is another issue.

[^LONGSIGS]: Longer signatures

	That is not a solution. For example going 256 to 384 bit curves would mean a quantum computer with 3484 qubits instead of 2330 qubits could break the signature scheme. That is not even double and postpones the problem either half a year or one year, depending which estimate you take. (Doubling of qubits every year, or every two years). It does however have the same problems as a real solution.
	
	If you would make a serious timeline assessment of all the works to be done on the blockchain, consensus (majority of the nodes upgrade because the old signature scheme should become invalid), supporting systems and migration, a year would not even be enough to implement the next new upgrade that would be in line. The changes in the blockchain itself, the supporting systems, the exchanges, the migration of users coins. It's not simply a core framework upgrade, all aspects of the project will end up needing an upgrade. And only after the signature scheme is implemented and thoroughly tested, the supporting systems that allow the blockchain to operate will also need to be upgraded. Software wallets, hardware wallets, block explorers, mining operations, pools... anything connected to an API and more will also need a brush up of code to be compliant with the new changes. After that one or more external audits are recommendable. All nodes need to upgrade --> consensus. Chances on a smooth consensus are slim due to the fact it's just a very temporary solution with the downside of bigger signature sizes and all the negative consequences. Then exchanges will also need to adapt to the new chain. And for BTC and Ethereum, this is going to be extra complex as they need to fully disable their old signature scheme. After that all users will need to move their coins to the new addresses to enjoy the newly upgraded protection of the new scheme. None of the lost addresses will be protected by this because nobody can move those coins.

	All these steps take time. Estimates need to be made for each step. There's a lot of money at stake. And then quite soon after that, they'll have to go at it again. What they will do next? Go for 512 bit curves? Same issues.
	
	It's just patchworks. With bigger downsides than upsides. And all the period a real solution is being postponed, more addresses will be lost and it will result in a bigger percentage of lost coins vulnerable for ever. Upgrade to a real quantum resistant signature scheme is the only thing worth looking at.

