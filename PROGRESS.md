Day 33-34 done: types, ProductCard, product grid, Tailwind, naira prices,
cart reducer + Context, Add to cart, React Router (Home + Cart pages),
+ / - / Remove buttons, cart total.
Next: save cart in localStorage (loadCart + useEffect in CartProvider),
then Day 35: checkout form, success page, deploy to Vercel.

## Project 5 progress (Oct 13)
Done:
- Order form, async, checkout
- Product type: added rating + reviewCount
- Product data: ratings, reviews, real images in public/images
- ProductCard: square image (aspect-square, object-cover, lazy), star rating, review count
- Home.tsx: search box + "No products found" empty state (needs testing)

Next:
- Step 8: category filter in Home.tsx
- Responsive grid (sm/lg/xl columns)
- Toast notifications (added/removed)
- Later: user reviews that calculate rating from a list (localStorage)
- Deploy + README with screenshots

## Project 5 update (Oct 14, night)
Done:
- Live on Vercel: ten-wine-53.vercel.app (vercel.json fixes refresh 404)
- PWA: manifest.json, icons, service-worker.js (registered in main.tsx)
- Header: bordered Home link, basket icon with count, bordered Orders link
- Hero banner on Home with Shop now button
- Orders history (success, failed, cancelled) with Cancel order button
- Profile type + src/utils/profile.ts (getProfile, saveProfile, clearProfile)

Next:
- Step 4b: Account page (src/pages/Account.tsx) + /account route + header link
- Step 4c: prefill checkout from saved profile
- Help center page (/help)
- PWA offline test on the live site (airplane mode)
- README: features, tech stack, run locally, screenshots

## Project 5 COMPLETE (Oct 15)
- Live: https://e-commerce-ten-wine-53.vercel.app
- Repo: github.com/Haez0004/e-commerce-
- README done: features, tech stack, run locally, screenshots
- Pending decision: contact number is public (src/data/contact.ts). Consider a separate shop number or a contact form.

Next: Days 36-42, Project 6 (GitHub Jobs clone or Movie App with API)
