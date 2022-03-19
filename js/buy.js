(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$('#callCheck').change(function () {
  $('#email').prop("disabled", !this.checked);
}).change()


$("#btn-buy").mouseenter(function() {
    $("#btn-buy").html("Just a click away!");
})

$("#btn-buy").mouseleave(function() {
    $("#btn-buy").html("Buy now!");
})

function plantcard() {

    $("#choice").css("display", "inline")

    var plantName = $('#choosePlant').find(":selected").text();

    if (plantName.includes("Philodendron")) {
        $(".card").css("display", "none")
        $("#scandes").css("display", "block")
    }
    if (plantName.includes("Alocasia")) {
        $(".card").css("display", "none")
        $("#Alocasia").css("display", "block")
    }
    if (plantName.includes("Fiddle")) {
        $(".card").css("display", "none")
        $("#Fiddle").css("display", "block")
    }
    if (plantName.includes("Ficus")) {
        $(".card").css("display", "none")
        $("#Ficus").css("display", "block")
    }
    if (plantName.includes("Boston")) {
        $(".card").css("display", "none")
        $("#Boston").css("display", "block")
    }
    if (plantName.includes("Dieffenbachia")) {
        $(".card").css("display", "none")
        $("#Dieffenbachia").css("display", "block")
    }
    if (plantName.includes("Monstra")) {
        $(".card").css("display", "none")
        $("#Monstra").css("display", "block")
    }
    if (plantName.includes("Zamia")) {
        $(".card").css("display", "none")
        $("#Zamia").css("display", "block")
    }
    if (plantName.includes("Sansevieria")) {
        $(".card").css("display", "none")
        $("#Sansevieria").css("display", "block")
    }
}