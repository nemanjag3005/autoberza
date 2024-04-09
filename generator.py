import csv

# JSON data
data = {
	"photos": {
		"base_url": "media-r2.carsandbids.com",
		"docs": [],
		"other": [
			{
				"id": "9lRMEl0g",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-iLgJ3RiE4I.jpg?t=171158586924",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rboyMk4L",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-yQsXW4E4om.jpg?t=171158586985",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3o0eMb2v",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-0WYz0ruYp.jpg?t=171158588680",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3LMo5m4V",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-r1dkRcZemA.jpg?t=171158583703",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "K1gpJbN4",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-ziAE-wBDr.jpg?t=171158618000",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "35Glz7qE",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-gtSoT82du4.jpg?t=171158588810",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "r4BDO7wk",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-UfKWlTyJR.jpg?t=171158620263",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3g6LpZGo",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-7gWxxF_CyT.jpg?t=171158594543",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KmO8n7j0",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-phv2mVRlLx1.jpg?t=171123476753",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9W7AQoXR",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-1VGFF8lFRM.jpg?t=171158594395",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9aB1OnjQ",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-YpDGo34m2W.jpg?t=171158594710",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3vq2De7N",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-V6dgG2PK9k.jpg?t=171158597987",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rkED0LDl",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-3SHt6lU7i.jpg?t=171158594328",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KYbl6wjP",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-fjOt8te0V.jpg?t=171158597793",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3ODMGBXz",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-5rMSsSBYZ_.jpg?t=171158597895",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rJY4xMZE",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-JbXC2ISD3N.jpg?t=171158598345",
				"width": 3600,
				"height": 2400
			}
		],
		"exterior": [
			{
				"id": "K1g64oEj",
				"link": "7a0a3c6148108c9c64425dd85e0181fa3cccb652/photos/9Xxev62z-1tfTsSvYds-(edit).jpg?t=171171416472",
				"width": 3159,
				"height": 2106
			},
			{
				"id": "rG10pb5o",
				"link": "1477bbe21e8d6b5e719c7c3ccab577fd47dd8cc3/photos/9Xxev62z-mnM5KLn-BN-(edit).jpg?t=171168074932",
				"width": 3095,
				"height": 2063
			},
			{
				"id": "rNqQ6jOG",
				"link": "1477bbe21e8d6b5e719c7c3ccab577fd47dd8cc3/photos/9Xxev62z-toz7xwlkSa-(edit).jpg?t=171168078862",
				"width": 3428,
				"height": 2285
			},
			{
				"id": "9QJRnkok",
				"link": "1477bbe21e8d6b5e719c7c3ccab577fd47dd8cc3/photos/9Xxev62z-IVxIaGlfzx-(edit).jpg?t=171168081808",
				"width": 3147,
				"height": 2098
			},
			{
				"id": "9WMew6lq",
				"link": "1477bbe21e8d6b5e719c7c3ccab577fd47dd8cc3/photos/9Xxev62z-mDIiLSOQF0-(edit).jpg?t=171168086512",
				"width": 3877,
				"height": 2585
			},
			{
				"id": "9XAQBojx",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-pRmz-Kxo1qX.jpg?t=171123470509",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3veqpYPO",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-mB3-nyDmbjf.jpg?t=171123469950",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rJZdBdvY",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-KjyZt_TAw2x.jpg?t=171123468729",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "30MoNAYj",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-5yzW6rqbOU-.jpg?t=171123470541",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "K1deyj54",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-duiFMoG710G.jpg?t=171123471197",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3gkyeNb3",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-eFL7zsTdKUz.jpg?t=171123466624",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "KZjovmjZ",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-H9rIlTXocri.jpg?t=171123474505",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "98mAWnMm",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-5NXF9S0zS7o.jpg?t=171123471184",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9lDP8gPm",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-HIrVc1oPrjg.jpg?t=171123471987",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9Al2m4Vw",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-iRuyGZl5cN.jpg?t=171158588780",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rElLqNMR",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-AGRjDEWHug0.jpg?t=171123469947",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9nq4AGyG",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-qS4itfljnhv.jpg?t=171123468760",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "KdAoqx85",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-E40BlFxA_f.jpg?t=171158589553",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3LaAw8aW",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-E4LoBlDLCnr.jpg?t=171123469899",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rNkl715b",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-YsThGoHdhU.jpg?t=171158591466",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KDgppQPE",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-EZMHYLPLB-6.jpg?t=171123473319",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "92xVnkQY",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-dipIRJ9S6L6.jpg?t=171123470650",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "36gOAoqz",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-MTjRguvOZ9.jpg?t=171158591389",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KPGaRv1k",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-Ld2SQTMf8XU.jpg?t=171123471622",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rNGvM5Vk",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-2K99nx-L6i5.jpg?t=171123467477",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rNXbyvg7",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-aANVDsX46Zq.jpg?t=171123473316",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rwMnoLkM",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-b7Pr9yaip.jpg?t=171158591407",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3gn5wOm1",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-7eIBZh-REnx.jpg?t=171123474196",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rxLlGyB8",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-nBG34ylaBXz.jpg?t=171123471876",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3vyQeNwm",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-dPb-w5kOS8t.jpg?t=171123475036",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rkegg1zN",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-JD-HtucO-G.jpg?t=171123478030",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rb1DVbLk",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-wBbzgEqxYt0.jpg?t=171123472070",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "KPbx0gpN",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-Qi6OgmTUBTp.jpg?t=171123476028",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rknnpRMW",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-IHqJC2dweZ.jpg?t=171123464194",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rJ2gay0X",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-Iu64RMa-cJl.jpg?t=171123475123",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9XRgV14N",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-63yfZhUxqnY.jpg?t=171123476256",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3p6Rq7qw",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-ENiacWhnSB.jpg?t=171123477532",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9e5vkLe6",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-5H9JLm-Slto.jpg?t=171123475609",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "r4zp7Q4D",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-vLJS5vYQu2r.jpg?t=171123476669",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3RbLwq6X",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-cbggRSioKD3.jpg?t=171123473530",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "Kmq0EdLd",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-wxAgkFL5Q-a.jpg?t=171123472653",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9WxdJ0vd",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-4NyZYaj5ChI.jpg?t=171123474009",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3LeGGR2y",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-iykGfjPWlCf.jpg?t=171123475978",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rkN865RK",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-qxdX13A0zoY.jpg?t=171123473964",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "36dY02XW",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-6NwhCaYFPcH.jpg?t=171123472868",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9ApYBV2j",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-K9Xp8pryzf_.jpg?t=171123472320",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3oQBEm8w",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-jfFDFjE_sV.jpg?t=171123477573",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9AqopxOJ",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-kLlUKPlIBh.jpg?t=171123477654",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rMk52Yap",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-P6OGMzsqWf.jpg?t=171123477081",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rxXVeqMB",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-S_UBqL3Fq0.jpg?t=171123477106",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9lZ54qNO",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-ZhZ3x5OZsv.jpg?t=171123477119",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9812GgO2",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-Qf3d9DslCgY.jpg?t=171123476712",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3RYeaj4v",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-v5k-OmZEg.jpg?t=171123464077",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "Kdxy8j11",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-i--wxX5iPRD.jpg?t=171123472734",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "KV0GPGVP",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-VYX72Xu9pk.jpg?t=171158600603",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KVQxaQwQ",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-l_Wf4ubaixN.jpg?t=171123475674",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9eABVejj",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-kQUiSvoYR4.jpg?t=171158600602",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9nXy6gpN",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-utU6AMPYgQB.jpg?t=171123475599",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9npoWeZ2",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-XjnEf7K0g.jpg?t=171158600503",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "356gVQnB",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-jFwa42IK_Ok.jpg?t=171123472516",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3y7P5MVo",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-y_UzBZVUoY.jpg?t=171158598065",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3zYEARJA",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-qW5EnwsNHWQ.jpg?t=171123476193",
				"width": 4000,
				"height": 2667
			}
		],
		"interior": [
			{
				"id": "30xnkagg",
				"link": "1477bbe21e8d6b5e719c7c3ccab577fd47dd8cc3/photos/9Xxev62z-AdtDVI1MWy-(edit).jpg?t=171168088005",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KV7gzLRY",
				"link": "1477bbe21e8d6b5e719c7c3ccab577fd47dd8cc3/photos/9Xxev62z-RgV59NMx7E-(edit).jpg?t=171168089313",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "K1BYlMwd",
				"link": "1477bbe21e8d6b5e719c7c3ccab577fd47dd8cc3/photos/9Xxev62z-ICA3Dv5rl2-(edit).jpg?t=171168090876",
				"width": 4000,
				"height": 2666
			},
			{
				"id": "3zd2qeW4",
				"link": "1477bbe21e8d6b5e719c7c3ccab577fd47dd8cc3/photos/9Xxev62z-3r06F_fuM9-(edit).jpg?t=171168094272",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9WdN7dOQ",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-QApvBYtr5.jpg?t=171158612829",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3g75ZOxR",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-YVP0q7FtNlK.jpg?t=171123511734",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "35kg4gZE",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-jwOsH9GbqV1.jpg?t=171123510306",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "98OAvnG6",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-o-bq6yukn3U.jpg?t=171123508958",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "KPJxQgOL",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-gn4YZfTtJc.jpg?t=171123513100",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "30ko8AkR",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-L2qYB4eaO54.jpg?t=171123508313",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rNJbw0Lb",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-pSR69pvZDQO.jpg?t=171123510953",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "36yYl2jz",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-0wCql2hIT7S.jpg?t=171123510708",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rEBLOZXk",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-xP-NW2GZi-3.jpg?t=171123507768",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "36YmemLB",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-mv5ipNd0hG.jpg?t=171158610432",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3vdk5YWd",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-_p-NUS9SKx9.jpg?t=171123508216",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rxMldy8q",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-Btjwjix30ct.jpg?t=171123509464",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rbqDObel",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-fnTfRIDAF2_.jpg?t=171123509914",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3gynaRvG",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-HkcPm8nSWr.jpg?t=171158612956",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "92yYJkLW",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-0mqcqLrBrVh.jpg?t=171123508787",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rknY78xl",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-Vhtwv7a2mvG.jpg?t=171123511411",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9lbPJgxg",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-ff_IjnkqZ2v.jpg?t=171123509617",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rjqg5kaY",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-HgUbmEOPnu.jpg?t=171158608023",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9QozBZaM",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-TNz1yZSmET.jpg?t=171158610924",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "r4RpyQZg",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-UHoIZFbii2.jpg?t=171123513790",
				"width": 4000,
				"height": 2666
			},
			{
				"id": "rGYQxjXw",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-tHgK3x0jP_.jpg?t=171158610504",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9Ad5po8r",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-mCLeCx15VB.jpg?t=171158607489",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KY0JzByP",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-JKeCftSj19A.jpg?t=171123512084",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "KDLYbVNy",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-xt87Khzap8.jpg?t=171158610910",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rkVdyBEQ",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-f-ddecaY1C.jpg?t=171158607566",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rMb5PYp4",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-G_twCZBLqv.jpg?t=171123514115",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3vNQ2NYN",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-T_LprNT8kFJ.jpg?t=171123512318",
				"width": 4000,
				"height": 2666
			},
			{
				"id": "rJ5dvowO",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-Ho2tHTcULXN.jpg?t=171123506339",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rEn5wjWR",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-PUmzTQ-iA0.jpg?t=171158615411",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3LDGMBX0",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-Vw67ox7Iqp.jpg?t=171123512965",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "37OBGY10",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-u0bS3JbxGT.jpg?t=171123513543",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3BlmDbeA",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-hjdFc76apOR.jpg?t=171123506952",
				"width": 4000,
				"height": 2666
			},
			{
				"id": "rxVVO2vj",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-u3UrjpoF2c.jpg?t=171123514165",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "KdVywZB5",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-a1Tdl0nUmAr.jpg?t=171123510585",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rwnOVPPM",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-wXtCB8WdVce.jpg?t=171123510762",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rJZgZyQE",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-PzdeRjscMEJ.jpg?t=171123512496",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9e0vMv2j",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-dZNg3JsP9m.jpg?t=171123512788",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3yEy75E7",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-oQVjwxebN8i.jpg?t=171123512410",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rbP87NQk",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-kAd3Fo59KU.jpg?t=171158618702",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3zJJwj41",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-H3pHv3oQ7I.jpg?t=171158618370",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9nqy2g4J",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-U-jqiBzQKHc.jpg?t=171123512653",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3OpZRkx6",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-8atQMim_NZy.jpg?t=171123512147",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3y01VPw9",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-Bpgwzq9bV.jpg?t=171158615495",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3vQmXbpv",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-Tv_WaDauni.jpg?t=171158615493",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KdRgO22B",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-3M0sDJpDB.jpg?t=171158610300",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KPA7ldAq",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-NS_YcNQd6p.jpg?t=171158618274",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "Kmm8e77l",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-57wxDPWXX5.jpg?t=171123513910",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "Kml0dd1e",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-excbljgxTvo.jpg?t=171123510349",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9WldO01R",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-PcTaJURYVVr.jpg?t=171123511622",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "KPeakv0Q",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-HP9XaGoJuu5.jpg?t=171123509350",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9lExPVBE",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-Fm245I8Kie.jpg?t=171158618484",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "30OOen5G",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-L3u6wVh6tn.jpg?t=171158615928",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "92nA82EQ",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-HWARByo4RB.jpg?t=171158615954",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3qXVq8W4",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-ogyFm8HJc4G.jpg?t=171123506338",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "KV7R77R6",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-NLmdig9suKn.jpg?t=171123507052",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rG4zYQe4",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-z0eOl_z0UCY.jpg?t=171123505586",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9QqvxAnY",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-dSlLExlXeM6.jpg?t=171123506287",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "rNBvX5n5",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-uM5ROj2TM3R.jpg?t=171123505611",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3OQJM2Nm",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-lQfaFdmWQ2U.jpg?t=171123505645",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "KD6pjQDa",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-Ot6H9b4OyJ1.jpg?t=171123511176",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3BB0gNXE",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-r7qwQx2h_o.jpg?t=171158613212",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "37W6ZVdv",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-pEldzYqV7y.jpg?t=171123503516",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3zxE7RPj",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-IZqsdMPzv1.jpg?t=171123513259",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "9nz41G6n",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z--4tKcFvRrst.jpg?t=171123506899",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "KZDQ2Ydb",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-KBriY2cSEi.jpg?t=171158613302",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KVbx6QWP",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-rypZluwT7K.jpg?t=171123512878",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3qxVo8Rz",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-bYxJuiu8BcF.jpg?t=171123468142",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3L5bgV80",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-xfD6nbhFt5.jpg?t=171158601041",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rM2PWql4",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-JlZR__ltKw.jpg?t=171158604285",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9QZvXA87",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-UotD0yzeEQu.jpg?t=171123468135",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "KPmwoYGL",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-JtRC4-M9tP.jpg?t=171158601063",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3OjJn2DY",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-PcgZpzBsVH8.jpg?t=171123468038",
				"width": 4000,
				"height": 2667
			},
			{
				"id": "3oe1X8NE",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-DXYps9mQgiz.jpg?t=171123472283",
				"width": 4000,
				"height": 2667
			}
		],
		"mechanical": [
			{
				"id": "3vJV71Gd",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z--mGKhmSAf1.jpg?t=171158583806",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "3qBGWgkE",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-i7X-ft0Ww.jpg?t=171158583311",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9QBpD5zY",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-H1LPxkxyzn.jpg?t=171158583286",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9n6pbRXX",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-wdusCUweHz.jpg?t=171158583455",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "K1lM5poG",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-CoZ1OE48z.jpg?t=171158586427",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rxPoMEaW",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-PH2S2axq8m.jpg?t=171158586578",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KPvW7LvQ",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z--JUHgQXWNr.jpg?t=171158586446",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "KmNPVODY",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-AF4Qj6l8A.jpg?t=171158604125",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "98q4lM4w",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-UsaQ_38HU6.jpg?t=171158604105",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "rxqRJoqV",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-RKZmrMA9ui.jpg?t=171158604482",
				"width": 3600,
				"height": 2400
			},
			{
				"id": "9lzYvEaz",
				"link": "21ffe08471e2c3f4bc157fffa3ba4ba2c1579699/photos/9Xxev62z-MhaXjsKI1x.jpg?t=171158604535",
				"width": 3600,
				"height": 2400
			}
		]
	}
}

# Auction ID
auction_id = "5790a6b2-90ed-4240-86a7-d26e609790db"

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