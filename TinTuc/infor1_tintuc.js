document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    };
  
    scrollToTopBtn.addEventListener('click', function () {
      scrollToTopSmoothly();
    });
  
    function scrollToTopSmoothly() {
      var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
      if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTopSmoothly);
        window.scrollTo(0, currentPosition - currentPosition / 8);
      }
    }
  
    document.addEventListener('touchmove', function (e) {
        e.preventDefault(); // Ngăn chặn cuộn tự nhiên của trình duyệt
        var touch = e.touches[0];
        window.scrollBy(0, -touch.clientY / 8); // Điều chỉnh tốc độ chuyển động ở đây (1/8)
      });
  });