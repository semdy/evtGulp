;(function(){
    var resData ={
        "groups":[
            {
                "keys":"btn1_disable_png,btn1_png,btn2_disable_png,btn2_png,chocolate_png,pauseicon_png,pic1A_jpg,pic1B_jpg,pic2A_jpg,pic2B_jpg,pic3A_jpg,pic3B_jpg,playicon_png,pro1_text_png,pro1_png,pro2_text_png,pro2_png,text_png,videocover_jpg",
                "name":"preload"
            }],
        "resources":[
            {
                "name":"btn1_disable_png",
                "type":"image",
                "url":"btn1_disable.png"
            },
            {
                "name":"btn1_png",
                "type":"image",
                "url":"btn1.png"
            },
            {
                "name":"btn2_disable_png",
                "type":"image",
                "url":"btn2_disable.png"
            },
            {
                "name":"btn2_png",
                "type":"image",
                "url":"btn2.png"
            },
            {
                "name":"chocolate_png",
                "type":"image",
                "url":"chocolate.png"
            },
            {
                "name":"pauseicon_png",
                "type":"image",
                "url":"pauseicon.png"
            },
            {
                "name":"pic1A_jpg",
                "type":"image",
                "url":"pic1A.jpg"
            },
            {
                "name":"pic1B_jpg",
                "type":"image",
                "url":"pic1B.jpg"
            },
            {
                "name":"pic2A_jpg",
                "type":"image",
                "url":"pic2A.jpg"
            },
            {
                "name":"pic2B_jpg",
                "type":"image",
                "url":"pic2B.jpg"
            },
            {
                "name":"pic3A_jpg",
                "type":"image",
                "url":"pic3A.jpg"
            },
            {
                "name":"pic3B_jpg",
                "type":"image",
                "url":"pic3B.jpg"
            },
            {
                "name":"playicon_png",
                "type":"image",
                "url":"playicon.png"
            },
            {
                "name":"pro1_text_png",
                "type":"image",
                "url":"pro1_text.png"
            },
            {
                "name":"pro1_png",
                "type":"image",
                "url":"pro1.png"
            },
            {
                "name":"pro2_text_png",
                "type":"image",
                "url":"pro2_text.png"
            },
            {
                "name":"pro2_png",
                "type":"image",
                "url":"pro2.png"
            },
            {
                "name":"text_png",
                "type":"image",
                "url":"text.png"
            },
            {
                "name":"videocover_jpg",
                "type":"image",
                "url":"videocover.jpg"
            },
            {
                "name":"top_img_png",
                "type":"image",
                "url":"top_img.png"
            }]
    }

    var isIE=!!window.ActiveXObject;

    var createHeadPlayer = function(callback){
        var player = videojs('topic_player',
            {
                flash: {swf: "http://edm.mcake.com/weifengwang/chocolate/vjs/video-js.swf"},
                sources: [{src: "http://edm.mcake.com/weifengwang/chocolate/images/ll.mp4", type: "video/mp4"}]
            },
            function() {

            });
        player.on('loadedmetadata', function(){
            $('.evt_area1').append('<div class="top_img"><img src="http://edm.mcake.com/weifengwang/chocolate/images/top_img.png" /></div>')
            callback();
        });
        return player;
    };

    var createBottomPlayer = function(){
        var player = videojs('chocolate_player',
            {
                flash: {swf: "http://edm.mcake.com/weifengwang/chocolate/vjs/video-js.swf"},
                sources: [{src: "http://edm.mcake.com/weifengwang/chocolate/images/video.mp4", type: "video/mp4"}]
            },
            function() {
            });
        var $control = $('.evt_area5 .vControl'),
            $post = $control.find('.vPoster'),
            $icon = $control.find('.vIcon');
        $control.on('click', function(){
            if(player.paused()){
                player.play();
            } else {
                player.pause();
            }
        });
        player.on('play', function(){
            $post.hide();
            $icon.hide();
        }).on('pause', function(){
            $icon.show().addClass('pause');
        }).on('ended', function(){
            $icon.show().removeClass('pause');
            $post.show();
        })
        var winWidth = $(document).width();
        var vHeight = winWidth * 1080 / 1920
        $('.bottom-player').css({
            height: (vHeight*0.7)
        });
        $('.bottom-video').css({
            'margin-top': (-vHeight*0.15)
        })
        $('.evt_area5 .vPoster').css({
            'margin-top': (-vHeight*0.15)
        })

        return player;
    }

    var isSupportCss3 = (function(){
        var ret = /MSIE (\d+\.\d+)/.exec(navigator.userAgent);
        if( !ret || ret[1] > 9 ){
            return true;
        }
        return false;
    })();

    $.extend($.easing, {
        easeInCubic:function(e,f,a,h,g){
            return h*(f/=g)*f*f+a;
        },
        easeOutCubic: function(e,f,a,h,g){
            return h*((f=f/g-1)*f*f+1)+a;
        }
    });

    var aniMap = {
        "slide-left": function(el, delay, cb){
            var $el = $(el);
            $el.css({
                opacity: 0,
                marginLeft: el.offsetWidth*0.5
            });

            setTimeout(function(){
                $el.animate({
                    opacity: 1,
                    marginLeft: 0
                }, 1000, 'easeOutCubic', function(){
                    cb && cb();
                });
            }, delay);

        },
        "slide-right": function(el, delay, cb){
            var $el = $(el);
            $el.css({
                opacity: 0,
                marginLeft: -el.offsetWidth*0.5
            });

            setTimeout(function(){
                $el.animate({
                    opacity: 1,
                    marginLeft: 0
                }, 1000, 'easeOutCubic', function(){
                    cb && cb();
                });
            }, delay);

        },
        "slide-down-l": function(el, delay, cb){
            var $el = $(el);
            $el.css({
                opacity: 0,
                marginLeft: -el.offsetWidth*0.3,
                marginTop: -el.offsetHeight*0.8
            });

            setTimeout(function(){
                $el.animate({
                    opacity: 1,
                    marginLeft: 0,
                    marginTop: 0
                }, 1000, 'easeOutCubic', function(){
                    cb && cb();
                });
            }, delay);

        },
        "slide-down-r": function(el, delay, cb){
            var $el = $(el);
            $el.css({
                opacity: 0,
                marginLeft: el.offsetWidth*0.15,
                marginTop: -el.offsetHeight*0.8
            });

            setTimeout(function(){
                $el.animate({
                    opacity: 1,
                    marginLeft: 0,
                    marginTop: 0
                }, 1000, 'easeOutCubic', function(){
                    cb && cb();
                });
            }, delay);

        },
        "slide-up-l": function(el, delay, cb){
            var $el = $(el);
            $el.css({
                opacity: 0,
                marginLeft: -el.offsetWidth*0.5,
                marginTop: el.offsetHeight*0.5
            });

            setTimeout(function(){
                $el.animate({
                    opacity: 1,
                    marginLeft: 0,
                    marginTop: 0
                }, 1000, 'easeOutCubic', function(){
                    cb && cb();
                });
            }, delay);

        },
        "slide-up-r": function(el, delay, cb){
            var $el = $(el);
            $el.css({
                opacity: 0,
                marginLeft: el.offsetWidth*0.5,
                marginTop: el.offsetHeight*0.5
            });

            setTimeout(function(){
                $el.animate({
                    opacity: 1,
                    marginLeft: 0,
                    marginTop: 0
                }, 1000, 'easeOutCubic', function(){
                    cb && cb();
                });
            }, delay);

        },
        "slide-up": function(el, delay, cb){
            var $el = $(el);
            $el.css({
                opacity: 0,
                //marginRight: -el.offsetWidth*0.5,
                marginTop: el.offsetHeight*0.5
            });

            setTimeout(function(){
                $el.animate({
                    opacity: 1,
                    // marginRight: 0,
                    marginTop: 0
                }, 1000, 'easeOutCubic', cb);
            }, delay);

        },
        "fade-in": function(el, delay, cb){
            var $el = $(el);
            $el.css({
                opacity: 0
            });

            setTimeout(function(){
                $el.animate({
                    opacity: 1
                }, 800, cb);
            }, delay);
        }
    };

    var setAnimate = function(el, hasDelay){
        var anim = el.getAttribute('data-anim');
        var delay = Number(el.getAttribute('data-delay')||0)*1000;
        var delayAdjust = Number(el.getAttribute('data-delay-adjust')||0)*1000;
        var chain = el.getAttribute('data-chain');

        delay = hasDelay ? delay : 0;
        delay += delayAdjust;

        if( isSupportCss3 ){
            var chainHandle = function(){
                $(chain).each(function(){
                    setAnimate(this, true);
                });
                el.removeEventListener('webkitAnimationEnd', chainHandle, false);
                el.removeEventListener('animationend', chainHandle, false);
            };

            el.className = [el.className, anim].join(" ");
            el.style['-webkit-animation-delay'] = delay + "ms";
            el.style['animationDelay'] = delay + "ms";
            if( chain ) {
                el.addEventListener('webkitAnimationEnd', chainHandle, false);
                el.addEventListener('animationend', chainHandle, false);
            }
        } else {
            if( aniMap[anim] ) {
                aniMap[anim].call(el, el, delay, function(){
                    if( chain ) {
                        $(chain).each(function(){
                            setAnimate(this, true);
                        });
                    }
                });
            }
        }
    };

    var bindScroll = function( container ){

        var checkOffset = 100;
        var $win = $(window);
        var winHeight = $win.height();
        var winWidth = $(document).width(); //$(window).width() 小于 $(document).width(),暂时没查出原因
        var initScrollTop = $win.scrollTop();
        var elems = $(container).find('[data-anim]');
        var elemObj = [];
        var area1Height = $('.evt_area1').height();
        var videoHeight = parseInt(winWidth / 1920*510);
        elems.each(function(){
            elemObj.push({
                $elem: $(this),
                anim: this.getAttribute('data-anim'),
                scrollTop: $(this).offset().top - area1Height + videoHeight,
                isAnimated: false
            });
        });
        //说明,关于scrollTop的计算
        //因为evt_area1是一个video,在chrome里边loadedmetadata之后获取到的video高度是正确的,
        //但是在firefox里还是不对,导致offset.top偏大,
        //所以这边是根据视频的长宽比例进行计算

        $win.on('scroll', function(){
            var scrollTop = $win.scrollTop();
            var docHeight = document.documentElement.clientHeight;

            $.each(elemObj, function(i, obj){
                if( !obj.isAnimated ) {
                    if( obj.$elem[0].getAttribute('data-ignore') ){
                        obj.isAnimated = true;
                        return;
                    }

                    if (scrollTop + docHeight - checkOffset > obj.scrollTop) {

                        setAnimate(obj.$elem[0], obj.scrollTop < winHeight);
                        obj.isAnimated = true;
                    }
                }
            });
        })
            .trigger('scroll');
    };

    var loadResource = function(){

        var loadComplete = function () {
            Resource.el('#evt_loading').style.display = "none";
            Resource.el('#evt_container').style.display = 'block';

            createHeadPlayer(function(){
                bindScroll('#evt_container')
            });
            createBottomPlayer();
            if(!isIE){
                $('.evt_area2').append('<span class="ext_left"></span><span class="ext_right"></span>')
            }
            correctPNG($('#evt_container .evt_area4').get(0));



        };
        var loader = new Resource.loadGroup("preload", resData);
        var spin = Resource.el('#evt_spin');

        loader.addEvent("progress", function (loaded, total) {
            spin.innerHTML = "loading: " + Math.floor(loaded / total * 100) + "%";
        });

        loader.addEvent("complete", loadComplete);
    };

    var correctPNG = function(container){
        var arVersion = navigator.appVersion.split("MSIE");
        var version = parseFloat(arVersion[1]);
        if (version && (version >= 5.5 && version < 9) && (document.body.filters)) {
            var lee_i = 0;
            var docimgs=container.getElementsByTagName('img');
            for (var j = 0; j < docimgs.length; j++) {
                var img = docimgs[j];
                var imgName = img.src.toUpperCase();
                if (imgName.substring(imgName.length - 3, imgName.length) == "PNG" && !img.getAttribute("usemap")) {
                    lee_i++;
                    var SpanID = img.id || 'ra_png_' + lee_i.toString();
                    var imgData = new Image();
                    imgData.proData = SpanID;
                    imgData.onload = function () {
                        $("#" + this.proData).css("width", this.width + "px").css("height", this.height + "px");
                    }
                    imgData.src = img.src;
                    var imgID = "id='" + SpanID + "' ";
                    var imgClass = (img.className) ? "class='" + img.className + "' " : ""
                    var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
                    var imgStyle = "display:inline-block;" + img.style.cssText
                    if (img.align == "left") imgStyle = "float:left;" + imgStyle
                    if (img.align == "right") imgStyle = "float:right;" + imgStyle
                    if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
                    var strNewHTML = "<span " + imgID + imgClass + imgTitle
                        + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
                        + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
                        + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>"
                    img.outerHTML = strNewHTML;
                    j = j - 1;
                }
            }
        }
    };

    loadResource();
})()