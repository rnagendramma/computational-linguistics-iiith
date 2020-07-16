var earray=[["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],["some students like to study in the night","at night some students like to study"],["John and Mary went to church","Mary and John went to church"],
			 ["John went to church after eating",	"after eating John went to church","John after eating went to church"],
			 ["did he go to market","he did go to market"],
			 ["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
			 ["John goes to the library and studies","John studies and goes to the library"],
			 ["John ate an apple so did she","she ate an apple so did John"],
			 ["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
			 ["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]]

var Esen=["John ate an apple before afternoon","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market","he did go to market","the woman who called my sister sells cosmetics","John goes to the library and studies","John ate an apple so did she","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday"]

var harray=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
			["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
			["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
			["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
			["बिल्लियों को मारकर कुत्ता सो गया"	,"मारकर बिल्लियों को कुत्ता सो गया"	 ,"बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता"	,"कुत्ता सो गया बिल्लियों को मारकर"	,"कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
			["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
			["एक बड़ी सी किताब वहाँ है	","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]]

var Hsen=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया","एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है"]


function My_selection()
{
    document.getElementById("d1").innerHTML=""
    document.getElementById("d2").innerHTML=""
    document.getElementById("d3").innerHTML=""
	document.getElementById("d4").innerHTML=""
    document.getElementById("resen").style.visibility="hidden";
	document.getElementById("correct").style.visibility="hidden";

if(document.getElementById("eng").selected)
{

	document.getElementById("p1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words"
    document.getElementById("p2").innerHTML="(select the buttons in proper order)";
    var count=0
	var E=Esen[Math.floor(Math.random() * Esen.length)];
	var body = document.getElementsByTagName("p")[2];
    E1=E.split(" ");
	for(i=0;i<E1.length;i++)
    {
	    j=Math.floor(Math.random()*E1.length)
	    E=E1[i];
	    E1[i]=E1[j]
	    E1[j]=E;
    }
    for(i=0;i<E1.length;i++)
    {
        var button = document.createElement("button");
		button.id='button'+i;
        button.innerHTML = E1[i]
        body.appendChild(button);
        
        button.addEventListener ("click",function()
        {
            document.getElementById("d2").innerHTML="Formed Sentence<span style='font-style:italic;color:blue;font-weight:lighter'>(after selecting words):</span>";
            document.getElementById("d3").innerHTML+=this.innerHTML+" ";
            this.style.visibility="hidden";
            count=count+1;
            if(count>0)
            {
                document.getElementById("resen").style.visibility="visible";
            }
				var k=String(document.getElementById("d3").innerHTML).replace(/\s+$/,"");
				k1=k.split(" ");
            if(E1.length == k1.length)
            {
                document.getElementById("correct").style.visibility="visible";
            }

        });
    }
    }
    else if (document.getElementById("hindi").selected) 
    { 
	 document.getElementById("p1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
	 document.getElementById("p2").innerHTML="(select the buttons in proper order):";
	var count=0
	var H=Hsen[Math.floor(Math.random() * Hsen.length)];
    H1=H.split(" ");
	var body = document.getElementsByTagName("p")[2];
	for(i=0;i<H1.length;i++)
    {
	    j=Math.floor(Math.random()*H1.length)
	    H=H1[i];
	    H1[i]=H1[j]
	    H1[j]=H;
    }
    for(i=0;i<H1.length;i++)
    {
        var button = document.createElement("button");
		button.id='button'+i;
        button.innerHTML = H1[i]
        body.appendChild(button)

        button.addEventListener ("click",function()
        {
            document.getElementById("d2").innerHTML="Formed Sentence<span style='font-style:italic;color:blue;font-weight:lighter'>(after selecting words):</span>";
            document.getElementById("d3").innerHTML+=this.innerHTML+" ";
            this.style.visibility="hidden";
            count=count+1;
            if(count>0)
            {
                document.getElementById("resen").style.visibility="visible";
            } 
				var k=String(document.getElementById("d3").innerHTML).replace(/\s+$/,"");
				k1=k.split(" ");
            if(H1.length == k1.length)
            {
                document.getElementById("correct").style.visibility="visible";
            }
        });
    }
    }
    else
    {
	    document.getElementById("p1").innerHTML=""
	    document.getElementById("p2").innerHTML=""
	    document.getElementById("d1").innerHTML=""
    }
}

function Reformfun()
{
    for(i=0;i<E1.length||i<H1.length;i++)
	{
        if(document.getElementById('button'+i).style.visibility=="hidden")
		{
    	document.getElementById('button'+i).style.visibility="visible";
	    document.getElementById('d2').innerHTML=""
	    document.getElementById('d3').innerHTML=""
		document.getElementById('d4').innerHTML=""
	    document.getElementById('resen').style.visibility="hidden"
		document.getElementById('correct').style.visibility="hidden"
		}

    }
}


function correctfun(){
    var p=String(document.getElementById("d3").innerHTML).replace(/\s+$/,"");
	var a=0;
    var b=0;
    if(document.getElementById("eng").selected)
    {
        for(q=0;q<10;q++)
        {
            for(r=0;r<earray[q].length;r++)
            {
                if(p== earray[q][j])
                {
                    a++;
                }
            }
        } 
    }
    else if(document.getElementById("hindi").selected)
    {
        for(q=0;q<7;q++)
        {
            for(r=0;j<harray[q].length;r++)
            {
                if(p==harray[q][r])
                {
                    b++;
                }
            }
        }
    }
	if(a==1 || b==1)
        {
            document.getElementById("d4").innerHTML="<span style='color:green; font-size:28px'>Right answer!!!</span>"
        }
        else
        {
            document.getElementById("d4").innerHTML="<span style='color:red; font-size:28px'>Wrong answer!!!</span>"
        }
} 