// ── Menu Category Filter ──────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuCards  = document.querySelectorAll('.menu-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            menuCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});

// ── Share Your Idea Form ──────────────────────────────
function handleIdeaSubmit(event) {
    event.preventDefault();

    const btn     = document.getElementById('ideaSubmitBtn');
    const success = document.getElementById('ideaSuccess');
    const form    = document.getElementById('ideaForm');

    // Loading state
    btn.textContent = 'Sending...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    // Simulate sending (swap for a real fetch if you add a backend)
    setTimeout(() => {
        form.reset();
        btn.textContent = 'Send Your Idea';
        btn.style.opacity = '1';
        btn.disabled = false;
        success.classList.add('visible');

        // Hide success after 5s
        setTimeout(() => success.classList.remove('visible'), 5000);
    }, 900);
}

// ── Download Full Menu as PDF ─────────────────────────
function downloadMenu() {

    // Collect all menu cards from the DOM
    const cards = document.querySelectorAll('.menu-card');

    const categoryLabels = {
        new:     '🌟 New Arrivals',
        classic: '☕ Classics',
        cold:    '🧊 Cold Drinks'
    };

    // Group items by category
    const groups = {};
    cards.forEach(card => {
        const cat   = card.dataset.category;
        const name  = card.querySelector('.menu-card-top h3').textContent;
        const price = card.querySelector('.menu-price').textContent;
        const desc  = card.querySelector('.menu-card-body p').textContent;
        const tag   = card.querySelector('.menu-category-tag').textContent;
        const isNew = card.querySelector('.badge-new') !== null;
        const isLoved = card.querySelector('.badge-loved') !== null;

        if (!groups[cat]) groups[cat] = [];
        groups[cat].push({ name, price, desc, tag, isNew, isLoved });
    });

    // Build grouped HTML rows
    let sectionsHTML = '';
    for (const [cat, items] of Object.entries(groups)) {
        sectionsHTML += `
        <div class="section-heading">${categoryLabels[cat] || cat}</div>
        <table>
            <thead>
                <tr>
                    <th style="width:38%">Item</th>
                    <th>Description</th>
                    <th style="width:10%;text-align:right">Price</th>
                </tr>
            </thead>
            <tbody>
                ${items.map(item => `
                <tr>
                    <td>
                        <strong>${item.name}</strong>
                        ${item.isNew   ? '<span class="badge badge-new">NEW</span>'         : ''}
                        ${item.isLoved ? '<span class="badge badge-loved">★ Most Loved</span>' : ''}
                        <br><small class="tag">${item.tag}</small>
                    </td>
                    <td>${item.desc}</td>
                    <td style="text-align:right;font-weight:700;color:#b8740a">${item.price}</td>
                </tr>`).join('')}
            </tbody>
        </table>`;
    }

    // Full print document
    const printHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Roast &amp; Rest — Full Menu</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;700&display=swap');
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:'Roboto',sans-serif; background:#fff; color:#1a0f0a; padding:40px 50px; }

  /* Cover header */
  .cover { text-align:center; border-bottom:2px solid #c47c2f; padding-bottom:24px; margin-bottom:32px; }
  .cover-logo { font-family:'Playfair Display',serif; font-size:2.6rem; color:#6F4E37; }
  .cover-sub  { font-size:0.85rem; letter-spacing:0.2em; color:#888; text-transform:uppercase; margin-top:4px; }
  .cover-tagline { font-size:1rem; color:#555; margin-top:10px; }
  .cover-hours { font-size:0.8rem; color:#999; margin-top:6px; }

  /* Section heading */
  .section-heading {
    font-family:'Playfair Display',serif;
    font-size:1.15rem;
    color:#6F4E37;
    margin:26px 0 10px;
    padding-left:4px;
    border-left:4px solid #e8a840;
  }

  /* Table */
  table { width:100%; border-collapse:collapse; margin-bottom:8px; }
  th { background:#f5f0e8; color:#4A2C2A; font-size:0.72rem; letter-spacing:0.12em; text-transform:uppercase; padding:8px 10px; border-bottom:2px solid #e0d0b8; text-align:left; }
  td { padding:10px 10px; vertical-align:top; border-bottom:1px solid #f0e8dc; font-size:0.88rem; line-height:1.5; }
  tr:last-child td { border-bottom:none; }

  /* Badges */
  .badge { display:inline-block; font-size:0.6rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; padding:2px 7px; border-radius:20px; vertical-align:middle; margin-left:5px; }
  .badge-new   { background:#fff3dc; color:#b8740a; border:1px solid #e8c87a; }
  .badge-loved { background:#f5ede8; color:#6F4E37; border:1px solid #d4a882; }

  .tag { font-size:0.7rem; color:#aaa; text-transform:uppercase; letter-spacing:0.1em; }

  /* Footer */
  .footer { text-align:center; margin-top:40px; padding-top:16px; border-top:1px solid #e0d0b8; font-size:0.75rem; color:#bbb; }

  @media print { body { padding:20px 30px; } }
</style>
</head>
<body>

<div class="cover">
  <div class="cover-logo">Roast &amp; Rest</div>
  <div class="cover-sub">El Maadi, Cairo &nbsp;·&nbsp; Est. 2024</div>
  <div class="cover-tagline">Every cup crafted with intention.</div>
  <div class="cover-hours">Open daily · 9 AM – 12 AM</div>
</div>

${sectionsHTML}

<div class="footer">
  Roast &amp; Rest &nbsp;|&nbsp; El Maadi, Cairo &nbsp;|&nbsp; Prices in EGP &nbsp;|&nbsp; Menu subject to change without notice.
</div>

<script>window.onload = () => { window.print(); }<\/script>
</body>
</html>`;

    const blob = new Blob([printHTML], { type: 'text/html' });
    const url  = URL.createObjectURL(blob);
    window.open(url, '_blank');
}
