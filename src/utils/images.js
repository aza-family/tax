function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("@/assets/", false, /\.(png|jpe?g|svg|webp)$/)
);

export default images.map(function (image, index) {
  return { value: index, src: image };
});
