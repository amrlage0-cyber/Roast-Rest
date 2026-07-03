```markdown
# The Design System: Editorial Elegance for the Modern Roastery

## 1. Overview & Creative North Star
**The Creative North Star: "The Sensory Alchemist"**

This design system moves away from the rigid, sterile grids of traditional e-commerce to embrace a high-end editorial aesthetic. We treat the digital interface not as a software tool, but as a tactile menu in a boutique cafe. The "Sensory Alchemist" philosophy combines the precision of modern specialty coffee with the warmth of a sun-drenched reading nook.

To break the "template" look, designers must prioritize **Intentional Asymmetry**. Hero images should bleed off the edge of the viewport, and typography should overlap container boundaries. By layering high-contrast serif displays over soft, organic surfaces, we create a sense of depth that feels both premium and deeply inviting.

---

## 2. Colors & Tonal Depth
Our palette is a monochromatic exploration of warmth, eschewing the "safety" of greys and blues for a richer, more intentional spectrum.

### The Palette (Material Design Mapping)
- **Primary (The Brew):** `#553722` (Deep espresso for core interactions)
- **Primary Container (The Roast):** `#6F4E37` (The signature coffee warmth)
- **Surface (The Cream):** `#FBFBE2` (Our master background)
- **Surface Container Low (The Foam):** `#F5F5DC` (For subtle sectioning)
- **Tertiary (The Garnish):** `#705D00` (Our "Sugar Accent Gold")

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are strictly prohibited for sectioning or containment. Boundaries must be defined through:
1.  **Background Color Shifts:** A `surface-container-low` card sitting on a `surface` background.
2.  **Tonal Transitions:** Moving from a `surface-container-highest` hero section into a `surface` body area.

### Glass & Gradient Soul
To ensure the interface feels "alive," use subtle gradients. 
- **The Signature Gradient:** Transition from `primary` to `primary_container` (135° angle) for primary buttons and high-impact hero backgrounds.
- **Glassmorphism:** For floating navigation or modals, use `surface_container_lowest` at 85% opacity with a `24px` backdrop blur. This allows the warmth of the background to bleed through, softening the interface.

---

## 3. Typography
The type system relies on the tension between the timelessness of a serif and the functional clarity of a modern sans-serif.

| Level | Token | Font | Size | Weight | Character |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Noto Serif | 3.5rem | 700 | Dramatic, editorial |
| **Headline**| `headline-md` | Noto Serif | 1.75rem | 600 | Authoritative, warm |
| **Title**   | `title-lg` | Be Vietnam Pro| 1.375rem| 500 | Clean, structured |
| **Body**    | `body-lg` | Be Vietnam Pro| 1.0rem | 400 | Highly readable |
| **Label**   | `label-md` | Be Vietnam Pro| 0.75rem | 600 | All-caps, tracked out |

**Editorial Note:** Use `display-lg` for product names and "mood" copy. Always provide generous line-height (1.4–1.6) to ensure the text feels like a luxury publication.

---

## 4. Elevation & Depth
In this system, depth is biological, not mechanical. We avoid harsh shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** Stack containers to create hierarchy. A `surface_container_lowest` card (Milk White) placed upon a `surface_container_low` background creates a natural, soft lift.
*   **Ambient Shadows:** When an element must float (e.g., a "Reserve a Table" FAB), use the `Dark Roast` (#4A2C2A) color at 6% opacity.
    *   *Values:* `0px 12px 32px rgba(74, 44, 42, 0.06)`
*   **The Ghost Border:** If a boundary is required for accessibility, use the `outline_variant` token at 15% opacity. Never use 100% opaque lines.

---

## 5. Components

### Buttons & Chips
- **Primary Button:** Large radii (`xl`: 3rem). Background: The Signature Gradient. Text: Milk White. No border.
- **Secondary Button:** Surface-tinted. Background: `primary_fixed`. Text: `on_primary_fixed_variant`.
- **Chips:** Used for coffee notes (e.g., "Nutty," "Floral"). Use `surface_container_high` with `md` (1.5rem) rounding.

### Cards & Lists
- **Forbid Dividers:** Use `32px` or `48px` of vertical whitespace to separate list items.
- **The "Stacked Sheet" Card:** Cards should not have visible borders. Use a `surface_container_lowest` fill on a `surface` background. Apply `lg` (2rem) corner radius.

### Input Fields
- **Refined Inputs:** Use `surface_container_highest` for the field background. The active state is indicated by a 2px "Ghost Border" of `tertiary` (Gold) and a subtle 4% `tertiary` inner glow.

### Bespoke Component: The "Roast Slider"
A custom interaction for bean selection. A horizontal track using `outline_variant` with a custom gold (`tertiary`) thumb that glows slightly when active.

---

## 6. Do's and Don'ts

### Do
- **Do** use asymmetrical margins. Allow images to hang 5% off the grid to the left or right.
- **Do** use the "Sugar Accent Gold" only for micro-interactions: a link hover, a price tag, or a "New" badge.
- **Do** maximize whitespace. If a layout feels "full," double the padding.

### Don't
- **Don't** use blue, grey, or cool tones. Even shadows must be "roasted" (tinted with #4A2C2A).
- **Don't** use sharp corners. Everything must feel soft to the touch (16px minimum radius).
- **Don't** use standard 1px lines to separate content. Use color blocks or space.

---

## 7. Interaction & Motion
Motion should mimic the pouring of cream into coffee: fluid, viscous, and organic. Use **Ease-in-Out** transitions with durations between **300ms and 500ms**. Avoid "snappy" or "springy" animations that break the premium, calm atmosphere.```