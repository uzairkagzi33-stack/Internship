$(document).ready(function () {
    //? onClick of first btn the second para willl be prepend
    $("#swap1").click(function (e) {
        // let a = ".second"
        // let b = ".first"
        e.preventDefault();
        $(".second").insertBefore($(".first"));
        // (a == ".second") ? ".first":".second";
        // (b == ".first") ? ".second":".first";
    });
    //?onClick of second btn the first will will be prepend
    $("#swap2").click(function (e) {
        // let a = ".second"
        // let b = ".first"
        e.preventDefault();
        $(".first").insertBefore($(".second"));
        // (a == ".second") ? ".first":".second";
        // (b == ".first") ? ".second":".first";
    });
});
