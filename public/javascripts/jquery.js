$(document).ready(function() {


    $.GirisYap = function () {


        var formData = {
            'name': $('input[name=uye_kadi]').val(),
            'password': $('input[name=uye_sifre]').val()
        };

        if (!formData["name"] && !formData["password"]) {
            $("#sonuc p").html("Lutfen bos alan birakmayiniz.").show();
            $("#sonuc p").fadeOut(3000);


        } else {


            $.ajax({

                url: "/GirisYap",
                type: "POST",
                data: {"username": formData["name"], "password": formData["password"]},
                dataType: "json",
                success: function (cevap) {
                    console.log(arguments);


                    if(cevap.Cevap == "error"){

                        $("#sonuc p").html("Boyle bir kullanici bulunamadi.");
                        $("#sonuc p").fadeOut(3000);

                    }else{
                        console.log(cevap.Admin);
                    if (cevap.Admin == true) {


                        location.href = "/admin";


                    } else {

                        location.href = "/kullanici/kullanici";

                    }

                    }
                }, error: function (ma, ydin) {
                    if (ma.status === 0) {
                        alert('baðlantý yok, aðý doðrulayýn.');
                    } else if (ma.status == 404) {
                        alert('Requested page not found. [404]');
                    } else if (ma.status == 500) {
                        alert('Dahili Sunucu Hatasý [500].');
                    } else if (ydin === 'parsererror') {
                        alert('Ýstenen JSON ayrýþtýrmasý baþarýsýz.');
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
    }

    $.Uyeol = function () {

        $.ajax({

            url: "/uyeol",
            type: "GET",
            success: function (cevap) {
                location.href = "/uyeol";

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
    $.kayitol = function () {


        var formData = {
            'username': $('input[name=uye_kadi]').val(),
            'surname': $('input[name=uye_sadi]').val(),
            'password': $('input[name=uye_sifre]').val(),
            'kullanici_eposta': $('input[name=uye_eposta]').val()
        };

        if (!formData["name"] && !formData["username"] && !formData["password"] && !formData["eposta"]) {
            $("#sonuc p").html("Lutfen bos alan birakmayiniz.").show();
            $("#sonuc p").fadeOut(3000);


        } else {


            $.ajax({

                url: "/newuser",
                type: "POST",
                data: {
                    "username": formData["username"],
                    "surname": formData["surname"],
                    "password": formData["password"],
                    "kullanici_eposta": formData["kullanici_eposta"]
                },
                dataType: "json",
                success: function (cevap) {
                console.log(cevap);

                    if (cevap.Cevap == "succes") {

                        $("#sonuc p").html("Basariyla uye oldunuz.").show();
                        $("#sonuc p").fadeOut(3000);
                        $("#form #formad input").val("");


                    } else {
                        $("#sonuc p").html("Bir sorun oluþtu ve uye olamadiniz.").show();
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
    }

    $.Back = function () {

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






});