$(function () {

    $.each($(".galleria-wrap"), function (i, obj) {
        var $data = $(obj).data();
        var $elem = $(obj).find('.neos-contentcollection');

        $.extend($data, {
            dataConfig: function(img) {
                return {
                    layer: $(img).next('div').html()
                }
            }
        });
        
        $elem.css('height', $data.height);
        $elem.css('width', $data.width);
        Galleria.run($elem,
            $data);
    });

});