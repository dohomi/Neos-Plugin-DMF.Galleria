$(function () {

    $.each($(".galleria-wrap"), function (i, obj) {
        var $data = $(obj).data();
        var $elem = $(obj).find('.neos-contentcollection');

        $.extend($data, {
            dataSelector: "li",
            dataConfig: function(li) {
                return {
                    image: $(li).find("img").attr("src"),
                    video: $(li).find("a").attr("href"),
                    title: $(li).find("img").data("title") || $(li).find("span").data("title"),
                    description: $(li).find("img").data("description") || $(li).find("span").data("description"),
                    layer: $(li).find(".layer").html()
                }
            }
        });

        $elem.css('height', $data.height);
        $elem.css('width', $data.width);
        console.log($data);
        Galleria.run($elem,
            $data);
    });

});