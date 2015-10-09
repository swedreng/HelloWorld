$(document).ready(function() {

    $("#checkbox").on('click',function(){
        var userId = $('#deneme').val();
        var uyeMsjId = $('#hdnMesaj_id').val();
        $.post("/UyemesajSil",{'userId':userId},function(data){



        });



    });


   $("#btnUyeMesajlari").on('click',function(){
       var i = 0;
       var userId = $('#deneme').val();


       $.post("/Uyemesaj",{'user_id':userId},function(data){



           $('#divUyeMesajlari').html("" +
               "<tr>" +
               "<th>Mesaj</th>"+
               "<th>Tarih</th>");

               for (i; i < data.Cevap.length; i++) {
                   var day = moment(data.Cevap[i]["uyeMesajTarih"]).lang("tr").format('MMMM Do YYYY, h:mm:ss a');
               $('#divUyeMesajlari').append($(' <tr style="padding:5px; margin:5px;"> <td style="width:60%"><input type="checkbox" id="checkbox" name="checkbox"> </input>' +  data.Cevap[i]["not"]  + "</td><td style='width:40%; text-align:right;'> "+ day + '</td><input type="hidden" id="hdnMesaj_id"> </input> '));
                   $('#hdnMesaj_id').val(data.Cevap[i].id);
           }

       });

   });







    $.CikisYap = function(){

            console.log(Cookies.get());

            $.ajax({

                url: "/cikisyap",
                type: "GET",
                success: function (cevap) {
                    location.href = "/";

                }

                ,
                error: function (ma, ydin) {
                    if (ma.status === 0) {
                        alert('baðlantý yok, aðý doðrulayýn.');
                    } else if (ma.status == 404) {
                        alert('Requested page not found. [404]');
                    } else if (ma.status == 500) {
                        alert('Dahili Sunucu Hatasý [500].');
                    } else if (ydin === 'parsererror') {
                        alert('Ýstenen JSON ayrýþtýrmasý baþarýsýz');
                    } else if (ydin === 'timeout') {
                        alert('Zaman aþýmý hatasý.');
                    } else if (ydin === 'abort') {
                        alert('Ajax isteði reddedildi.');
                    } else {
                        alert('Yakalanmamýþ Hata.\n' + ma.responseText);
                    }
                }
            });

        }



    $.Guncelle = function(){


        var dataa = {

            'user_id' : $("#deneme").val(),
            'boy': $('input[name=boy]').val(),
            'yas': $('input[name=yas]').val(),
            'kilo': $('input[name=kilo]').val(),
            'belcevresi' :$('input[name=belcevresi]').val(),
            'kolcevresi': $('input[name=kolcevresi]').val(),
            'goguscevresi': $('input[name=goguscevresi]').val(),
            'omuzgenisligi': $('input[name=omuzgenisligi]').val(),
            'not': $('textarea[name=not]').val()

        };


        $.ajax({

            url: "/UyeGuncelle/b",
            type: "POST",
            data:dataa,
            dataType: "json",
            success: function (cevap) {
                console.log(cevap);

                if (cevap.Cevap == "succes") {

                    $("#sonuc p").html("Basariyla uye bilgilerini guncellediniz.").show();
                    $("#sonuc p").fadeOut(3000);
                    $("#formed1 input,textarea").val("");
                    $.reflesh();


                } else {
                    $("#sonuc p").html("Bir sorun oluþtu ve uye bilgilerini guncelleyemediniz.").show();
                    $("#sonuc p").fadeOut(3000);

                }
            }, error: function (ma, ydin) {
                if (ma.status === 0) {
                    alert('baðlantý yok, aðý doðrulayýn.');
                } else if (ma.status == 404) {
                    alert('Requested page not found. [404]');
                } else if (ma.status == 500) {
                    alert('Dahili Sunucu Hatasý [500].');
                } else if (ydin === 'parsererror') {
                    alert('Ýstenen JSON ayrýþtýrmasý baþarýsýz');
                } else if (ydin === 'timeout') {
                    alert('Zaman aþýmý hatasý.');
                } else if (ydin === 'abort') {
                    alert('Ajax isteði reddedildi.');
                } else {
                    alert('Yakalanmamýþ Hata.\n' + ma.responseText);
                }
            }
        });





    }




    $.reflesh = function(){
        $(' #deneme ').html("");
        $.ajax({

            url: "/Verial1",
            type: "GET",
            success: function (cevap) {
                var i = 0;
                console.log(cevap.Cevap.length);
                console.log(cevap.Cevap[0]["username"]);
                for (i; i < cevap.Cevap.length; i++) {

                        $(' select#deneme ').append($('<option>', {
                            value: cevap.Cevap[i]["kullanici_id"],
                            text: cevap.Cevap[i]["username"] + " " + cevap.Cevap[i]["surname"]
                        }));

                }

            }

            ,
            error: function (ma, ydin) {
                if (ma.status === 0) {
                    alert('baðlantý yok, aðý doðrulayýn.');
                } else if (ma.status == 404) {
                    alert('Requested page not found. [404]');
                } else if (ma.status == 500) {
                    alert('Dahili Sunucu Hatasý [500].');
                } else if (ydin === 'parsererror') {
                    alert('Ýstenen JSON ayrýþtýrmasý baþarýsýz');
                } else if (ydin === 'timeout') {
                    alert('Zaman aþýmý hatasý.');
                } else if (ydin === 'abort') {
                    alert('Ajax isteði reddedildi.');
                } else {
                    alert('Yakalanmamýþ Hata.\n' + ma.responseText);
                }
            }
        });



    }
    $.ajax({

        url: "/Verial1",
        type: "GET",
        success: function (cevap) {
            var i = 0;
            console.log(cevap.Cevap.length);
            console.log(cevap.Cevap[0]["username"]);
            for (i; i < cevap.Cevap.length; i++) {

                $(' select#deneme ').append($('<option>', {
                    value: cevap.Cevap[i]["kullanici_id"],
                    text: cevap.Cevap[i]["username"] + " " + cevap.Cevap[i]["surname"]
                }));

            }

        }

        ,
        error: function (ma, ydin) {
            if (ma.status === 0) {
                alert('baðlantý yok, aðý doðrulayýn.');
            } else if (ma.status == 404) {
                alert('Requested page not found. [404]');
            } else if (ma.status == 500) {
                alert('Dahili Sunucu Hatasý [500].');
            } else if (ydin === 'parsererror') {
                alert('Ýstenen JSON ayrýþtýrmasý baþarýsýz');
            } else if (ydin === 'timeout') {
                alert('Zaman aþýmý hatasý.');
            } else if (ydin === 'abort') {
                alert('Ajax isteði reddedildi.');
            } else {
                alert('Yakalanmamýþ Hata.\n' + ma.responseText);
            }
        }
    });
    var deger = "";


    $('#deneme').on('change', function (event) {
        deger = $(this).val();
        if(deger != 0){
            $('#userpanel').show();

            $('#tabUser #tabUyeBilgisi').addClass("active");
            $('#tabUser #tabUyeMesajlari').removeClass("active");

            $('#ana #ic1').addClass("active");
            $('#ana #ic2').removeClass("active");


            data = {

                kullanici_id: deger

            }

            $.ajax({

                url: "/Verikontrol",
                type: "POST",
                data: {"kullanici_id": data["kullanici_id"]},
                dataType: "json",
                success: function (cevap) {
                    if (cevap.Cevap != "yok") {

                        $(" #kaydet ").hide();
                        $("#sonuc p").html("Bu kullanici hakkinda bilgi mevcut tekrar kayit yapamazsiniz.").show();
                        $("#sonuc p").fadeOut(3000);
                        $('#boy').val(cevap.Cevap[0]["boy"]);
                        $('#yas ').val(cevap.Cevap[0]["yas"]);
                        $('#kilo').val(cevap.Cevap[0]["kilo"]);
                        $('#belcevresi').val(cevap.Cevap[0]["belcevresi"]);
                        $('#kolcevresi').val(cevap.Cevap[0]["kolcevresi"]);
                        $('#goguscevresi').val(cevap.Cevap[0]["goguscevresi"]);
                        $('#omuzgenisligi').val(cevap.Cevap[0]["omuzgenisligi"]);
                        $('#not').val(cevap.Cevap[0]["not"]);


                    } else {
                        $('#boy').val("");
                        $('#yas').val("");
                        $('#kilo').val("");
                        $('#belcevresi').val("");
                        $('#kolcevresi').val("");
                        $('#goguscevresi').val("");
                        $('#omuzgenisligi').val("");
                        $('#not').val("");

                        $(" #kaydet ").show();


                    }


                }, error: function (ma, ydin) {
                    if (ma.status === 0) {
                        alert('baðlantý yok, aðý doðrulayýn.');
                    } else if (ma.status == 404) {
                        alert('Requested page not found. [404]');
                    } else if (ma.status == 500) {
                        alert('Dahili Sunucu Hatasý [500].');
                    } else if (ydin === 'parsererror') {
                        alert('Ýstenen JSON ayrýþtýrmasý baþarýsýz');
                    } else if (ydin === 'timeout') {
                        alert('Zaman aþýmý hatasý.');
                    } else if (ydin === 'abort') {
                        alert('Ajax isteði reddedildi.');
                    } else {
                        alert('Yakalanmamýþ Hata.\n' + ma.responseText);
                    }
                }
            });
        }
        else{
            $('#userpanel').hide();
        }


    });

        $.KayitOl = function(){




            var dataa = {
                'user_id' : $("#deneme").val(),
                'boy': $('input[name=boy]').val(),
                'yas': $('input[name=yas]').val(),
                'kilo': $('input[name=kilo]').val(),
                'belcevresi' :$('input[name=belcevresi]').val(),
                'kolcevresi': $('input[name=kolcevresi]').val(),
                'goguscevresi': $('input[name=goguscevresi]').val(),
                'omuzgenisligi': $('input[name=omuzgenisligi]').val(),
                'not': $('textarea[name=not]').val()

            };


            $.ajax({

                url: "/UyeKayit",
                type: "POST",
                data:dataa,
                dataType: "json",
                success: function (cevap) {
                    console.log(cevap);

                    if (cevap.Cevap == "succes") {

                        $("#sonuc p").html("Basariyla uye bilgilerini kaydettiniz.").show();
                        $("#sonuc p").fadeOut(3000);
                        $("#formed1 input,textarea").val("");


                    } else {
                        $("#sonuc p").html("Bir sorun olustu ve uye bilgilerini kaydedemediniz.").show();
                        $("#sonuc p").fadeOut(3000);

                    }
                }, error: function (ma, ydin) {
                    if (ma.status === 0) {
                        alert('baðlantý yok, aðý doðrulayýn.');
                    } else if (ma.status == 404) {
                        alert('Requested page not found. [404]');
                    } else if (ma.status == 500) {
                        alert('Dahili Sunucu Hatasý [500].');
                    } else if (ydin === 'parsererror') {
                        alert('Ýstenen JSON ayrýþtýrmasý baþarýsýz');
                    } else if (ydin === 'timeout') {
                        alert('Zaman aþýmý hatasý.');
                    } else if (ydin === 'abort') {
                        alert('Ajax isteði reddedildi.');
                    } else {
                        alert('Yakalanmamýþ Hata.\n' + ma.responseText);
                    }
                }
            });



        }

        $.Sil =function(){
            var data5 = {
            'user_id' : $("#deneme").val()
            }

            $.ajax({

                url: "/UyeSil/a",
                type: "POST",
                data: data5,
                dataType: "json",
                success: function (cevap) {
                    console.log(cevap);

                    if (cevap.Cevap == "succes") {

                        $("#sonuc p").html("Basariyla uyeyi Sildiniz.").show();
                        $("#sonuc p").fadeOut(3000);
                        $("#ic1 input,textarea").val("");
                        $.reflesh();


                    } else {
                        $("#sonuc p").html("Bir sorun oluþtu ve uyeyi silemediniz.").show();
                        $("#sonuc p").fadeOut(3000);

                    }
                }, error: function (ma, ydin) {
                    if (ma.status === 0) {
                        alert('baðlantý yok, aðý doðrulayýn.');
                    } else if (ma.status == 404) {
                        alert('Requested page not found. [404]');
                    } else if (ma.status == 500) {
                        alert('Dahili Sunucu Hatasý [500].');
                    } else if (ydin === 'parsererror') {
                        alert('Ýstenen JSON ayrýþtýrmasý baþarýsýz');
                    } else if (ydin === 'timeout') {
                        alert('Zaman aþýmý hatasý.');
                    } else if (ydin === 'abort') {
                        alert('Ajax isteði reddedildi.');
                    } else {
                        alert('Yakalanmamýþ Hata.\n' + ma.responseText);
                    }
                }
            });



        }



    });













