---
name: Ethos Medical Identity
colors:
  surface: '#fff8f7'
  surface-dim: '#e9d6d4'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ef'
  surface-container: '#fdeae7'
  surface-container-high: '#f7e4e2'
  surface-container-highest: '#f1dedc'
  on-surface: '#231918'
  on-surface-variant: '#564240'
  inverse-surface: '#392e2d'
  inverse-on-surface: '#ffedeb'
  outline: '#89726f'
  outline-variant: '#dcc0bd'
  surface-tint: '#9f3f39'
  primary: '#3f0003'
  on-primary: '#ffffff'
  primary-container: '#601010'
  on-primary-container: '#e7766d'
  inverse-primary: '#ffb3ac'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e4e2e2'
  on-secondary-container: '#646464'
  tertiary: '#001c36'
  on-tertiary: '#ffffff'
  tertiary-container: '#003158'
  on-tertiary-container: '#769ac7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb3ac'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#802824'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#d2e4ff'
  tertiary-fixed-dim: '#a5c9f8'
  on-tertiary-fixed: '#001c37'
  on-tertiary-fixed-variant: '#224971'
  background: '#fff8f7'
  on-background: '#231918'
  surface-variant: '#f1dedc'
typography:
  h1:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h1-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  h2-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is rooted in the heritage of institutional healthcare, prioritizing **trust, precision, and human-centric care**. Drawing inspiration from traditional medical institutions, the aesthetic is modernized into a **Corporate / Modern** style that feels premium and established.

The visual narrative balances the gravity of medical expertise with the accessibility of digital health. It utilizes heavy whitespace to create a sense of calm ("clinical "cleanliness") while employing a deep, authoritative burgundy to signal tradition and high-quality service. The interface is designed to evoke a sense of reliability and professional excellence, ensuring users feel secure while managing their health data.

## Colors

This design system utilizes a high-contrast palette to ensure legibility and institutional authority.

*   **Primary Burgundy:** Used for key brand moments, primary actions, and critical information. Tints (50-200) are reserved for subtle backgrounds or highlight states, while shades (700-900) provide depth for typography.
*   **Secondary Dark Gray:** Serves as the functional anchor for secondary UI elements, icons, and supporting text.
*   **Neutrals:** A scale of cool grays provides the structural framework. Light grays (50-100) are used for section backgrounds to reduce eye strain compared to pure white.
*   **Semantic Colors:** Standardized Red (Error), Amber (Warning), and Green (Success) should be used sparingly, ensuring they do not conflict with the Primary Burgundy.

## Typography

The typographic system leverages **Inter** for its exceptional legibility in data-dense environments. 

Headings use tight letter spacing and bold weights to project confidence. Body text utilizes a generous line height (1.6) to ensure medical reports and patient instructions remain highly readable for all age groups. Label styles are set in semi-bold to clearly distinguish metadata from content. For mobile devices, heading sizes are scaled down to maintain hierarchy without overwhelming the smaller viewport.

## Layout & Spacing

The design system employs a strict **8px linear scale**. All spatial relationships, component heights, and padding must be multiples of 8.

*   **Grid Model:** A 12-column fluid grid for desktop with 24px gutters. For mobile, a 4-column grid with 16px margins is used.
*   **Spacing Rhythm:** Use 16px (md) for internal component padding and 24px (lg) for spacing between distinct content blocks. 
*   **Safe Areas:** Ensure a minimum horizontal margin of 16px on mobile to prevent content from touching screen edges. Content should be grouped logically into "cards" to maintain clarity in complex medical flows.

## Elevation & Depth

To maintain a premium, trustworthy feel, the design system avoids heavy shadows in favor of **Tonal Layers** and **Subtle Ambient Shadows**.

*   **Surface 0 (Background):** Neutral 50.
*   **Surface 1 (Cards/Panels):** Pure White (#FFFFFF). This is the primary elevation for interactive content.
*   **Surface 2 (Popovers/Modals):** Pure White with a "Soft Ambient" shadow (0px 4px 20px rgba(0, 0, 0, 0.05)).
*   **Depth Markers:** Instead of heavy borders, use a 1px solid border in Neutral 200 for cards to provide definition against light backgrounds.

## Shapes

The shape language is "Rounded-Soft," balancing professional rigidity with approachable friendliness.

Standard containers such as cards and main content areas use a **12px radius** to create a modern, high-end feel. Buttons and input fields use a slightly tighter **8px radius** to denote precision and distinct interactivity. Chips for status or categories are fully rounded (pill-shaped) to distinguish them from actionable buttons.

## Components

### Buttons
*   **Primary:** Solid Institutional Burgundy (#601010) with White text. 8px border radius.
*   **Secondary:** Neutral 100 background with Dark Gray (#4D4D4D) text.
*   **Ghost:** Transparent background with Burgundy border (1px) or text only for tertiary actions.

### Input Fields
*   1px border in Neutral 300, 8px radius. 
*   Active state: 2px border in Primary Burgundy. 
*   Labels sit above the field in `label-md` style.

### Cards
*   12px radius, White background, 1px Neutral 200 border. 
*   Standardized 24px internal padding for desktop, 16px for mobile.

### Chips & Badges
*   Used for status (e.g., "Confirmed", "Pending"). 
*   Height of 32px with pill-shaped rounding. Use Primary 50 background with Primary 500 text for brand-relevant status.

### Lists
*   Clean dividers (1px Neutral 100).
*   High touch-target heights (min 56px) for mobile medical selection.