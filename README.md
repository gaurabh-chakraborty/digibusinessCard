## Goals

- Minimize the cost of paying third-party services to host your digital business cards
- Elegant design and functionality
- Quick and easy setup

## Features

- Concise action buttons
- Click to contact via Phone, WhatsApp, Email, etc
- Direct vCard download (lets user download your contact information to their phone)
- Social media links
- PGP public key sharing
- Share your card with anyone using QR-code or link
- Showcase images, artworks, music, videos, poems, brochures, products, services or anything up to your imagination
- Embed any kind of HTML content (videos, music, maps, contact forms, you name it.)
- Themes
- Track your audience with analytics
- Custom fonts

## Highlights

- Zero limitations
- Your data belongs to you
- Private by design

## Assets

- [Boxicons](https://boxicons.com/)
- [Feather icons](https://feathericons.com)
- Logo and some icons by [Vishnu Raghav](https://www.vishnuraghav.com/)
- [QRCode-SVG](https://github.com/papnkukn/qrcode-svg)

## Self-Hosting Guide - Docker

In order to quickly host the EnBizCard Generator on a machine running Docker and Docker Compose, follow these steps:

1. Clone the repository to your machine and `cd` into the directory.

```
gh repo clone gaurabhgeekyants/digibusinessCard
```

2. Create a .env file by copying and adjusting env.example:

```
cp env.example .env
```

3. Run `docker-compose up -d`
4. Access the app at <http://localhost:22212> (or a different port, in case you edited the .env file).

## License

```
EnBizCard - An Open-Source Digital Business Card Generator
Copyright (C) 2021  Vishnu Raghav B

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

```
