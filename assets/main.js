(function () {
  "use strict";
  var profile = window.PORTFOLIO;
  var data = window.PROJECT_DATA;
  var singlePage = document.body.dataset.layout === "single-page";
  if (!profile) return;
  function $(selector, parent) { return (parent || document).querySelector(selector); }
  function $$(selector, parent) { return Array.from((parent || document).querySelectorAll(selector)); }
  function esc(value) { return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); }
  function num(value, digits) { return Number(value).toLocaleString("en-US", { maximumFractionDigits: digits == null ? 0 : digits }); }
  function money(value) { return "$" + num(value, 2); }
  function label(value) { var names = { "Build Quality": "Build quality", "Value Price": "Value / price", "Keyboard Trackpad": "Keyboard / trackpad", "Thermals Noise": "Cooling / noise", "Support Service": "Support / service" }; return names[value] || value.charAt(0).toUpperCase() + value.slice(1); }
  function external(href) { return /^https:\/\//.test(href); }
  function projectHref(value) { if (typeof value !== "string") return "#selected-work"; return external(value) || /^#[\w-]+$/.test(value) || (/^[\w./-]+(?:#[\w-]+)?$/.test(value) && !value.startsWith("//")) ? value : "#selected-work"; }

  $$('[data-profile]').forEach(function (node) { var value = profile[node.dataset.profile]; if (typeof value === "string") node.textContent = value; });
  $$('[data-contact]').forEach(function (node) { var kind = node.dataset.contact; var value = kind === "email" ? "mailto:" + profile.email : profile[kind]; if (value && (kind === "email" || external(value))) node.href = value; });
  $$('[data-year]').forEach(function (node) { node.textContent = new Date().getFullYear(); });
  $$('[data-project-link]').forEach(function (node) { var project = profile.projects.find(function (p) { return p.id === "laptop-intelligence"; }); if (project) node.href = projectHref(project[node.dataset.projectLink]); });
  $$('[data-resume-download]').forEach(function (node) { node.href = projectHref(profile.resume); });

  var skills = $('#skillGroups');
  if (skills) {
    var visibleSkills = (profile.skills || []).filter(function (group) { return skills.dataset.compact !== 'true' || group.title === 'Business intelligence' || group.title === 'Analytics & programming'; });
    skills.innerHTML = visibleSkills.map(function (group) { return '<div><span>' + esc(group.title) + '</span><p>' + group.items.map(esc).join(' · ') + '</p></div>'; }).join('');
  }
  var personalGallery = $('#personalGallery');
  if (personalGallery) personalGallery.innerHTML = (profile.interests || []).map(function (item) {
    if (singlePage) return '<figure class="personal-card personal-photo"><a class="personal-open" href="' + esc(projectHref(item.image)) + '" data-screenshot aria-label="Enlarge: ' + esc(item.title) + '"><img src="' + esc(projectHref(item.image)) + '" width="' + Number(item.width) + '" height="' + Number(item.height) + '" loading="lazy" decoding="async" class="' + esc(item.className || '') + '" alt="' + esc(item.alt) + '"></a><figcaption><span data-screenshot-title>' + esc(item.title) + '</span><span data-screenshot-caption class="sr-only">' + esc(item.description) + '</span><span aria-hidden="true">↗</span></figcaption></figure>';
    return '<figure class="personal-card"><img src="' + esc(projectHref(item.image)) + '" width="' + Number(item.width) + '" height="' + Number(item.height) + '" loading="lazy" decoding="async" class="' + esc(item.className || '') + '" alt="' + esc(item.alt) + '"><figcaption><span>' + esc(item.label) + '</span><h3>' + esc(item.title) + '</h3><p>' + esc(item.description) + '</p></figcaption></figure>';
  }).join('');
  var timeline = $('#careerTimeline');
  var careerOrder = { 'UBC Experiential Learning': 0, 'FIS Global': 1, 'Conquering My Own Everest / GoGhumantu': 2 };
  if (timeline) timeline.innerHTML = (profile.experience || []).slice().sort(function (a, b) { return (careerOrder[a.company] == null ? 9 : careerOrder[a.company]) - (careerOrder[b.company] == null ? 9 : careerOrder[b.company]); }).map(function (job) {
    if (singlePage) return '<article class="career-item career-visible"><div class="career-header"><span class="career-date">' + esc(job.dates) + '</span><div class="career-heading"><h3>' + esc(job.company) + '</h3><span>' + esc(job.role) + ' · ' + esc(job.location) + '</span><span class="career-metric">' + esc(job.metric) + '</span></div></div><div class="career-body"><p class="career-focus">' + esc(job.focus) + '</p><ul>' + job.bullets.map(function (bullet) { return '<li>' + esc(bullet) + '</li>'; }).join('') + '</ul>' + (job.company === 'UBC Experiential Learning' ? '<a class="text-link" href="#project-method">See the project method <span aria-hidden="true">↑</span></a>' : '') + '</div></article>';
    return '<details class="career-item"' + (job.company === 'FIS Global' ? ' open' : '') + '><summary><span class="career-date">' + esc(job.dates) + '</span><span class="career-heading"><strong>' + esc(job.company) + '</strong><span>' + esc(job.role) + ' <span aria-hidden="true">·</span> ' + esc(job.location) + '</span><span class="career-metric">' + esc(job.metric) + '</span></span><span class="career-expand" aria-hidden="true">+</span></summary><div class="career-body"><p class="career-focus">' + esc(job.focus) + '</p><ul>' + job.bullets.map(function (bullet) { return '<li>' + esc(bullet) + '</li>'; }).join('') + '</ul>' + (job.company === 'UBC Experiential Learning' ? '<a class="text-link" href="laptop-intelligence.html">Explore the project <span aria-hidden="true">↗</span></a>' : '') + '</div></details>';
  }).join('');
  var education = $('#educationList');
  if (education) education.innerHTML = (profile.education || []).map(function (item) { return '<div class="education-item"><span>' + esc(item.year) + '</span><h3>' + esc(item.school) + '</h3><p>' + esc(item.qualification) + '</p><small>' + esc(item.location) + '</small></div>'; }).join('');
  var achievements = $('#projectAchievements');
  if (achievements) achievements.innerHTML = (profile.projectAchievements || []).map(function (item) { return '<div><strong>' + esc(item.value) + '</strong><span>' + esc(item.label) + '</span><p>' + esc(item.detail) + '</p></div>'; }).join('');
  var additional = $('#additionalProjects');
  function evidenceFigure(visual, project, index) {
    var titleId = project.id + '-figure-' + index;
    return '<figure class="support-figure"><a class="support-figure-open" href="' + esc(projectHref(visual.image)) + '" data-screenshot aria-labelledby="' + esc(titleId) + '"><img src="' + esc(projectHref(visual.image)) + '" width="' + Number(visual.width) + '" height="' + Number(visual.height) + '" loading="lazy" decoding="async" alt="' + esc(visual.alt) + '"><span>Enlarge <span aria-hidden="true">↗</span></span></a><figcaption><span data-screenshot-title id="' + esc(titleId) + '">' + esc(visual.title) + '</span><span class="sr-only" data-screenshot-caption>' + esc(visual.caption) + '</span></figcaption></figure>';
  }
  function renderAdditional(filter) {
    var priority = { 'Business intelligence': 0, 'Statistical analysis': 1, 'Machine learning': 2, 'AI & NLP': 3 };
    var projects = (profile.additionalProjects || []).filter(function (p) { return filter === 'all' || (filter === 'bi' ? p.category === 'Business intelligence' : p.category !== 'Business intelligence'); }).sort(function (a, b) { return (priority[a.category] == null ? 9 : priority[a.category]) - (priority[b.category] == null ? 9 : priority[b.category]); });
    additional.innerHTML = projects.map(function (project) {
      if (singlePage) {
        var downloads = (project.downloads || []).map(function (file) { return '<a class="text-link" href="' + esc(projectHref(file.href)) + '" download>' + esc(file.label) + ' <span aria-hidden="true">↓</span></a>'; }).join('');
        return '<article class="support-project" id="' + esc(project.id) + '" aria-labelledby="' + esc(project.id) + '-title"><div class="support-copy"><div class="support-meta"><span>' + esc(project.category) + '</span><span>PROJECT / ' + esc(project.number) + '</span></div><h3 id="' + esc(project.id) + '-title">' + esc(project.title) + '</h3><p class="support-question">' + esc(project.question) + '</p><div class="support-scope"><strong>' + esc(project.metric) + '</strong><span>' + esc(project.institution) + '</span></div><p class="support-tools">' + project.tools.map(esc).join(' · ') + '</p><p>' + esc(project.summary) + '</p><p class="support-contribution"><strong>My contribution</strong>' + esc(project.contribution) + '</p><p class="support-result"><strong>Finding & evaluation</strong>' + esc(project.evidence) + '</p>' + (downloads ? '<div class="support-downloads">' + downloads + '</div>' : '') + '</div><div class="support-evidence"><div class="support-evidence-heading"><span>Visual evidence</span><span>Select an image to enlarge</span></div><div class="support-figures" data-visual-count="' + project.visuals.length + '">' + project.visuals.map(function (visual, index) { return evidenceFigure(visual, project, index); }).join('') + '</div><p class="support-provenance">' + esc(project.provenance) + '</p></div></article>';
      }
      return '<details class="project-note"><summary><span class="project-note-meta"><span>' + esc(project.category) + '</span><span aria-hidden="true">↗</span></span><strong class="project-note-name">' + esc(project.title) + '</strong><span class="project-note-question">' + esc(project.question) + '</span><span class="project-note-metric">' + esc(project.metric) + '</span><span class="project-note-tools">' + project.tools.map(esc).join(' · ') + '</span><span class="project-note-read">Method & results <span aria-hidden="true">+</span></span></summary><div class="project-note-body"><p>' + esc(project.summary) + '</p><p>' + esc(project.evidence) + '</p><span>' + esc(project.institution) + ' · ' + esc(project.date) + ' · Academic project</span></div></details>';
    }).join('');
    $$('[data-project-filter]').forEach(function (button) { button.setAttribute('aria-pressed', String(button.dataset.projectFilter === filter)); });
    if ($('#projectFilterStatus')) $('#projectFilterStatus').textContent = projects.length + ' project summaries shown';
  }
  if (additional) { renderAdditional('all'); $$('[data-project-filter]').forEach(function (button) { button.addEventListener('click', function () { renderAdditional(button.dataset.projectFilter); }); }); }
  if ($('#resumeSkills')) {
    $('#resumeSkills').innerHTML = (profile.skills || []).map(function (group) { return '<p><strong>' + esc(group.title) + ':</strong> ' + group.items.map(esc).join(' · ') + '</p>'; }).join('') + ((profile.certifications || []).length ? '<p><strong>Certification:</strong> ' + profile.certifications.map(esc).join(' · ') + '</p>' : '');
    $('#resumeExperience').innerHTML = (profile.experience || []).map(function (job) { return '<article class="resume-role"><div class="resume-role-heading"><div><h4>' + esc(job.company) + '</h4><p>' + esc(job.role) + ' · ' + esc(job.location) + '</p></div><span>' + esc(job.dates) + '</span></div><ul>' + job.bullets.map(function (bullet) { return '<li>' + esc(bullet) + '</li>'; }).join('') + '</ul></article>'; }).join('');
    $('#resumeEducation').innerHTML = (profile.education || []).map(function (item) { return '<article class="resume-education"><div><strong>' + esc(item.school) + '</strong><p>' + esc(item.qualification) + ' · ' + esc(item.location) + '</p>' + (item.note ? '<small>' + esc(item.note) + '</small>' : '') + '</div><span>' + esc(item.year) + '</span></article>'; }).join('');
    $('#resumeProjects').innerHTML = (profile.additionalProjects || []).map(function (project) { return '<article class="resume-project"><div><h4>' + esc(project.title) + '</h4><span>' + esc(project.date) + '</span></div><p class="resume-project-meta">' + esc(project.metric) + ' · ' + project.tools.map(esc).join(' · ') + '</p><p>' + esc(project.summary) + ' ' + esc(project.evidence) + '</p></article>'; }).join('');
  }

  var toggle = $('.menu-toggle'), nav = $('#site-nav');
  function closeMenu() { if (!toggle || !nav) return; nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }
  if (toggle && nav) {
    toggle.addEventListener('click', function () { var open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); });
    $$('a', nav).forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (event) { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
    document.addEventListener('click', function (event) { if (!event.target.closest('.site-header')) closeMenu(); });
    window.matchMedia(singlePage ? '(min-width: 901px)' : '(min-width: 701px)').addEventListener('change', closeMenu);
  }

  var grid = $('#projectGrid');
  if (grid) {
    grid.innerHTML = profile.projects.map(function (project) {
      var projectDestination = singlePage ? (project.section || '#selected-work') : project.caseStudy;
      var externalTarget = singlePage ? '' : ' target="_blank" rel="noopener noreferrer"';
      var image = project.image ? '<div class="cover-window"><div class="cover-window-top" aria-hidden="true"><i></i><i></i><i></i></div><img src="' + esc(projectHref(project.image)) + '" width="' + Number(project.imageWidth || 1440) + '" height="' + Number(project.imageHeight || 1000) + '" alt="' + esc(project.imageAlt || project.title + ' application') + '" loading="lazy"></div>' : '<div class="art-title">' + esc(project.title) + '</div>';
      var liveAction = project.live ? '<a class="button button-dark" href="' + esc(projectHref(project.live)) + '"' + externalTarget + '>View live app <span aria-hidden="true">↗</span></a>' : '';
      var caseAction = '<a class="' + (project.live ? 'text-link' : 'button button-dark') + '" href="' + esc(projectHref(projectDestination)) + '">' + (singlePage ? 'Method & results' : 'Read the case study') + ' <span aria-hidden="true">↗</span></a>';
      var sourceAction = project.source ? '<a class="text-link project-source" href="' + esc(projectHref(project.source)) + '"' + externalTarget + '>GitHub <span aria-hidden="true">↗</span></a>' : '';
      return '<article class="project-card"><a class="project-cover" href="' + esc(projectHref(projectDestination)) + '" aria-label="Explore the ' + esc(project.title) + ' case study"><div class="project-cover-label"><span>AI research agent</span><span>Project / ' + esc(project.number) + '</span></div>' + image + '<div class="cover-caption"><span class="status-dot" aria-hidden="true"></span> ETL · RETRIEVAL · ANALYSIS · VISUALIZATION</div></a><div class="project-copy"><div class="project-category"><span>' + esc(project.category) + '</span><span>' + esc(project.number) + '</span></div><h3><a href="' + esc(projectHref(projectDestination)) + '">' + esc(project.title) + '</a></h3><p class="project-summary">' + esc(project.summary) + '</p><p class="project-detail">' + esc(project.detail || '') + '</p><div class="tags">' + (project.tags || []).map(function (tag) { return '<span>' + esc(tag) + '</span>'; }).join('') + '</div><div class="project-metrics">' + (project.metrics || []).map(function (m) { return '<div><strong>' + esc(m.value) + '</strong><span>' + esc(m.label) + '</span></div>'; }).join('') + '</div><div class="project-links">' + liveAction + caseAction + sourceAction + '</div></div></article>';
    }).join('');
  }

  var hero = $('#heroChart');
  if (hero && data) {
    function renderHero(kind) {
      var chart = data.charts[kind], rows = chart.rows.slice().sort(function (a, b) { return b.value - a.value; });
      var max = chart.unit === '%' ? 100 : rows[0].value;
      hero.innerHTML = rows.map(function (row) { return '<div class="mini-bar-row"><span>' + esc(label(row.label)) + '</span><span class="mini-bar-track" aria-hidden="true"><span style="width:' + (row.value / max * 100).toFixed(2) + '%"></span></span><strong>' + (chart.unit === '%' ? num(row.value, 1) + '%' : money(row.value)) + '</strong></div>'; }).join('');
      if ($('#heroChartTitle')) { $('#heroChartTitle').textContent = kind === 'prices' ? 'Median listed price' : 'Positive review sentiment'; $('#heroChartUnit').textContent = kind === 'prices' ? 'USD · research snapshot' : 'Mention-weighted · model output'; $('#heroChartNote').textContent = kind === 'prices' ? 'Six segments. Different benchmarks.' : 'Eight aspects. More than a star rating.'; }
      $$('[data-hero-chart]').forEach(function (button) { button.setAttribute('aria-pressed', String(button.dataset.heroChart === kind)); });
    }
    renderHero('prices');
    $$('[data-hero-chart]').forEach(function (button) { button.addEventListener('click', function () { renderHero(button.dataset.heroChart); }); });
  }

  if (!$('#finding-panel') || !data) return;
  var active = 'prices', cohort = 'all';
  function currentChart(kind) { return data.charts[kind === 'sentiment' && cohort === 'budget' ? 'budgetSentiment' : kind]; }
  var insights = {
    prices: { number: '01', kicker: 'PRICING & POSITIONING', title: 'Median listed price by segment', story: 'Different segments need different benchmarks.', description: 'Gaming has a median listed price of $1,369.99; Chromebooks sit at $209. A catalogue-wide average would obscure that context. Each segment also has different price coverage.', action: 'Benchmark a product against its relevant segment and specifications before interpreting a brand or price premium.', source: 'Known listed prices only. Sample labels show priced / matching listings. Historical USD prices; 7,875 of 25,841 listings priced overall (30.5%).', defaultTip: 'Select a bar to see its priced sample and coverage.' },
    sentiment: { number: '02', kicker: 'ASPECT-LEVEL CUSTOMER FEEDBACK', title: 'Positive sentiment by review aspect', story: 'Look beyond the overall star rating.', description: 'Support and battery feedback are weaker than build quality and value in this corpus. A single average star rating would hide those different experiences.', action: 'Inspect the source reviews behind recurring support and battery concerns before proposing a service or product improvement.', source: 'Mention-weighted model outputs across analysed reviews. A review can mention multiple aspects. These shares are comparative signals, not absolute satisfaction scores.', defaultTip: 'Select an aspect to inspect the number of analysed review mentions.' },
    scatter: { number: '03', kicker: 'GAMING LAPTOPS · LISTED PRICE UNDER $1,200', title: 'Listed price versus average rating', story: 'A high rating needs context.', description: 'Inspect the spread of ratings at similar prices, then check how many Amazon ratings support each point. A 5-star product with one rating tells a different story from one with hundreds.', action: 'Use the plot to shortlist products for a closer competitor comparison. Check their specifications, rating counts and original review evidence.', source: 'A reproducible sample of 180 of 388 eligible gaming listings with a positive price under $1,200 and a rating. Exploratory comparison; it does not establish causation.', defaultTip: 'Select a point, or focus one with your keyboard, to inspect its price, rating and rating count.' }
  };

  function display(row, chart) { return chart.type === 'scatter' ? money(row.x) + ' · ' + num(row.value, 2) + '/5 · ' + num(row.n) + ' Amazon ratings' : chart.unit === '%' ? num(row.value, 1) + '% positive · ' + num(row.n) + ' analysed review mentions' : money(row.value) + ' median · ' + num(row.n) + ' / ' + num(row.total) + ' priced listings · ' + num(row.coverage * 100, 1) + '% coverage'; }
  function bars(chart) {
    var rows = chart.rows.slice().sort(function (a, b) { return b.value - a.value; });
    var max = chart.unit === '%' ? 100 : Math.max.apply(null, rows.map(function (r) { return r.value; }));
    return '<div class="evidence-bars ' + (chart.unit === '%' ? 'sentiment-bars' : '') + '">' + rows.map(function (row) {
      var index = chart.rows.indexOf(row), title = label(row.label);
      return '<button class="evidence-row" type="button" data-row="' + index + '" aria-label="' + esc(title + ': ' + display(row, chart)) + '"><span class="evidence-row-label">' + esc(title) + '</span><span class="evidence-track" aria-hidden="true"><span class="evidence-fill ' + (chart.unit === '%' && row.value < 50 ? 'is-low' : '') + '" style="width:' + (row.value / max * 100).toFixed(2) + '%"></span></span><strong>' + (chart.unit === '%' ? num(row.value, 1) + '%' : money(row.value)) + '</strong><span class="evidence-sample">' + (chart.unit === '%' ? num(row.n) + ' review mentions' : num(row.n) + ' / ' + num(row.total) + ' priced · ' + num(row.coverage * 100, 1) + '% coverage') + '</span></button>';
    }).join('') + '</div>';
  }
  function scatter(chart) {
    var w = 600, h = 345, x0 = 49, y0 = 17, spanX = 526, spanY = 255, max = 1260, output = '';
    for (var y = 1; y <= 5; y++) { var py = y0 + spanY - (y - 1) / 4 * spanY; output += '<line class="scatter-grid" x1="' + x0 + '" y1="' + py + '" x2="' + (x0 + spanX) + '" y2="' + py + '"/><text class="scatter-axis" x="33" y="' + (py + 4) + '" text-anchor="end">' + y + '</text>'; }
    [0, 400, 800, 1200].forEach(function (v) { output += '<text class="scatter-axis" x="' + (x0 + v / max * spanX) + '" y="295" text-anchor="middle">$' + num(v) + '</text>'; });
    output += '<text class="scatter-label" x="312" y="327" text-anchor="middle">Listed price (USD)</text><text class="scatter-label" transform="translate(11 143) rotate(-90)" text-anchor="middle">Average rating / 5</text>';
    chart.rows.forEach(function (row, i) { var text = row.label + ': ' + display(row, chart); output += '<circle class="scatter-point" role="button" tabindex="0" data-row="' + i + '" aria-label="' + esc(text) + '" cx="' + (x0 + row.x / max * spanX) + '" cy="' + (y0 + spanY - (row.value - 1) / 4 * spanY) + '" r="5"><title>' + esc(text) + '</title></circle>'; });
    return '<div class="scatter-plot"><svg viewBox="0 0 ' + w + ' ' + h + '" role="group" aria-label="Price versus rating for gaming laptops under 1200 USD. Each point can be selected to inspect its evidence.">' + output + '</svg></div>';
  }
  function table(chart) {
    var scatterPlot = chart.type === 'scatter';
    return '<table><thead><tr><th scope="col">' + (scatterPlot ? 'Product' : 'Group') + '</th><th scope="col">' + (scatterPlot ? 'Price (USD)' : chart.unit === '%' ? 'Positive share' : 'Median (USD)') + '</th><th scope="col">' + (scatterPlot ? 'Rating / 5' : 'Sample') + '</th>' + (scatterPlot ? '<th scope="col">Amazon ratings</th>' : '') + '</tr></thead><tbody>' + chart.rows.map(function (row) { return '<tr><th scope="row">' + esc(label(row.label)) + '</th><td>' + (scatterPlot ? money(row.x) : chart.unit === '%' ? num(row.value, 1) + '%' : money(row.value)) + '</td><td>' + (scatterPlot ? num(row.value, 2) : chart.unit === '%' ? num(row.n) + ' mentions' : num(row.n) + ' / ' + num(row.total) + ' priced') + '</td>' + (scatterPlot ? '<td>' + num(row.n) + '</td>' : '') + '</tr>'; }).join('') + '</tbody></table>';
  }
  function inspectFinding(event) {
    var point = event.target.closest('[data-row]');
    if (!point) return;
    var chart = currentChart(active), row = chart.rows[Number(point.dataset.row)];
    $('#chart-inspection').textContent = (chart.type === 'scatter' ? row.label : label(row.label)) + ' — ' + display(row, chart);
  }
  function renderFinding(kind, focus) {
    active = kind;
    var chart = currentChart(kind), copy = insights[kind];
    if (!chart || !copy) return;
    $$('[data-finding]').forEach(function (button) { var selected = button.dataset.finding === kind; button.setAttribute('aria-selected', String(selected)); button.tabIndex = selected ? 0 : -1; });
    $('#finding-panel').setAttribute('aria-labelledby', 'finding-tab-' + kind);
    $('#chart-kicker').textContent = copy.kicker; $('#chart-title').textContent = copy.title;
    $('#finding-number').textContent = copy.number; $('#finding-title').textContent = copy.story; $('#finding-description').textContent = copy.description; $('#finding-action').textContent = copy.action; $('#chart-source').textContent = copy.source;
    var scopeControl = $('#sentimentScopeControl');
    if (scopeControl) scopeControl.hidden = kind !== 'sentiment';
    if (kind === 'sentiment' && cohort === 'budget') { $('#chart-title').textContent = 'Positive sentiment · budget laptops'; $('#finding-description').textContent = 'Within budget laptops, support and battery feedback remain weaker than value and build quality. Compare the mention counts as well as the percentages before choosing an improvement priority.'; $('#chart-source').textContent = 'Budget segment only: ' + num(chart.n_total) + ' matching listings. ' + copy.source; }
    $('#chart-graphic').innerHTML = chart.type === 'scatter' ? scatter(chart) : bars(chart);
    $('#chart-inspection').textContent = copy.defaultTip; $('#chart-table').innerHTML = table(chart);
    $('#chart-graphic').onclick = inspectFinding;
    $('#chart-graphic').onkeydown = function (event) { if (event.target.matches('.scatter-point') && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); inspectFinding(event); } };
    if (focus) $('#finding-tab-' + kind).focus();
  }
  $('#chart-graphic').addEventListener('focusin', inspectFinding);
  $$('[data-finding]').forEach(function (button) {
    button.addEventListener('click', function () { renderFinding(button.dataset.finding, false); });
    button.addEventListener('keydown', function (event) { var kinds = ['prices', 'sentiment', 'scatter'], index = kinds.indexOf(active); if (['ArrowRight', 'ArrowLeft', 'Home', 'End'].indexOf(event.key) < 0) return; event.preventDefault(); var next = event.key === 'Home' ? 0 : event.key === 'End' ? kinds.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + kinds.length) % kinds.length; renderFinding(kinds[next], true); });
  });
  if ($('#sentimentScope')) $('#sentimentScope').addEventListener('change', function (event) { cohort = event.target.value; renderFinding(active, false); });
  $('#download-data').addEventListener('click', function () {
    var chart = currentChart(active);
    function cell(value) { var text = String(value == null ? '' : value); if (/^[\s]*[=+\-@]|^[\t\r\n]/.test(text)) text = "'" + text; return '"' + text.replace(/"/g, '""') + '"'; }
    var columns = chart.type === 'scatter' ? ['label', 'x', 'value', 'n'] : ['label', 'value', 'n', 'total', 'coverage'];
    var lines = [['Chart', chart.title], ['Source', 'Amazon Reviews 2023'], ['Scope', chart.scope], ['Notes', chart.notes.join(' ')], columns].concat(chart.rows.map(function (row) { return columns.map(function (column) { return row[column]; }); }));
    var blob = new Blob(['\uFEFF' + lines.map(function (line) { return line.map(cell).join(','); }).join('\r\n')], { type: 'text/csv;charset=utf-8' });
    var url = URL.createObjectURL(blob), anchor = document.createElement('a'); anchor.href = url; anchor.download = 'anmol-saluja-' + active + '.csv'; document.body.appendChild(anchor); anchor.click(); anchor.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  });
  renderFinding(active, false);
})();
