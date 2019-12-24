moment.locale("pt-br");

Parsley.addMessages('pt-br', {
    required:       "Este campo é obrigatório."
});
  
Parsley.setLocale('pt-br');

$( function() {
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
    firebase.analytics();

    function saveData(data, nome, local, registro) {
        firebase.database().ref('registros/').push({data,nome,local,registro});
    }
    $("#submit").click(function(){
        data = $("#data").val()
        nome = $("#nome").val()
        local = $("#local").val()
        registro = $("#registro").val()
        if(registro.length > 8){
            console.log("Salvo")
            saveData(data,nome,local,registro)
        } else {
            console.log("Erro")
        }
    })
  } );