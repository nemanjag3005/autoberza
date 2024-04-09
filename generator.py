import csv

# JSON data
data = {
	"photos": {
		"base_url": "media-r2.carsandbids.com",
		"docs": [
			{
				"id": "rJvkxRqO",
				"link": "c51905b0000b639a185eeb080dd879bf007f5604/photos/9lD2yknz-OhC82cLm2t.jpg?t=171204394586",
				"width": 934,
				"height": 1008
			},
			{
				"id": "3pNZ1nBY",
				"link": "c51905b0000b639a185eeb080dd879bf007f5604/photos/9lD2yknz-J6xNex2vQs-(edit).jpg?t=171204180372",
				"width": 1512,
				"height": 2016
			},
			{
				"id": "9XNM1oMp",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-3BgxKgO8crx.jpg?t=171070530381",
				"width": 1512,
				"height": 2016
			},
			{
				"id": "3ojZAlJg",
				"link": "c51905b0000b639a185eeb080dd879bf007f5604/photos/9lD2yknz-ZeOc3IpDip-(edit).jpg?t=171204229764",
				"width": 1512,
				"height": 2016
			},
			{
				"id": "r452XvXP",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-BCZorjkDD6B.jpg?t=171070530532",
				"width": 1512,
				"height": 2016
			},
			{
				"id": "3R2LVlzp",
				"link": "c51905b0000b639a185eeb080dd879bf007f5604/photos/9lD2yknz-xePojzIG6L-(edit).jpg?t=171204283171",
				"width": 1512,
				"height": 2016
			},
			{
				"id": "9n4kkG5B",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-9M28GCMVmy1.jpg?t=171070529971",
				"width": 1512,
				"height": 2016
			},
			{
				"id": "KVGGJ78k",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-q2yGrs4zc1K.jpg?t=171070530169",
				"width": 1512,
				"height": 2016
			},
			{
				"id": "3LweXE6X",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-aKx6N9BnJRf.jpg?t=171070530262",
				"width": 1512,
				"height": 2016
			},
			{
				"id": "3Bgqdn05",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-z6OynP4VkS5.jpg?t=171070530069",
				"width": 1512,
				"height": 2016
			},
			{
				"id": "rEVpyZae",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-Lzbhw23s13V.jpg?t=171070530299",
				"width": 1512,
				"height": 2016
			}
		],
		"other": [
			{
				"id": "3okv01Lm",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-51B667KBtKZ.jpg?t=171182142269",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KYzYLkwv",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-lE_kg3OvuqL.jpg?t=171182126394",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KZGmBDlN",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-EcVwRKNXlQL.jpg?t=171182126269",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9XVkDbng",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-uUH9U6S2tlj.jpg?t=171182141010",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3qGOyVd4",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-K4h_woXFFIZ.jpg?t=171182132694",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9Wa0xznw",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-j9FdXX0zgqP.jpg?t=171182132790",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rNbyepeW",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-7ZuoREanLk_.jpg?t=171203815667",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rJJDkR1E",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-ge7Adx9zGf.jpg?t=171182139281",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "36enaDaz",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-vxQ4JaqqQ7R.jpg?t=171182136630",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rwZb1eYp",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-lWEq0rUACPb.jpg?t=171182136875",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rGyLdNOj",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-kkAhRHvcFxr.jpg?t=171182138223",
				"width": 3200,
				"height": 2129
			}
		],
		"exterior": [
			{
				"id": "rjqB2pOp",
				"link": "c51905b0000b639a185eeb080dd879bf007f5604/photos/9lD2yknz-egR1vWog2A-(edit).jpg?t=171204314625",
				"width": 3104,
				"height": 2069
			},
			{
				"id": "KVDx2gvl",
				"link": "c51905b0000b639a185eeb080dd879bf007f5604/photos/9lD2yknz-zv_0yA6Pjp-(edit).jpg?t=171204413011",
				"width": 3172,
				"height": 2114
			},
			{
				"id": "9ngyQJ8X",
				"link": "c51905b0000b639a185eeb080dd879bf007f5604/photos/9lD2yknz-LMAmwtVxQO-(edit).jpg?t=171204404868",
				"width": 3172,
				"height": 2114
			},
			{
				"id": "3OPZG7Ry",
				"link": "c51905b0000b639a185eeb080dd879bf007f5604/photos/9lD2yknz-7J5EZIsYHH-(edit).jpg?t=171204368827",
				"width": 3140,
				"height": 2093
			},
			{
				"id": "9X2g5qmz",
				"link": "c51905b0000b639a185eeb080dd879bf007f5604/photos/9lD2yknz-JtRyoStbRC-(edit).jpg?t=171204832659",
				"width": 3145,
				"height": 2097
			},
			{
				"id": "3Lw0y1AV",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-0KtB6wMNHJ.jpg?t=171182107292",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rNDyy7QP",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-yW3v02plNop.jpg?t=171182105048",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KPaGvqJa",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-HgvlwE-PR0.jpg?t=171182101324",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "37MLLwMk",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz--sJix7rHEq.jpg?t=171182101552",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KVMvRdXl",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-0uAoZPx0o3.jpg?t=171182106539",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rGxe6YbO",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-cM9kkoydnm.jpg?t=171182097184",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3RmxgX8p",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-kjdMeYZKja.jpg?t=171182103547",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KdewNQ5Q",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-Z1BTpeSUOz.jpg?t=171182096305",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3p5olloe",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz--o-ZIchlLW.jpg?t=171182095282",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "98PPP4eY",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-fI9YVy7Wzi.jpg?t=171182109143",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3vMYvvOd",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-kLja1SVbE6.jpg?t=171182107460",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rMB6e4m9",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-WyWTtus_e8j.jpg?t=171182117922",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "r45GgG0n",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-8zCm5tvgKu.jpg?t=171182108599",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3pBm025g",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-B1Vmg3MyEd4.jpg?t=171182118037",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "30EgjBlR",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-vCvzSxKpP1.jpg?t=171182108305",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "92lbgJP6",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-ItpPWTjQ2P.jpg?t=171182108311",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9WD0AzaM",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-rSzqrSPdF-I.jpg?t=171182115493",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9XQkdbvz",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-cVh8DGy4xD.jpg?t=171182108053",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "92QjR1eY",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-6JOdzWaF-a0.jpg?t=171182117146",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rGzL2NkN",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-HcaY7YEakkj.jpg?t=171182105013",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9aLlOYZA",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-3pdvMwDdvLn.jpg?t=171182104815",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KmvOLO66",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-lFnRzk8KzLG.jpg?t=171182129449",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rJXDgkAX",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-piC4xDDJQ1.jpg?t=171182120463",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3oMN8JQw",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-h1Z-xi9onL.jpg?t=171182095310",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9AOqPlko",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-D9tdisak1y.jpg?t=171182095398",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "36NaZBeA",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-tDnvDJilA1.jpg?t=171182097168",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rEjzVYdO",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-oIgBlwnUfZ7.jpg?t=171182100571",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rNa21ovE",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-h1w8I7mHDt.jpg?t=171182097209",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rkwpv8jN",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-g8-jMAcf6G.jpg?t=171182096215",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KYGnaPlv",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-ZVCfHPIEqHj.jpg?t=171182100302",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rxB2jN00",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-SJsIO_UTxQ.jpg?t=171182094432",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3BGmoNdK",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-DKIq_xbLYIt.jpg?t=171182100060",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KDwWPqdM",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-xar_ynYpVz.jpg?t=171182097648",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KZnYQ0DA",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-_wYq39EFteZ.jpg?t=171182100172",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3qqwmgmN",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-1AQ4KfOkKA.jpg?t=171182119741",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3OBVEz1v",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-oXnyuVp4Fr.jpg?t=171182126609",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "r4WGYGzD",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-peIKeDOazf_.jpg?t=171182122507",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9QzY7vjk",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-_dik3WoiW1.jpg?t=171182119648",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3ON62NRa",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-K3ZETv2jpe.jpg?t=171182119613",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3qGqz6kE",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-mqXg5DBQVST.jpg?t=171177002892",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9nBNxReN",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-38voaEEFxt.jpg?t=171182120581",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3oYv7Ozw",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-IRjZmxbmubn.jpg?t=171182123976",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rbygYGzd",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-FS2c_iKZSin.jpg?t=171182123674",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3BJ8eZX3",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-692uxxUm-7.jpg?t=171182120614",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KVNO7oeM",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-VGoFySe_LEq.jpg?t=171182117210",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3oE2JoJE",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-qv2Qi-pjTpC.jpg?t=171182118079",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9e6xaBao",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-_tmOGfWkYYl.jpg?t=171182117209",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KPaNQOn7",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-V-E6nnqVkjk.jpg?t=171182122980",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rwb5OOzw",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-IaCF4zuW01B.jpg?t=171182124928",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rkPbPLLN",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-aVWMEXwGZys.jpg?t=171182125638",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "361kdADx",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-XKfJCxMccvo.jpg?t=171182124671",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9n4NPnLX",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-4M4O6qf3lnj.jpg?t=171182106395",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rEjVQGzP",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-A9DFX8NbVLa.jpg?t=171182140496",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9WZle8XR",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-uwsm60WUL_h.JPG?t=171070329621",
				"width": 4160,
				"height": 2773
			},
			{
				"id": "rxe20NXz",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-sG5yThOLN__.jpg?t=171182130085",
				"width": 2129,
				"height": 3200
			},
			{
				"id": "3p7odlm6",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-Z04AjCCOxYX.jpg?t=171182130200",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rMgBjema",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-CM4QevXkFAF.jpg?t=171182102636",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KDzxaMOa",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-wJR5XoJ6351.JPG?t=171070329071",
				"width": 4160,
				"height": 2773
			},
			{
				"id": "3BeJ1e8A",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-KLIFXYjRlfZ.jpg?t=171182106479",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "K17j4pb7",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-hvVDJdYV5JO.jpg?t=171182141594",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "364kRAoB",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-3hKdreyhXCl.jpg?t=171182143206",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rwbvANAZ",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-BvM83c7BH23.jpg?t=171182102717",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rxb7RWLj",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-mW76UjxWhih.jpg?t=171182141968",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3vGpyxQk",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-9zZd-tQ2d0A.jpg?t=171182100840",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9AE1NW58",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-AkwR4u9-g5L.jpg?t=171182142665",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "36PGavOy",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-VLVPXFCMQOq.JPG?t=171070328141",
				"width": 4160,
				"height": 2773
			},
			{
				"id": "rJ24YkOr",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-gLcWHSqsDfL.jpg?t=171182105850",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9eXxDBZk",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-p43lvfjP49d.jpg?t=171182101108",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "K1m5GzRz",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-Ej9So5wslPR.jpg?t=171182101324",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3qwwjgeE",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-SYws_Ykw16_.jpg?t=171182105763",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9Wz0kzwV",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-eZaXF6OgqOl.jpg?t=171182099230",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rNGWj6xw",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-4A5iwyaXErk.jpg?t=171182143485",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rwA5NOMN",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-FFOgPHLQzB6.jpg?t=171182143308",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "Kmngmqnp",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-pneglnIvZ.jpg?t=171182102115",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "364npwkn",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-7jQ9qXAhyEi.jpg?t=171182102682",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3g1NyM5z",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-KcwGiawLRop.jpg?t=171182099320",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KV4vdYvQ",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-qdZyvy9bZRM.jpg?t=171182120941",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9AMqvlWe",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-T6U0hI6_UIt.jpg?t=171182130811",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KdYORkVb",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-zwcYJhG2KGq.jpg?t=171182124600",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9aLnE7DE",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-gsmGwGF8wuR.jpg?t=171182125978",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rEYV46qb",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-ZlO277-ogcR.jpg?t=171182121412",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3oN5DV79",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-cK59-hTpb3E.jpg?t=171182130662",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "30bgoPaM",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-5l65VzNGgMt.jpg?t=171182121925",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KDVQ4ZMv",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-hKRrPcaRLTQ.jpg?t=171182125315",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "K1mj1yw0",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz--JclgOLWz5V.jpg?t=171182122735",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3yvjx8GL",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-JPWEbJZ_Eu.jpg?t=171182127023",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rkJp18gL",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-c3pQTv7Ixrn.jpg?t=171182130819",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9XNboRMl",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-O5V7A-qVVNc.jpg?t=171182128382",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KVGDkRlz",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-tu1HRu-hLez.jpg?t=171182127707",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rGxLVN52",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-HYNawUb7__O.jpg?t=171182118769",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rGOeJYP4",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-Z34kmlB9Zzf.jpg?t=171182131631",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rNaywpmG",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-stjzsWKxACM.jpg?t=171182119086",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "37NJALBv",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-FGPBc-bS5eb.jpg?t=171182128678",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "30pnZkdL",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-jd5niszPp11.jpg?t=171182128659",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3zPy6EgL",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-qV03R9rVJy8.jpg?t=171182128180",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KPQpNa6Z",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-UISO41dGKQF.jpg?t=171182128065",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9XYk2bmN",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-E4PLPDym8i8.jpg?t=171182121796",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rGoNEvvj",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-wPHZWL3d39I.JPG?t=171070328232",
				"width": 4160,
				"height": 2773
			},
			{
				"id": "9nbLv85v",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-5jcIf5vRF6.jpg?t=171182127352",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rJ0jql23",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-ogsY_jdxxe.jpg?t=171182127102",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KdpwWQMx",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-6tH3y533R5X.jpg?t=171182131539",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9a5leBe8",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-eoL5dGv1j-X.jpg?t=171182118726",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3Lo0J1ZG",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-cUyAbEq11MZ.jpg?t=171182121273",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3vGYP1jm",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-OyRhEKnRS3Z.jpg?t=171182121446",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KmDmav4m",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-UJWq04tzTq_.jpg?t=171182124534",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "r4584yLp",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-ft7C5-6akc3.jpg?t=171182128798",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rEVVm66V",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-8WXFspp-_r.jpg?t=171182107391",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3LwPllvZ",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-0xiNyKc6zxx.jpg?t=171182127887",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9A4RwxVw",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-JRWiBh8hCxF.JPG?t=171070326795",
				"width": 4160,
				"height": 2773
			},
			{
				"id": "rxAEVqaW",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-5SkElzwLw.JPG?t=171070325590",
				"width": 4160,
				"height": 2773
			},
			{
				"id": "Kd1b865p",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-DFez5OXZBC.jpeg?t=171088477605",
				"width": 4032,
				"height": 3024
			},
			{
				"id": "rkO05kjl",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz--Ed2fCbABr.jpeg?t=171088477423",
				"width": 4032,
				"height": 3024
			},
			{
				"id": "3R40pkYR",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-87mqb93GXlC.jpg?t=171182125336",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3oqRxY2v",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-5-5XD9w5iyK.JPG?t=171070326608",
				"width": 4160,
				"height": 2773
			},
			{
				"id": "9lmQ5v8O",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-oqQcBFbjyBc.jpg?t=171182123428",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rkPvJb14",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-KxJ-r8gRSdO.JPG?t=171070327367",
				"width": 4160,
				"height": 2773
			},
			{
				"id": "35ZyBWYK",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-a8HgbcBPoX9.jpg?t=171182124203",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rk40N0GO",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-C3k9I72pDQ.jpg?t=171182104070",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "98QPn41w",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-EJw5hFoAw5L.jpg?t=171182141477",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3geezJV8",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-WM0y_yXZD.jpg?t=171182104229",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "r4dGVqvg",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-TGRXpGfmmnH.jpg?t=171182141088",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KPyNeODo",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-Yn5NrEIXgxA.jpg?t=171182141781",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9lXQBv6z",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-F1SzCrnVVpP.jpg?t=171182142150",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9W5q15k5",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-jZx9XQ3p7p9.jpg?t=171182125894",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rNNW4xjX",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-J0si1WZxVIO.jpg?t=171182125106",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "Kmnmvv5Y",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-qgmw_HXNAfb.jpg?t=171182142982",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9Q2YwvqD",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-xM0SmL4DptS.jpg?t=171182105702",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rjoDyz2w",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-OTZx2LQB9WV.jpg?t=171182104178",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rxO7yWRB",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-ED-n6TbCLkM.jpg?t=171182123245",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "92mbAJlJ",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-IKpQ2YOHI5k.jpg?t=171182121942",
				"width": 3200,
				"height": 2129
			}
		],
		"interior": [
			{
				"id": "3zWpOmRz",
				"link": "c51905b0000b639a185eeb080dd879bf007f5604/photos/9lD2yknz-zqHgpg-oWV-(edit).jpg?t=171204067712",
				"width": 2952,
				"height": 1968
			},
			{
				"id": "35DMzaJZ",
				"link": "c51905b0000b639a185eeb080dd879bf007f5604/photos/9lD2yknz-vYCwIkQza0-(edit).jpg?t=171204116690",
				"width": 3193,
				"height": 2129
			},
			{
				"id": "KmN0w1Xp",
				"link": "c51905b0000b639a185eeb080dd879bf007f5604/photos/9lD2yknz-0pLZSOoH9h-(edit).jpg?t=171204142450",
				"width": 3193,
				"height": 2129
			},
			{
				"id": "36PYXeRn",
				"link": "c51905b0000b639a185eeb080dd879bf007f5604/photos/9lD2yknz-MYsH3NPb9j-(edit).jpg?t=171204165016",
				"width": 3193,
				"height": 2129
			},
			{
				"id": "KP4pPD7o",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-BVs6ILDCBcN.jpg?t=171182112258",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3zvxPwed",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-QotckDT4OqF.jpg?t=171182135410",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rNb2ao4k",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-2AAMXtQ8OJN.jpg?t=171182114681",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3gONGRX8",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-p22BEd-VSnJ.jpg?t=171182132885",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3q4wdgJn",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-PVCCmwtfw5.jpg?t=171182139044",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9X5b1RVj",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-rIRhJt-XWOK.jpg?t=171182112333",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3OY6vNz6",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-tbqKWUV5vS.jpg?t=171182138906",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3ok2APv3",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-H8BCeThvKW9.jpg?t=171182109907",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rMzvkNp9",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz--y3BtLHsw.jpg?t=171182094384",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KP0Gm8wQ",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-bmso_CV6qZn.jpg?t=171182135400",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3LjPxlJ0",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-38ntqD01Fs2.jpg?t=171182111600",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KPDN0O2V",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-OKYoeR8VACp.jpg?t=171182109244",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "35Jka5DE",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-FdTcCgsGiL3.jpg?t=171182136084",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "Kmey6lBe",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-qInLXuRW_05.jpg?t=171182136284",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "35NZkBgE",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-iGrU2XfwAS2.jpg?t=171182110019",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KmpmDemx",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz--37mr9XI2_K.jpg?t=171182110022",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3gve8l0R",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-JkOMbX0euWf.jpg?t=171182137995",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rMxyv8M8",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-1_vlnAy_Syn.jpg?t=171182136496",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rjp1Yv6p",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-yveOXMiKB_O.jpg?t=171182131062",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KYng62Er",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-F3_xzkTjrDn.jpg?t=171182116268",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3qbO2VPz",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-1BUAxzR15zL.jpg?t=171182115407",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9Qa6PwM7",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-O7_K2hulnr7.jpg?t=171182115206",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3Ln0Z1GR",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-FwXQhlx5N.jpg?t=171182140430",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3gdN6MnG",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-IR4rqiI1Ii5.jpg?t=171182115722",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "92XbmJWA",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-fGSP4bsDc_P.jpg?t=171182141051",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rGyemY6w",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-8JoI0o-0cF.jpg?t=171182114471",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3BkLGAM6",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-tqL1BCi5foA.jpg?t=171182116066",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3vppJbDM",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-Lw45isZGkCr.jpg?t=171182134029",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "30R4Dn6V",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-XJ7K3TtYH3p.jpg?t=171182134187",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rNv2vPP5",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-998Cy7RU9St.jpg?t=171182132228",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3yLQpEQd",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-BTPMeYL7qpA.jpg?t=171182134130",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KdowgQxB",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-saDF74jX34c.jpg?t=171182113868",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "r4qqAJjn",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-xXNynjQ0ggX.jpg?t=171182136023",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "374bjQRZ",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-k1nrSsFwE3_.jpg?t=171182135836",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rMXMJExa",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-qEAywROyUVa.jpg?t=171182129610",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rEAzjYVR",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-EjQUMxaCNpz.jpg?t=171182116516",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KZdYy0qb",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-U1KR_NPPPk4.jpg?t=171182116165",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rjJDGzzX",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-CpN2kTnP7Iq.jpg?t=171182137793",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9a0l1B2Q",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-xYDyzt4oR3s.jpg?t=171182138164",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9Q56ZwWY",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-Ojep_d5tERz.jpg?t=171182132319",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9amnV7OD",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-IOPAi95lDj8.jpg?t=171182110772",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "98lRkeNQ",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-rEocBKi5k-1.jpg?t=171182113039",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3p5mM2nZ",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-IocEB4w13R3.jpg?t=171182137034",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KDqWXb6p",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-f9SshzHie_G.jpg?t=171182132253",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "36qaPb8n",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-5WkYDsgrDJS.jpg?t=171182131541",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3z8yQE0j",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-OeKH557Vnpy.jpg?t=171182112332",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KDyWgbxy",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-3jPqQxwL_.jpg?t=171182114725",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KVyO1oAl",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-YbkSsyzdwrs.jpg?t=171182134798",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9eexOBqA",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-AKzdRGVLIqr.jpg?t=171182134768",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "K1557z7n",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-Ckcw3jACpq_.jpg?t=171182134894",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KYANYlDJ",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-fTB_CN1w_c8.jpg?t=171182133505",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "36WaMbpP",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-dn-q5wETEPd.jpg?t=171182113876",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rxn2ZNyV",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-JXfGlztMXx.jpg?t=171182113153",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "rEPzPYOk",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-aHLawQafyX4.jpg?t=171182133682",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9l7O4qzr",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-3dvXC1QgQ.jpg?t=171182113179",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9lknq5Jg",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-JPpYO_yl-cZ.jpg?t=171182135596",
				"width": 3200,
				"height": 2129
			}
		],
		"mechanical": [
			{
				"id": "9eeAq6zj",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-VmPiLHnNzVf.jpg?t=171182111394",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KZpmeD5o",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-IDytk9DrBLS.jpg?t=171182110786",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3R500k2m",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-3t1x0wA_V95.jpg?t=171182110668",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3Bk6kLzV",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-zWVH45kZL.jpg?t=171182139760",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "KVyDEP00",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-x_3qYYQsmRG.jpg?t=171182111465",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "9QDY1ngl",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-iejFYYzMD2.jpg?t=171182139005",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3oM2VoBv",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-gTmDB-Z0PwL.jpg?t=171182137247",
				"width": 3200,
				"height": 2129
			},
			{
				"id": "3RGxQXn1",
				"link": "77e99f473f818e5cb95808b00a63d5c4e8639844/photos/9lD2yknz-TJZ5T0rYdkt.jpg?t=171182137520",
				"width": 3200,
				"height": 2129
			}
		]
	}
}

# Auction ID
auction_id = "6a35c4e4-fd7d-4fe2-9a2e-d64b79a215b5"

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