
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.portfolio-item');
  const reviewUrl = 'https://www.google.com/search?client=safari&hs=ERep&sa=X&sca_esv=41b0018ec147afb9&rls=en&sxsrf=ANbL-n42Re-IpKYwl_kkGlT4hxpzgQKGgQ:1775375759485&q=Wash%26Wrap+M-Pal%C3%A1c+Recenze&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDA1MjE3szC3sDQwMLC0NDEyNN7AyPiKUSo8sThDLbwosUDBVzcgMefwwmSFoNTk1Lyq1EWseCQBbwUXGVUAAAA&rldimm=10524768789000994213&tbm=lcl&hl=cs-CZ&ved=2ahUKEwjfqfKLntaTAxU4h_0HHcrVEY4Q9fQKegQISxAG&biw=2048&bih=1136&dpr=2#lkt=LocalPoiReviews';

  if (!items.length) return;

  items.forEach(function (item) {
    item.addEventListener('click', function () {
      window.open(reviewUrl, '_blank');
    });
  });
});

