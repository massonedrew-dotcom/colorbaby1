Brand pill button — use for any tappable action; `variant` sets the role and `sun` is reserved for the single hero CTA.

```jsx
<Button variant="primary" size="lg" iconRight={<i data-lucide="arrow-right"></i>}>
  Записаться на экскурсию
</Button>
```

Variants: `primary` (pink, default) · `secondary` (orange) · `sun` (full sun-gradient, one hero CTA per view) · `soft` (pink tint) · `outline` · `ghost`.
Sizes: `sm` / `md` / `lg`. Props: `pill` (default true), `block`, `disabled`, `iconLeft`, `iconRight`.
Hover lifts + darkens; press gives a tactile squish. Always keep the focus ring.
