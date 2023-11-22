//pendeklarasian untuk tag tag yang di pakai di html
var button = document.querySelector('#submit');
var input = document.querySelector("#input_persamaan");
var plty = document.querySelector('#plotly-chart');
var tampil_sumbu_x = document.querySelector("#sumbu-x")
var tampil_sumbu_x2 = document.querySelector("#sumbu-x2")
var tampil_sumbu_x3 = document.querySelector("#sumbu-x3")
var tampil_sumbu_y = document.querySelector("#sumbu-y")
var tampil_Diskriminan = document.querySelector("#Diskriminan")
var tampil_Diskriminan_2 = document.querySelector("#Diskriminan_2")
var tampil_xtream = document.querySelector("#xtream")
var tampil_xtream_xp = document.querySelector('#xtream_xp')
var tampil_xtream_yp = document.querySelector('#xtream_yp')
var tampil_ket_a = document.querySelector('#ket_a')
var tampil_ket_b = document.querySelector('#ket_b')
var tampil_ket_c = document.querySelector('#ket_c')
const content = document.querySelector(".display")

button.addEventListener("click" ,function(e){
    console.log("oke");
    e.preventDefault()
    content.classList.remove("display")
    //ngambil persamaan dari user 
    var persamaan = input.value;
    var data1=persamaan.split("x^2");
    var a = parseInt(data1[0]);
    var data2 = data1[1];
    var data2 = data2.split("x");
    var b = parseInt(data2[0]);
    var c = parseInt(data2[1]);

    //menuliskan fungsi dari inputan user
    if (b && c == 0){
        if (a != 1) {
            persamaan= ("fungsi kuadrat : "+a+"x²")
        }
        else if (a==1){
            persamaan=  ("fungsi kuadrat :  x²")
        }
    }
    else if ((b==0) && (c>0)){
        if (a != 1) {
            persamaan=  ("fungsi kuadrat : "+a+"x² + "+c)
        }
        else if (a==1){
            persamaan=  ("fungsi kuadrat : x² "+c)
        }
    }
    else if ((b==0) && (c<0)){
        if (a != 1) {
            persamaan=  ("fungsi kuadrat : "+a+"x²"+c)
        }
        else if (a==1){
            persamaan=  ("fungsi kuadrat : x²"+c)
        }
    }
    else if ((b>0) && (c==0)){
        if (a != 1) {
            persamaan=  ("fungsi kuadrat : "+a+"x² + "+b+"x")
        }
        else if (a==1){
            persamaan=  ("fungsi kuadrat : x² +"+b+"x")
        }
    }
    else if ((b<0) && (c==0)){
        if (a != 1) {
            persamaan=  ("fungsi kuadrat : "+a+"x²"+b+"x")
        }
        else if (a==1){
            persamaan=  ("fungsi kuadrat : x² "+b+"x")
        }
    }
    else if ((a==1)&&(b > 0)&&(c>0)) {
        persamaan= ("fungsi kuadrat : x² + "+ b +"x " + "+ "+ c)
    }
    else if ((a==1)&&(b > 0)&&(c<0)) {
        persamaan= ("fungsi kuadrat : x² + "+ b +"x " + c)
    }
    else if ((a==1)&&(b < 0)&&(c>0)) {
        persamaan= ("fungsi kuadrat : x² "+ b +"x " + "+ " + c)
    }
    else if ((a==1)&&(b < 0)&&(c<0)) {
        persamaan= ("fungsi kuadrat : x²"+ b +"x " + c)
    }
    else{
        persamaan= ("fungsi kuadrat : "+persamaan)
    };

    //mencari nilai sumbu x dengan menggunakan 2 cara
    var q = -4*a*c; //variabel q dibuat untuk memudahkan dalam perhirtungan dan pengkondisian
    if (q >0 )
        {var x1 = (Math.sqrt(b**2 + q ))}
    else if (q <0 )
        {var x1 = (Math.sqrt(b**2 - q ))};
    var x2 = x1
    var  x1 =(-b + x1)/(2*a)
    var x2 =(-b - x2)/(2*a)

    //funsi untuk mengecek bilangan bulat atau desimal,jika desminal maka dibatasi koma nya
    function cekbilangan(x){
    if (Number.isInteger(x)){
        return x
    }
    else{
        return x.toFixed(2)
    }}
    x1=cekbilangan(x1);
    x2=cekbilangan(x2);

    //menampilkan hasil nilai x beserta caranya
    if (Number.isInteger((x1) && (x2))){
        tampil_sumbu_x.innerHTML=('Mencari Nilai Sumbu-X <br>mencari nilai x dengan syarat y=0 <br> untuk mencari nilai x kita akan menggunakan faktor')
        if ((a >1) || (a<0)){
            tampil_sumbu_x2.innerHTML=("cari 2 angka yang jika dikalikan menghasilkan nilai c ")
            if ((x1 > 0) && (x2 >0)){
                tampil_sumbu_x3.innerHTML=("("+a+"x -"+(x1*a)+") (x -"+x2+")<br>pindahkan angka pada x1 dan x2 ke ruas kanan <br>x1 = "+ x1+"<br>x2 = "+ x2)
            }
            else if ((x1 > 0) && (x2 < 0)){
                tampil_sumbu_x3.innerHTML=("("+a+"x -"+(x1*a)+") (x +"+(-x2)+")<br>pindahkan angka pada x1 dan x2 ke ruas kanan<br>x1 = "+ x1+"<br>x2 = "+ x2)
            }
            else if ((x1 < 0) && (x2 > 0)){
                tampil_sumbu_x3.innerHTML=("("+a+"x +"+(-(x1*a))+") (x -"+x2+")<br>pindahkan angka pada x1 dan x2 ke ruas kanan<br>x1 = "+ x1+"<br>x2 = "+ x2)
            }
            else if ((x1 < 0) && (x2 < 0)){
                tampil_sumbu_x3.innerHTML=("("+a+"x  "+(-(x1*a))+") (x +"+(-x2)+")<br>pindahkan angka pada x1 dan x2 ke ruas kanan<br>x1 = "+ x1+"<br>x2 = "+ x2)
            }
        else{
            tampil_sumbu_x2.innerHTML=("cari 2 angka yang jika dikalikan menghasilkan nilai c dan jika dtambahkan menghasilkan nilai b")
            if ((x1 > 0) && (x2 >0)){
                tampil_sumbu_x3.innerHTML=("(x -"+x1+") (x -"+x2+")<br>pindahkan angka pada x1 dan x2 ke ruas kanan<br>x1 = "+ x1+"<br>x2 = "+ x2)
            }
            else if ((x1 > 0) && (x2 < 0)){
                tampil_sumbu_x3.innerHTML=("(x -"+x1+") (x +"+(-x2)+")<br>pindahkan angka pada x1 dan x2 ke ruas kanan<br>x1 = "+ x1+"<br>x2 = "+ x2)
            }
            else if ((x1 < 0) && (x2 > 0)){
                tampil_sumbu_x3.innerHTML=("(x +"+(-x1)+") (x -"+x2+")<br>pindahkan angka pada x1 dan x2 ke ruas kanan<br>x1 = "+ x1+"<br>x2 = "+ x2)
            }
            else if ((x1 < 0) && (x2 < 0)){
                tampil_sumbu_x3.innerHTML=("(x  "+(-x1)+") (x +"+(-x2)+")<br>pindahkan angka pada x1 dan x2 ke ruas kanan<br>x1 = "+ x1+"<br>x2 = "+ x2)
            }
        };
        }
    }
    else{
        tampil_sumbu_x.innerHTML=('Mencari Nilai Sumbu-X <br>untuk mencari nilai x kita akan menggunakan rumus ABC')
        tampil_sumbu_x2.innerHTML=("Rumus : -b  ± √b² -4 * a * c /2 *a<br>-"+b+ " ± √"+b+"² -4 * "+a+ " * "+c +" /2 * "+a)
        if (q >0 ){
            tampil_sumbu_x3.innerHTML=("-"+b+ " ± √"+b**2+" + "+q+" /2 *"+a+"<br>-"+b+ " ± √"+(b**2+q)+" /"+2*a+"<br>x1 = "+x1+"<br>x2 = "+x2)
        }
        else if (q < 0 ){
            tampil_sumbu_x3.innerHTML=("-"+b+ " ± √"+b**2+" + "+q+" /2 *"+a+"<br>-"+b+ " ± √"+(b**2-q)+" /"+ (2*a)+"<br>x1 = "+x1+"<br>x2 = "+x2)
            }
    };

    //menentukan nilai y 
    tampil_sumbu_y.innerHTML=("mencari nilai y dengan syarat x=0 <br>nilai y = "+c);

    //menentukan nilai diskriminan
    if (q >0 )
        {var d = (b**2 + q )}
    else if (q <0 )
        {var d = (b**2 - q )};
    tampil_Diskriminan.innerHTML=("Mencari nIlai diskriminan<br>rumus : D = b² - 4 * a *c<br>D = "+b+"² - 4 *"+a+ "*"+c+"<br>D = "+d);
    if (d > 0){tampil_Diskriminan_2.innerHTML=("nilai D > 0 maka :<br>kurva memotong sumbu x di 2 titik")}
    else if (d < 0){tampil_Diskriminan_2.innerHTML=("nilai D < 0 maka :<br>kurva tidak memotong sumbu x")}
    else if (d = 0){tampil_Diskriminan_2.innerHTML=("nilai D = 0 maka :<br>kurva menyinggung sumbu x")};

    //mencari nilai extream
    tampil_xtream.innerHTML = ("mencari nilai extream")
    var xp = -b / (2*a);
    xp=cekbilangan(xp)
    tampil_xtream_xp.innerHTML= ("sumbu simetris/xp<br>rumus xp = -b/2a<br>xp = -"+b+" /2* "+a+"<br>xp = "+xp);

    if (q >0 )
        {var yp = ((b**2 + q )/(-4*a))}
    else if (q <0 )
        {var yp = ((b**2 - q )/(-4*a))};
    yp=cekbilangan(yp)
    tampil_xtream_yp.innerHTML=("Mencari nIlai maximum/minimum<br>yp = "+b+"² - 4 *"+a+ "*"+c+"/4 * "+a+"<br>yp= "+yp);

    //keterangan tambahan
    if (a > 0){tampil_ket_a.innerHTML=("a = " +a+", a > 0, maka :<br>kurva buka ke atas")}
    else if (a < 0 ){tampil_ket_a.innerHTML=("a = " +a+", a < 0, maka :<br>kurva buka ke bawah")};

    if ((a > 0 ) && (b > 0))
    {tampil_ket_b.innerHTML=("a = "+a+" b = "+b+"<br> a > 0 dan b > 0 maka :<br>kurva berada di kiri sumbu y")}
    else if ((a < 0 ) && (b < 0)) 
    {tampil_ket_b.innerHTML=("a = "+a+" b = "+b+"<br> a < 0 dan b < 0 maka :<br>kurva berada di kiri sumbu y")}
    else if ((a < 0 ) && (b > 0))
    {tampil_ket_b.innerHTML=("a = "+a+" b = "+b+"<br> a < 0 dan b > 0 maka :<br>kurva berada di kanan sumbu y")}
    else if ((a>0) && (b<0))
    {tampil_ket_b.innerHTML=("a = "+a+" b = "+b+"<br> a > 0 dan b < 0 maka :<br>kurva berada di kanan sumbu y")}
    else if (b == 0)
    {tampil_ket_b.innerHTML=("b = 0 maka : <br>kurva simetris dengan sumbu y")};

    if (c > 0 ) 
    {tampil_ket_c.innerHTML=("c = " +c+", c > 0, maka :<br>kurva memotong sumbu y positif")}
    else if (c < 0)  
    {tampil_ket_c.innerHTML=("c = " +c+", c < 0, maka :<br>kurva memotong sumbu y negatif")}
    else if (c=0) 
    {tampil_ket_c.innerHTML=("c = " +c+", c = 0, maka :<br>kurva memotong sumbu y di titik 0")};
    var xValues = []
    var yValues = []

    //pengkondisian untuk menentukan nilai yang terbesar yang nantinya akan digunakan sebagai batas x axis
    if (x1 > x2) {
        x = x1
    }
    else if (x2 > x1){
        x=x2
    };

    //pembuatam graph
    for (var x = -8; x <= 8; x+= 0.1){
        xValues.push(x);
        yValues.push(a*(x**2)+b*x+c)
    }
    var data = [{
        x : xValues,
        y : yValues,
        mode: "lines"},
        {
        x:[x1,x2,xp,0],
        y:[0,0,yp,c],
        mode : 'markers',
        type : 'scatter'
        }
    ];
    // var titikdata=[{
    //     x:[x1,x2,xp,0],
    //     y:[0,0,yp,c],
    //     mode : 'markers',
    //     type : 'scatter'
    // }];
    var layout = {
    title:persamaan,
    xaxis:{
        title : 'koordinat x',
        range:[(Math.abs(x1*2)),(-Math.abs(x1*2))]
    },
    yaxis:{
        title : 'koordinat y',
        range:[(-Math.abs(c*2+3)),(Math.abs(c*2+3))]
    },
    annotations:[
        {x: x1,
        y:1,
        text : ("("+x1+","+0+")"),
        showarrow : false},
        {x: x2,
        y:1,
        text : ("("+x2+","+0+")"),
        showarrow : false},
        {x: xp,
        y:yp-1,
        text : ("("+xp+","+yp+")"),
        showarrow : false},
        {x: 0,
        y:c+1,
        text : ("("+0+","+c+")"),
        showarrow : false}
    ],
    width: 500,
    height:400
    };
    Plotly.newPlot('plotly-chart',data,layout)
})
