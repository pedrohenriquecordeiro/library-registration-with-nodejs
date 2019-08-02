// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/livraria$1.0.0/src/app/views/books/listing/listing.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><title>Pagina de Listagem</title><meta name=\"description\" content=\"The HTML5 Pedro\"><meta name=\"author\" content=\"SitePoint\"></head><body>");

  component_globals_tag({}, out);

  out.w("<h1> Listagem de Livros </h1><table id=\"books\"><tr><td>ID</td><td>Título</td><td>Preço</td><td>Editar</td><td>Remover</td></tr>");

  var for__15 = 0;

  marko_forEach(data.books, function(book) {
    var keyscope__16 = "[" + ((for__15++) + "]");

    out.w("<tr id=\"book_" +
      marko_escapeXmlAttr(book.id) +
      "\"><td>" +
      marko_escapeXml(book.id) +
      "</td><td>" +
      marko_escapeXml(book.titulo) +
      "</td><td>" +
      marko_escapeXml(book.preco) +
      "</td><td><a href=\"/livros/form/" +
      marko_escapeXmlAttr(book.id) +
      "\">Editar</a></td><td><a href=\"#\" data-ref=\"" +
      marko_escapeXmlAttr(book.id) +
      "\" data-type=\"remove\">Remover</a></td></tr>");
  });

  out.w("</table><script src=\"/etc/js/remove_book.js\">\n        </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "26");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/livraria$1.0.0/src/app/views/books/listing/listing.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
