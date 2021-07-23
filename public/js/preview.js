(function () {
  var root = this;
  var $file_input = document.querySelector("input#file");
  var $holder = document.querySelector("#notebook-holder");

  document.q;

  var render_notebook = function (ipynb) {
    var notebook = (root.notebook = nb.parse(ipynb));
    while ($holder.hasChildNodes()) {
      $holder.removeChild($holder.lastChild);
    }
    $holder.appendChild(notebook.render());
    Prism.highlightAll();
  };

  const params = new URLSearchParams(location.search);
  console.log(params);
  fetch(params.get("notebook"))
    .then((res) => {
      // console.log("result", res.body.json());
      return res.json();
    })
    .then((text) => {
      console.log("Text: ", text);
      try {
        render_notebook(text);
      } catch(e) {
        $holder.innerHTML = "<h1>Notebook not found<h1>";
      }
    });
  let title = params.get("title")
  if (title){
    document.getElementsByTagName('title')[0].innerHTML = title;
    document.getElementById("site_title").innerHTML = title
  }
}.call(this));
