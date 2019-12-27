$(function() {
    moment.locale("pt-br");
    var locais = [
        "Praça de Máquinas 2º Piso",
        "Praça de Máquinas 3º Piso",
        "Praça de Máquinas Tank Top",
        "Casario",
        "LER",
        "Módulo 1A, 1B, 1C",
        "Módulo 2",
        "Módulo 4",
        "Módulo 5",
        "Módulo 9",
        "Módulo 10",
        "Módulo 12",
        "Módulo 13",
        "Módulo 15",
        "Módulo 16",
        "Módulo 21",
        "Popa do Navio/Heliponto",
        "Casa de Bombas",
        "Interior dos Tanques",
        "Convés",
        "Paiol do Mestre - Proa",
        "Proa do Navio",
        "Outro (especificar no registro)"
    ]
    $("#local").append(function(){
        return locais.map(function(local){
            return '<option>'+local+'</option>'
        })
    })
    $("#data").val(moment().format("DD/MM/YYYY"))
    var firebaseConfig = {
        apiKey: "AIzaSyCyfUdgBGLGGY8VC5e0RlQRG-Uw4tsBL_E",
        authDomain: "sirb-petrobras.firebaseapp.com",
        databaseURL: "https://sirb-petrobras.firebaseio.com",
        projectId: "sirb-petrobras",
        storageBucket: "sirb-petrobras.appspot.com",
        messagingSenderId: "537077234086",
        appId: "1:537077234086:web:1f2c8518d2a806b6f0b767",
        measurementId: "G-7GFPGZNQLN"
    };
    firebase.initializeApp(firebaseConfig);
    function saveData(data, nome, local, registro) {
        var ref = firebase.database().ref('registros/').push({data,nome,local,registro}, function(){
            $("#mensagem-salvo").show()
            $("#mensagem-enviando").hide()
        }).catch(function(e){
            console.log(e)
            $("#registro-erro-envio").show()
            $("#mensagem-enviando").hide()
        });
    }
    $("#submit").click(function(){
        $("#mensagem-enviando").show()
        var data = $("#data").val()
        var nome = $("#nome").val()
        var local = $("#local").val()
        var registro = $("#registro").val()
        if(registro.length > 8){            
            $("#registro-erro").hide()
            $("#registro-erro-envio").hide()
            saveData(data,nome,local,registro)
            $("#nome").val("")
            $("#registro").val("")
        } else {
            $("#mensagem-enviando").hide()
            $("#registro-erro").show()
        }
    })
  } );
