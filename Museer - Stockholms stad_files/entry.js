window.__entryscape_config = {
  entrystore: "https://recruit.entryscape.net/store",
  context: "1",
  blocks: [
    {
      block: "painting",
      extends: "list",
      layout: "raw",
      rdftype: "http://example.com/PieceOfArt",
      rowhead: `
            <div class="es_jon_img">
                {{image class="jon_img" property="foaf:img"}}
            </div>

          <div class="navigation-list__body">
            <h3 class="hh3" style='margin-top:0.5rem;margin-bottom:0.2rem;'>
              {{text}}
            </h3>
            
            <p class="navigation-list__preamble mb-none" style='font-style:italic;'>
              {{painter}}
            </p>
            <p class="navigation-list__preamble mb-none" style='margin-bottom:0;'>
              {{text property="dcterms:description"}}
            </p>
          </div>
      `
    },
    {
      block: "painter",
      extends: "template",
      relation: "http://example.com/artist",
      template: `{{text}}`
    }
  ]
};

// Add blocks script after config is provided
// This has to be done a bit awkward due to the natural
// approach to use codepens external scripts feature
// by default codepen inserts those explicit scripts
// before the config above, which would not work
const s = document.createElement("script");
s.setAttribute("src", "https://static.cdn.entryscape.com/blocks/1/app.js");
document.head.appendChild(s);

console.log(__entryscape_config);
