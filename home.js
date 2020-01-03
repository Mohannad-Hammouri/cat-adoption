
	var cat = [{
		"id": "0",
		"image": "https://cdn2.thecatapi.com/images/1.jpg"},
		{
		"id": "1",
		"image": "https://cdn2.thecatapi.com/images/2hm.jpg"},
		{
		"id": "2",
		"image": "https://cdn2.thecatapi.com/images/3.jpg"},
		{
		"id": "3",
		"image": "https://cdn2.thecatapi.com/images/153.jpg"},
    	{
		"id": "4",
		"image": "https://cdn2.thecatapi.com/images/123.jpg"},
		{
		"id": "5",
		"image": "https://cdn2.thecatapi.com/images/137.jpg"},
		{
		"id": "6",
		"image": "https://cdn2.thecatapi.com/images/313.jpg"},
		{
		"id": "7",
		"image": "https://cdn2.thecatapi.com/images/71.jpg"},
		{
		"id": "8",
		"image": "https://cdn2.thecatapi.com/images/cu0.jpg"},
		{
		"id": "9",
		"image": "https://cdn2.thecatapi.com/images/43.jpg"},
		{
		"id": "10",
		"image": "https://cdn2.thecatapi.com/images/3pp.jpg"},
		{
		"id": "11",
		"image": "https://cdn2.thecatapi.com/images/bji.jpg"},
		{
		"id": "12",
		"image": "https://cdn2.thecatapi.com/images/dna.jpg"},
		{
		"id": "13",
		"image": "https://cdn2.thecatapi.com/images/ci3.jpg"},
		{
		"id": "14",
		"image": "https://cdn2.thecatapi.com/images/323.jpg"},
		{
		"id": "15",
		"image": "https://cdn2.thecatapi.com/images/br.jpg"},
		{
		"id": "16",
		"image": "https://cdn2.thecatapi.com/images/9h7.jpg"},
		{
		"id": "17",
		"image": "https://cdn2.thecatapi.com/images/akt.jpg"},
		{
		"id": "18",
		"image": "https://cdn2.thecatapi.com/images/399ZWi3H8.jpg"},
		{
		"id": "19",
		"image": "https://cdn2.thecatapi.com/images/2dc.jpg"},
		{
		"id": "20",
		"image": "https://cdn2.thecatapi.com/images/MTY1MjYzMA.jpg"},
		{
		"id": "21",
		"image": "https://cdn2.thecatapi.com/images/MTc4MzM4MQ.jpg"},
		{
		"id": "22",
		"image": "https://cdn2.thecatapi.com/images/9uh.jpg"},
		{
		"id": "23",
		"image": "https://cdn2.thecatapi.com/images/2es.jpg"},
		{
		"id": "24",
		"image": "https://cdn2.thecatapi.com/images/rtBHHEPd3.jpg"},
		{
		"id": "25",
		"image": "https://cdn2.thecatapi.com/images/MTU5MzAxNA.jpg"},
		{
		"id": "26",
		"image": "https://cdn2.thecatapi.com/images/dac.jpg"},
		{
		"id": "27",
		"image": "https://cdn2.thecatapi.com/images/aih.jpg"},
		{
		"id": "28",
		"image": "https://cdn2.thecatapi.com/images/9ar.jpg"},
		{
		"id": "29",
		"image": "https://cdn2.thecatapi.com/images/5ou.jpg"},
		{
		"id": "30",
		"image": "https://cdn2.thecatapi.com/images/9e7.jpg"},
		{
		"id": "31",
		"image": "https://cdn2.thecatapi.com/images/e45.jpg"},
		{
		"id": "32",
		"image": "https://cdn2.thecatapi.com/images/5.jpg"},
		{
		"id": "33",
		"image": "https://cdn2.thecatapi.com/images/cv6.jpg"},
		{
		"id": "34",
		"image": "https://cdn2.thecatapi.com/images/77.jpg"},
		{
		"id": "35",
		"image": "https://cdn2.thecatapi.com/images/c1k.jpg"},
		{
		"id": "36",
		"image": "https://cdn2.thecatapi.com/images/ehv.jpg"},
		{
		"id": "37",
		"image": "https://cdn2.thecatapi.com/images/MTYxNzMzOA.jpg"},
		{
		"id": "38",
		"image": "https://cdn2.thecatapi.com/images/2fl.jpg"},
		{
		"id": "39",
		"image": "https://cdn2.thecatapi.com/images/dkm.jpg"},
		{
		"id": "40",
		"image": "https://cdn2.thecatapi.com/images/2o3.jpg"},
		{
		"id": "41",
		"image": "https://cdn2.thecatapi.com/images/2f9.jpg"},
		{
		"id": "42",
		"image": "https://cdn2.thecatapi.com/images/IbSJ4PKGY.jpg"}
    	];

	function randImg() {
		var RepeatedCat = [];
	    var size = cat.length;
	    var flag = false;

	    for(i=0;i<5;i++){
	    	var x = Math.floor(size * Math.random());

	    	for(j=0;j<RepeatedCat.length;j++){ // this loop is to avoid showing the same cat more than once on the same page.
	    		if (RepeatedCat[j] == x){
	    			flag = true;
	    			break;
	    		}
	    	}
		    if (flag == false){
			    RepeatedCat.push(x);
			    document.getElementById('id' + i).innerHTML = cat[x].id;
			    document.getElementById('image' + i).src = cat[x].image;
			}
			else {
				flag = false;
				i--;
			}
		}
	}

	randImg();