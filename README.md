# OpenCommerce Merchant Dashboard Mockup

## Guiding Principles:

- **Intuitive User Experience:** 
  - Ensure the dashboard is easy to navigate, with clear distinctions between managing products and policies.

- **Flexibility:** 
  - Allow merchants to define policies at both product-specific and general levels.

- **Modularity:** 
  - Separate the processes of adding products and adding policies to maintain clarity.

- **Scalability:** 
  - Design the system to accommodate various types of policies, including those that span multiple products and general, non-product-specific policies.

- **Simplicity:** 
  - Use wizards and step-by-step processes to guide merchants through adding products and policies.

## Merchant Dashboard Structure:

### Tab 1: Products

- **Functionality:**
  - **Add Product Button:** Allows merchants to add new products.
  - **Product List:** Displays existing products with options to view or edit details.

- **Add Product Flow:**
  1. Merchants input product details (name, description, type - on-chain/off-chain, price, etc.).
  2. Save product.

### Tab 2: Policies

- **Functionality:**
  - **Add Policy Button:** Allows merchants to add new policies.
  - **Policy List:** Displays existing policies with options to view or edit details.

- **Add Policy Flow:**
  1. **Step 1: Define Policy Type:**
     - Options: "Product-Specific Policy" or "General Policy".
  2. **Step 2: Configure Policy:**
     - For "Product-Specific Policy": 
       - Select products the policy applies to (single product, multiple products).
       - Configure policy details (e.g., Access Control, Dynamic Pricing).
     - For "General Policy":
       - Configure policy details without tying it to specific products (e.g., Multiplayer Mode, global discounts).
  3. **Step 3: Review and Save:**
     - Summary of the policy and its settings.
     - Save policy.

## Examples of Policies:

- **Product-Specific Policy:**
  - **Policy Name:** "Bundle Discount"
  - **Applies to:** Product 1, Product 2, Product 3
  - **Details:** "Give a 10% discount if all three products are purchased together."

- **General Policy:**
  - **Policy Name:** "Multiplayer Mode Discount"
  - **Applies to:** Any purchase
  - **Details:** "If the buyer has purchased from Merchant X in the past month, give a 5% discount."

## UI Flow:

### Products Tab:

- **Button:** "Add Product"
- **List:** Shows products with edit options.

### Policies Tab:

- **Button:** "Add Policy"
- **List:** Shows policies with edit options.

### Add Policy Button:

- **Opens a wizard with steps:**
  1. Step 1: Choose "Product-Specific Policy" or "General Policy".
  2. Step 2: Configure specific settings based on the choice.
  3. Step 3: Review and Save.
