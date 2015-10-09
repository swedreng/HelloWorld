$(document).ready(function() {

    console.log("sdada00");

    $.ajax({

        url: "/Verial2",
        type: "POST",
        data: {},
        dataType: "json",
        success: function (cevap) {
        if(cevap.Cevap != "error"){
            console.log("girdin");
            $("#sonuc h4").html("Hocanizin sizin icin girdigi bilgiler").show();
            $("#baslik h1").html(cevap.Cevap[0]["username"]+" Hosgeldiniz");
            $("#sonuc p").fadeOut(6000);
            $("#bilgiler ul li#1").html("<b>Boyunuz :</b> " + cevap.Cevap[0]["boy"]);
            $("#bilgiler ul li#2").html("<b>Yasiniz :</b> " + cevap.Cevap[0]["yas"]);
            $("#bilgiler ul li#3").html("<b>Kilonuz :</b> " +cevap.Cevap[0]["kilo"]);
            $("#bilgiler ul li#4").html("<b>Bel Cevreniz :</b> " +cevap.Cevap[0]["belcevresi"]);
            $("#bilgiler ul li#5").html("<b>Kol Cevreniz :</b> " +cevap.Cevap[0]["kolcevresi"]);
            $("#bilgiler ul li#6").html("<b>Gogus Cevreniz :</b> " +cevap.Cevap[0]["goguscevresi"]);
            $("#bilgiler ul li#7").html("<b>Omuz Genisliginiz :</b> " +cevap.Cevap[0]["omuzgenisligi"]);
            $("#bilgiler ul li#8").html("<b>Hocanizin size notu :</b> " +cevap.Cevap[0]["not"]);
            $("#hdnAdmin_id").val(cevap.Cevap[0]["Admin_id"]);

        }
            if(cevap.Cevap == "error") {

                 $("#sonuc h4").html("Hocaniz sizin icin henuz bilgi girmemis.").show();
                 $("#sonuc h4").fadeOut(10000);

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
    $.Ekle =function(){

       var mesaj = $("#not").val();
       var Admin_id = $("#hdnAdmin_id").val();

        $.ajax({

            url: "/SendMesaggeAdmin",
            type: "POST",
            data: {"not":mesaj,"Admin_id":Admin_id},
            dataType: "json",
            success: function (cevap) {

                if(cevap.Cevap == "success"){
                    $("#not").val("");
                    $("#sonuc p").html("Notunuz gonderildi").show();
                    $("#sonuc p").fadeOut(4000);

                }else{

                    $("#sonuc p").html("Bir sorun olustu ve notunuz gonderilemedi").show();
                    $("#sonuc p").fadeOut(4000);

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