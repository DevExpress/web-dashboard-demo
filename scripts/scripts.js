function showDemoPopup() {
    $("#demoInfoPopup").dxPopup({
        visible: true,
        animation: { hide: { type: 'pop', duration: 300, to: { opacity: 0, scale: 0.55 }, from: { opacity: 1, scale: 1 } } },
        closeOnOutsideClick: true,
        dragEnabled: false,
        height: function() { return $(window).height(); },
        position: { my: "right", at: "right", of: window },
        showTitle: false,
        width: "573px"
    });
}
function hideDemoPopup() {
    $("#demoInfoPopup").dxPopup('instance').hide();
}