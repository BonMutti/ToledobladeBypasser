$(document).ready(function () {
    setTimeout(function () {
        $("body").removeClass("tp-modal-open");
        $(document).removeClass("tp-modal tp-backdrop tp-active lazy-transclude view view-offer view-show view-showed");
        $("div").removeClass("tp-modal tp-backdrop tp-active lazy-transclude view view-offer view-show view-showed")
    }, 3000);

});