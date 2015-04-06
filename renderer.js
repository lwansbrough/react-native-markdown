var marked = require('marked');
marked.setOptions({
  smartypants: true
});

var renderer = new marked.Renderer();

renderer.blockquote = function() {
  return '';
};

renderer.br = function() {
  return '<View style={styles.break}></View>';
};

renderer.code = function(code, language) {
  return '<Text style={styles.code}>' + code + '</Text>';
};

renderer.del = function(text) {
  return '<Text style={styles.deleted}>' + text + '</Text>';
};

renderer.codespan = function(text) {
  return '<Text style={styles.codespan}>' + text + '</Text>';
};

renderer.em = function(text) {
  return '<Text style={styles.emphasis}>' + text + '</Text>';
};

renderer.heading = function(text, level) {
  return '<Text style={[styles.heading, styles["heading' + level + '"]]}>' + text + '</Text>';
};

renderer.hr = function() {
  return '<View style={styles.horizontalRule}/>';
};

renderer.html = function(html) {
  return '<Text style={styles.html}>' + html + '</Text>';
};

renderer.image = function(href, title, text) {
  return '<Image style={styles.image} source={{uri:"' + href + '"}}/>';
};

renderer.link = function(href, title, text) {
  return '<Text style={styles.link}>' + text + '</Text>';
};

renderer.list = function() {
  return '';
};

renderer.listitem = function() {
  return '';
};

renderer.paragraph = function(text) {
  return '<Text style={styles.paragraph}>' + text + '</Text>';
};

renderer.strong = function(text) {
  return '<Text style={styles.strong}>' + text + '</Text>';
};

renderer.table = function() {
  return '';
};

renderer.tablerow = function() {
  return '';
};

renderer.tablecell = function() {
  return '';
};

module.exports = renderer;
