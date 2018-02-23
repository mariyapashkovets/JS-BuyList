$(function(){
    function updateNode(node, fn) {
        node.fadeOut(100, function(){
            fn();
            node.fadeIn(100);
        });
    }

    function add(name) {
        var $list= $(LIST);
        var $boughtProducts = $(boughtProducts);
        var $unboughtProducts = $(unboughtProducts);
        var $miniNode = $(miniNode);
        var $node = $(ITEM_TEMPLATE);
        var $title = $node.find('.title1');
        var $miniTitle = $miniNode.find(".title");
        $title.text(name);
        $miniTitle.text(name);
        $node.find(".button6").click(function(){
            $node.slideUp(300,function () {
                $node.remove();
            });
            $list.css("height","-=60px");
            $miniNode.remove();
        }
        );
        var  $editInput = $node.find(".edit1");
        $editInput.val(name);

        $title.click(function () {
            if ($node.find(".button5").text() == "Куплено") {
                $node.addClass("edit1");
                $title.css("display", "none");
                $editInput.css("display", "inline-block");
                $editInput.css("width", "100px");
                $editInput.css("margin-left", "-102px");
                $editInput.focus();
            }
        });

        $editInput.focusout(function () {
            name=$editInput.val();
            $title.text(name);
            $miniTitle.text(name);
            $node.removeClass("edit");
            $editInput.css("display", "none");
            $title.css("display", "inline-block");

        });

        $node.find(".button3").click(function() {
            updateNode( $node.find(".button4"), function () {
                var quantity = $node.find(".button4").text();
                var $quantity = Number(quantity);
                var numb = $quantity + 1;
                $node.find(".button4").text(numb);
                $miniNode.find(".button7").text(numb);
                $node.find(".button2").css("opacity", "1");
            });
        });

            $node.find(".button2").click(function() {
                    var quantity = $node.find(".button4").text();
                    var $quantity=Number(quantity);
                    var numb=$quantity-1;
                if(numb>1) {
                    updateNode( $node.find(".button4"), function () {
                        $node.find(".button4").text(numb);
                        $miniNode.find(".button7").text(numb);
                    });
                }
                if(numb==1){
                    updateNode( $node.find(".button4"), function () {
                        $node.find(".button4").text(numb);
                        $miniNode.find(".button7").text(numb);
                        $node.find(".button2").css("opacity", "0.5");
                    });
                }
                });

        $node.find(".button5").click(function() {
            if ($node.find(".button5").text() == "Куплено") {
                updateNode($node,function () {
                    $node.find(".title1").css("text-decoration", "line-through");
                    $node.find(".button2").css("visibility", "hidden");
                    $node.find(".button3").css("visibility", "hidden");
                    $node.find(".button5").css("width", "+=8px");
                    $node.find(".bought").css("margin-left", "35px");
                    $node.find(".button5").text("Не куплено");
                    $node.find(".button6").css("display", "none");

                    $miniNode.remove();
                    $boughtProducts.append($miniNode);
                    $miniNode.css("text-decoration", "line-through");
                    $miniNode.find(".button7").css("text-decoration", "line-through");
                    $boughtProducts.css("height", "+=10px");
                    $boughtProducts.css("background", "white");
                });
            }
            else {
                updateNode($node, function () {
                    $node.find(".title1").css("text-decoration", "none");
                    $node.find(".button2").css("visibility", "visible");
                    $node.find(".button3").css("visibility", "visible");
                    $node.find(".button5").css("width", "-=8px");
                    $node.find(".bought").css("margin-left", "0px");
                    $node.find(".button5").text("Куплено");
                    $node.find(".button6").css("display", "inline-block");

                    $miniNode.remove();
                    $unboughtProducts.append($miniNode);
                    $miniNode.css("text-decoration", "none");
                    $miniNode.find(".button7").css("text-decoration", "none");
                    $boughtProducts.css("height", "-=10px");
                });
            }
        });
        $node.find(".title1").css("padding","0 1.5em");
        $miniNode.css("width","100px");
        $miniNode.css("display","inline-block");
        $miniNode.css("height",'35px');
        $miniNode.css("line-height","35px");
        $miniNode.css("margin-top","15px");
        $miniNode.css("background","#dbdbdb");
        $miniNode.css("border-radius","5px");

        $node.css("width","735px");
        $node.css("display","inline-block");
        $node.css("height","60px");
        $node.css("line-height","50px");
        $node.css("border-top","#dbdbdb solid 1px");
        $list.append($node);
        $list.css("height","+=60px");
        $node.hide();
        $node.slideDown(300);
        $miniNode.css("margin-left","3px");

        $unboughtProducts.append($miniNode);
        $boughtProducts.css("border-bottom-left-radius", "5px");
        $boughtProducts.css("border-bottom-right-radius", "5px");

        $(".text").val("");
        $(".text").focus();
    }

    var LIST = $('.list-of-items');
    var ITEM_TEMPLATE = $('.one-item2').html();
    var miniNode = $(".box3").html();
    var boughtProducts = $(".boughtProducts");
    var unboughtProducts = $(".unboughtProducts");

    $(".button1").click(function() {
        var name = $(".text").val();
            add(name);

    });

    $('html').keydown(function(eventObject){
        if (eventObject.keyCode == 13) {
                var name = $(".text").val();
                add(name);
        }
    });

    add("Помідори");
    add("Печиво");
    add("Сир");
    $('.text').blur();

});