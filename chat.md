<div align="center">

# **📄 Landing Page Vibe-Coding Documentation**
```md
# Made by the Geek4AI Team #
~ Fiona, Michael, Nathan, Steven ~
November 8, 2025 
```
</div>

## **🤖 AI Interaction Overview**

The AI tool we employ is the Claude Sonnet 4.5 Agentic Model from the GitHub Copilot interface. The roles of this tool are technical troubleshooting, code generation, and refinement.

## **🗣️ Prompting Details**
```md
# Prompt:
Further develop the HeroBanner component. Given the elements in the component jsx file, make a better visual for the landing page. The given image in the img tag is an image of the mobile app's starting screen. Divide the banner page into two columns, one column will be the div for title of the app and the other column for the image of the mobile app's starting screen. Use Tailwind CSS for styling. Make it mobile-friendly too.

# Summary of the Response:
Layout: Redesigned into a responsive two-column structure using Tailwind CSS.
- Left: App title, tagline, and "learn more" button.
- Right: Mobile app screenshot.

Typography: Upgraded with larger headings, gradient text, and improved spacing.

Buttons: Added "Learn More" with hover animations.

Visuals: Gradient background, blur effects, drop shadows, and smooth transitions.

Responsiveness: Mobile-first design with adaptive text alignment and image scaling.

Styling: Uses FitGenie’s custom Tailwind color palette for a polished, modern look.
```
**Influence to Project:** Significantly boost the layouting and styling of the hero section, thereby making an engaging hook upon entering the site.

<br/>

```md
# Prompt:
Given the content of the Introduction component, develop it into a better component of the landing page, that will go after the HeroBanner component. Feel free to add blobs to make it more lively. Make it mobile-friendly too.

# Summary of the Response:
Visual Appeal:
- Decorative blurred background blobs using FitGenie’s brand colors.
- Frosted glass cards with gradient overlays for key content.

Content Structure:
- Bold section header: “The Problem We’re Solving” with gradient underline.
- Clear problem statement in a readable, styled card.
- Two-column layout for barriers:
    - Cost Barrier: Text left, stats right.
    - Knowledge Gap: Stats left, text right (alternating layout).

Statistics Cards:
- Gradient backgrounds, bold numbers, citation-ready formatting.
- Hover effects for interactivity (scale, shadow).

Solution Section:
- Dark gradient backdrop for contrast.
- Two frosted glass cards with icons (💲 & ✅).
- Responsive layout with hover animations.

Mobile Optimization:
- Breakpoint-based stacking and layout switching.
```
**Influence to Project:** Brought insight on how to structure the Introduction section with an appealing visual.

<br/>

```md
# Prompt:
Given the product's key features with additional description inside the brackets, develop it into a better component of the landing page, that will go after the HeroBanner component. Feel free to add blobs to make it more lively. Make it mobile-friendly too. For this section, use the bg-fitgenie-light class as the background.

# Summary of the Response:
Structured Content:
- Features stored as objects with title, description, and custom SVG icons.
- Descriptions refined for clarity and impact.

Visual Design:
- Background: bg-fitgenie-light with four decorative blurred blobs for depth.
- Frosted glass cards (bg-white/80, backdrop-blur-sm) for a modern aesthetic.

Section Header:
- Bold title: “Powerful Features” with gradient underline.
- Subtitle to introduce the section’s value.

Feature Grid:
- Responsive 2-column layout (desktop), 1-column (mobile).
- Cards include:
    - Gradient icon circles with hover animations.
    - Clean typography and spacing.
    - Icons:
        - 😊 Gamified Experience
        - ✓ AI Pose Tracker
        - Guidance Videos
        - Personalized Gym Planner

Mobile Optimization:
- Breakpoint-based stacking and spacing.
- Adaptive icon and text sizing for touch-friendly UX.
**Influence to Project:** Brought insight on how to structure the Key Features section with an appealing visual.

<br/>

```md
# Prompt:
Given the comparison data in the comparisonTable component, develop the Product Comparison section. Use a white background for this section. Make it mobile-friendly.

# Summary of the Response:
Responsive Layout:
- Desktop: Full comparison table with product logos, alternating row backgrounds for readability.
- Mobile: Stacked product cards, each showing all features for easy scrolling.

Visual Design:
- Clean white background with decorative blurred blobs.
- FitGenie card visually emphasized with gradient background and border.
- Rounded logo containers, shadow effects, and hover states for polish.

Branding & Style:
- Consistent use of FitGenie’s teal/cyan palette (fitgenie, fitgenie-light, fitgenie-dark).
- Header with gradient underline and larger typography for hierarchy.

Mobile Optimization:
- Breakpoint-based layout switching.
- Touch-friendly spacing and adaptive padding.
- Table view hidden on smaller screens.
```
**Influence to Project:** Helped implement better visuals and provide insight on how to implement this section on mobile view.


## **🦖 Project Evolution**

### **1. Foundation & Setup**
In the beginning, we set up our project by setting the config files and typing our content into the jsx files (mostly not styled yet). After we typed all our contents and to our best structure them into separate div's, we utilized the AI Agent from GitHub Copilot to repair the structures if needed and give better stylings.

### **2. Debugging and Problem-Solving**
Along the way, there are bugs due to the AI's misunderstanding of our prompt and human errors. We also utilized the AI Agent to help debug those errors. The following bugs happen during development:
1. Blank localhost rendering
2. Tailwind CSS v4/v3 compatibility issues
3. Responsive layout breakage
4. Image positioning challenges

### **3. Adding Additional Features**
After finishing most of the sections, we implement further features to our landing page to make it more appealing. Features including:
1. AOS (Animate On Scroll) package integration
2. Hover Effect refinements

These features are also implemented with the aid of the AI tool.
