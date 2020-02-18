# vendi

proof of concept

## what to simulate

- test panel for desktop capabilities
  - interfacing with hardware (readers, printers, boxes, etc)
  - doing big queries on db
- P.O.S. simulation
  - product inquiry
  - select operator
  - selling mode
    - open coupon
    - close coupon
    - cancel coupon
  - operator exit
  - feed
  - bleed

## getting started

you must have the following dependencies installed:

- node 10.x or later

```bash
npm install
```

run at least once the build for native librareis:

```bash
npx electron-rebuild -f -w sqlite3
```

then you can develop:

```bash
npm run dev
```

If needed, you can up and down database migrations directly:

```bash
npx knex migrate:latest
```

Or create one:

```bash
npx knex migrate:make my_new_migration
```

## domain

- operator
- pos
- store
- product
- stock
- price
- transaction
- sale
- item sale
- reinforcement
- bleeding
