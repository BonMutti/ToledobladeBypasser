$(document).ready(function () {
    setTimeout(function () {
        $(document).removeClass("tp-modal tp-backdrop tp-active lazy-transclude view view-offer view-show view-showed");
        $("body").removeClass("tp-modal-open");
        $("div").removeClass("tp-modal tp-backdrop tp-active lazy-transclude view view-offer view-show view-showed")
    }, 3000);

});