import $ from "jquery";

export function scrollFn() {
  console.log("나야나~");
  let shopTop = $("#shop-area").offset().top;
  let footTop = $("#footer-area").offset().top;
  let ins = $(".is").offset().top;
  let fk = $(".fk").offset().top;
  let yt = $(".yt").offset().top;
  let top = $(".top").offset().top;
  let bt = $(".bottom").offset().top;
  let logo = $("#gnb img").offset().top;
  // console.log(ins, shopTop);
  if (ins < footTop && ins > shopTop ) {
    $(".is").css({ color: "#000" });
  } else if (ins < shopTop || ins > footTop ) {
    $(".is").css({ color: "#fff" });
  }
  if (fk < footTop && fk > shopTop) {
    $(".fk").css({ color: "#000" });
  } else if (fk < shopTop || fk > footTop) {
    $(".fk").css({ color: "#fff" });
  }

  if (yt < footTop && yt > shopTop) {
    $(".yt").css({ color: "#000" });
  } else if (yt < shopTop || yt > footTop) {
    $(".yt").css({ color: "#fff" });
  }

  if ((top < footTop && top> shopTop)) {
    $(".top, .bottom").css({ backgroundColor: "#000" });
  } else if ((top < shopTop || top > footTop)) {
    $(".top, .bottom").css({ backgroundColor: "#fff" });    
  }
  if (logo > shopTop) {
    $("#gnb img").attr("src", "../images/logo.png");
  } else if (logo < shopTop) {
    $("#gnb img").attr("src", "../images/logo2.png");
  }
}
