function genrateotp() {
  return Math.round(Math.random() * 9000 + 1000);
}
export default genrateotp;
