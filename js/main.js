$(function () {
  $(".menu-btn").on("click", function () {
    $(".menu").toggleClass("active");
  });

  $(".menu-btn__close").on("click", function () {
    $(".menu").removeClass("active");
  });

  $(".products__filter").on("click", function () {
    $(".filter-menu").addClass("active");
  });

  $(".filter-menu__close").on("click", function () {
    $(".filter-menu").removeClass("active");
  });

  $(".filter-menu__accordion-item_header").click(function () {
    $(this).toggleClass("active").next().slideToggle();
    $(".filter-menu__accordion-item_header")
      .not(this)
      .removeClass("active")
      .next()
      .slideUp();
  });

  $(".trending").on("click", function () {
    $(".trending-menu").toggleClass("active");
    $(".trending-img").toggleClass("active");
  });

  $(".size").on("click", function () {
    $(".size-menu").toggleClass("active");
    $(".size-img").toggleClass("active");
  });

  $(".price").on("click", function () {
    $(".price-menu").toggleClass("active");
    $(".price-img").toggleClass("active");
  });
});
