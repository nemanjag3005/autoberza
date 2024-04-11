import csv

# JSON data
data = {
	"photos": {
		"base_url": "media.carsandbids.com",
		"docs": [
			{
				"id": "305am0WM",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-at-srNZY24.jpg?t=171184716327",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rbZy2zqL",
				"link": "d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/35PbXlOE-5VKumR1io0-(edit).jpg?t=171258529546",
				"width": 1512,
				"height": 2016
			},
			{
				"id": "KYDjnkjM",
				"link": "d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/35PbXlOE-6Y1RdQxjLz-(edit).jpg?t=171258526262",
				"width": 1512,
				"height": 2016
			},
			{
				"id": "KZl7kaWk",
				"link": "d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/35PbXlOE-rkkh2eZCHN-(edit).jpg?t=171258522884",
				"width": 1512,
				"height": 2016
			},
			{
				"id": "3BwX8BN4",
				"link": "d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/35PbXlOE-Zr07nBNgW4-(edit).jpg?t=171258518211",
				"width": 1512,
				"height": 2016
			}
		],
		"other": [
			{
				"id": "3qpombZN",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-9qkVRfLnkC.jpg?t=171184714001",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rJlaGaYv",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-GA2Xe1JvNbE.jpg?t=171184714080",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3g1woWmE",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-SqrO37f_MOK.jpg?t=171184718910",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3yyvXWbd",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-O7wnYExYcD.jpg?t=171184724561",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3Bz27j5X",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-lqymD-sEbl.jpg?t=171184715095",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KPBxDnN9",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-0qWjHUD7oR.jpg?t=171184717068",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9nEzvmpv",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-4sBg3fxQZi4.jpg?t=171184720598",
				"width": 3600,
				"height": 2400
			}
		],
		"exterior": [
			{
				"id": "3561y2lJ",
				"link": "d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/35PbXlOE-A7uQdA6Lex-(edit).jpg?t=171258551605",
				"width": 2884,
				"height": 1923
			},
			{
				"id": "rbxeV5pQ",
				"link": "d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/35PbXlOE-n0d_ARbpMW-(edit).jpg?t=171236653141",
				"width": 2858,
				"height": 1905
			},
			{
				"id": "3OaBe7Zm",
				"link": "d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/35PbXlOE-LHhaK3zGqQ-(edit).jpg?t=171236655257",
				"width": 3537,
				"height": 2358
			},
			{
				"id": "3g6bmmYR",
				"link": "d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/35PbXlOE-luaDa4LYon-(edit).jpg?t=171236658843",
				"width": 3171,
				"height": 2114
			},
			{
				"id": "9QokZ71k",
				"link": "d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/35PbXlOE-AFoADsHhyM-(edit).jpg?t=171236662961",
				"width": 2367,
				"height": 1578
			},
			{
				"id": "rkPGkMmL",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-bHCNBqx_bM.jpg?t=171184722699",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9Xqj8a4l",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-l4mxr5aFOn.jpg?t=171184721266",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3yqwRvyL",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-Hhx0f4HgDlq.jpg?t=171184719975",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rEVaDRLk",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-tp0RIUlRUa.jpg?t=171184724313",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rxBGy5BB",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-4InLc25tW9.jpg?t=171184717211",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "92gLARQJ",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-FgYHLTj_CV.jpg?t=171184716398",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rNa64YYX",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-2Sve2ecDuA5.jpg?t=171184718423",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3g5eD2R8",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-G7nXm_JI3H.jpg?t=171184723981",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rxAq0VMz",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-VTmrWwvJvz.jpg?t=171184722153",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KPaPB1PZ",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-ztlOgSRDbg9.jpg?t=171184721010",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rJo07Xj2",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-Hbly99FYQ3-.jpg?t=171184720145",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rM6LBRRZ",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-pKKO4sMVkU.jpg?t=171184722087",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9WqWZJv5",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-x2aM-Dr3MiL.jpg?t=171184718788",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "36kVydXx",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-iTEW9Ohf_vK.jpg?t=171184718235",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9A4jR1Oe",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-PLW9005P17.jpg?t=171184722623",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KZP0ngEQ",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-iiRPfld8B1.jpg?t=171184724065",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rGoAgLM4",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-fJBOJsb4B-J.jpg?t=171184723068",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9la6nbGG",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-Znyd2TR8BU.jpg?t=171184722190",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KmD20nj6",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-2ttW_Db3ma.jpg?t=171184721930",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3vL8BwvM",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-nzDqeicxX-.jpg?t=171184724420",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rjoW44Yp",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-bccqgVJE-J.jpg?t=171184722731",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "92l4owDW",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-_qAtzBVi7U.jpg?t=171184724648",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rGlm76j2",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-pKS373wdiW.jpg?t=171184712695",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KYlw0LzA",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-de3zXWtW2i.jpg?t=171184724298",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3oxo5qX7",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-SL1_mxo7uR.jpg?t=171184722497",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3BgYlpYb",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-K0ThwAWqm4.jpg?t=171184723996",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3LqJlj5Z",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-onUnXzrs53u.jpg?t=171184720919",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9Q27qmpY",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-TzatUmIMLk.jpg?t=171184723600",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "30pPGoLV",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-IiUTY6CzxI.jpg?t=171184724640",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rN1Mvd65",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-ik5btFnPW3W.jpg?t=171184723187",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9QjQy7Qe",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-V9TYP5ijWau.jpg?t=171184713296",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3vGxpg4R",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-XswuYWTrfIe.jpg?t=171184719801",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KYEYl1NM",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-x3QRpgacLnh.jpg?t=171184719389",
				"width": 3600,
				"height": 2400
			}
		],
		"interior": [
			{
				"id": "KdZWE7xx",
				"link": "d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/35PbXlOE-wpznI2vZcH-(edit).jpg?t=171236630318",
				"width": 3220,
				"height": 2147
			},
			{
				"id": "KDwkw0mv",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-PHOAxpzv_ZX.jpg?t=171184718488",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "36b84AYZ",
				"link": "d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/35PbXlOE-N950wdH-VA-(edit).jpg?t=171236632127",
				"width": 1958,
				"height": 1305
			},
			{
				"id": "3o6elEkm",
				"link": "ee7f173e46ec801a48d1673c50f9cebaa1bf2854/photos/35PbXlOE-4fh8VYSmu7-(edit).jpg?t=171259620405",
				"width": 2723,
				"height": 1815
			},
			{
				"id": "37M26vnv",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-qrW7Pgi5Lm.jpg?t=171184721638",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "30GxLVjL",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-hEMrLRbUbm.jpg?t=171184721339",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KmJOeN8m",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-enJ5vGssoFm.jpg?t=171184717849",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3zM1BQdL",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-dnM6_Mus_-.jpg?t=171184721242",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9Xa8qNjN",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-LH0ixt3BUv.jpg?t=171184716186",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3vEoxRam",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-PW_BPgC8l4.jpg?t=171184715972",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3Rz6ER6R",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-qUL5QU05GTt.jpg?t=171184718652",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3oEYeEzo",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-tqWP-bLcF.jpg?t=171184717480",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rwE4LnXw",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-mibF6-667xX.jpg?t=171184718338",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KVWzBkwz",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-96cFP0nO6ai.jpg?t=171184720646",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9ll4dBwZ",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-Bftzjc9-Yc.jpg?t=171184717331",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9AODA72J",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-1SALRoLdTZL.jpg?t=171184717578",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rbgYg4Ld",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-VRZVg-3kR-N.jpg?t=171184717465",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3L0qJnbG",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-Jo6dk69jyF.jpg?t=171184715756",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rEWGRmMb",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-64GS6U21OO.jpg?t=171184715763",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9e7A4DBq",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-NaCrdwJQkf0.jpg?t=171184720612",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KDzEEYWp",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-SjXrBDpid6.jpg?t=171184723324",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "35nepedY",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-6RIexf80kCz.jpg?t=171184717843",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "r4ePPZ4p",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-7F3FeYQh_Y.jpg?t=171184721701",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9nGxNlyN",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-Z1hUmimph7p.jpg?t=171184715027",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "36VnVOxn",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-F1zLnQHK9Ng.jpg?t=171184723049",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3qw6y1E4",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-Ae7IWdJaVd.jpg?t=171184723628",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3OnVyDBv",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-VYPJs-9lfzS.jpg?t=171184719788",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rN8xxm73",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-l9iDPUf_E.jpg?t=171184713002",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3OMoLVDa",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-gOZiHJce6w.jpg?t=171184713089",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9eBEdG4A",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-GomrSyiqGc.jpg?t=171184724813",
				"width": 3600,
				"height": 2400
			}
		],
		"mechanical": [
			{
				"id": "r4GeZo1D",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-r3Ey7Xb0bz.jpg?t=171184716735",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KZRBmoeN",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-sbLMmWf3K2d.jpg?t=171184719333",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "Kdb5Q8ex",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-prqba4ozw.jpg?t=171184722951",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "K1ePBG50",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-X3NKnWtIZk.jpg?t=171184717016",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "98MlBWM2",
				"link": "1a5a500e489ae1912c3ab88c63db14da4e33d4cc/photos/35PbXlOE-mOaEOJyeTF.jpg?t=171184716853",
				"width": 3600,
				"height": 2400
			}
		]
	}
}

