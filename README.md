# Composable Storefronts Intermediate

This Catalyst project supports the lab work for BigCommerce Composable Storefronts Intermediate.

## Prerequisites

* Node.js 18 or later

## Getting Started

Copy the _starter_ branch.

```
pnpm create next-app@latest -e \
  https://github.com/CNanninga/bc-composable-int-catalyst/tree/starter \
  /path/to/working/directory
```

### Product FAQs

Custom query/component to load "FAQs" on product detail page.

Requires metafields on a product matching the following details:

* `namespace`: "FAQ"
* `permission`: "read_and_sf_access"
* `value`: JSON string matching the following schema:

```
{
  "question": "Question string",
  "answer": "Answer string"
}
```