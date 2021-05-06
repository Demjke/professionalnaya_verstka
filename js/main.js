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

  $(".product-slider").slick({
    autoplay: true,
    prevArrow:
      '<button type="button" class="product-slider__arrow product-slider__arrowprev"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">      <path d="M12.6998 3.7499L4.9498 11.4999L12.6998 19.2499L11.1498 22.3499L0.299805 11.4999L11.1498 0.649902L12.6998 3.7499Z" fill="black"/></svg></button>',
    nextArrow:
      '<button type="button" class="product-slider__arrow product-slider__arrownext"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">      <path d="M0.299708 19.2499L8.04971 11.4999L0.299708 3.74985L1.84971 0.649853L12.6997 11.4999L1.84971 22.3499L0.299708 19.2499Z" fill="black"/></svg></button>',
  });
});