# Auction ID
auction_id = "2a5d6d15-4486-48a3-8af9-0f6c34a61ad4"

# CSV file path
csv_file = "photos.csv"

# CSV header
header = ["id", "auctionId", "baseUrl", "link", "width", "height", "type"]

# Write data to CSV
with open(csv_file, mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(header)
    
    # Flatten and write doc photos
    for photo in data["photos"]["docs"]:
        writer.writerow([photo["id"], auction_id, data["photos"]["base_url"], photo["link"], photo["width"], photo["height"], "DOC"])
    
    # Flatten and write other photos
    for photo in data["photos"]["other"]:
        writer.writerow([photo["id"], auction_id, data["photos"]["base_url"], photo["link"], photo["width"], photo["height"], "OTHER"])
    
    # Flatten and write exterior photos
    for photo in data["photos"]["exterior"]:
        writer.writerow([photo["id"], auction_id, data["photos"]["base_url"], photo["link"], photo["width"], photo["height"], "EXTERIOR"])
    
    for photo in data["photos"]["interior"]:
        writer.writerow([photo["id"], auction_id, data["photos"]["base_url"], photo["link"], photo["width"], photo["height"], "INTERIOR"])

    for photo in data["photos"]["mechanical"]:
        writer.writerow([photo["id"], auction_id, data["photos"]["base_url"], photo["link"], photo["width"], photo["height"], "MECHANICAL"])

print("CSV file created successfully.")