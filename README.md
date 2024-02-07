# ModelHub

## Overview
This platform serves as a marketplace for models. Users can browse through a variety of models, filter them based on tags, mark models as favorites, identify top-performing models, and even upload their own models.

## JavaScript Framework and Dependencies
The project is built using **React** and **Node.js** as the server to host the data. Additionally, it utilizes the following major plugins or packages:
- Express
- Tailwind
- React Router Dom
- React Hot Toast
- UUID

## Optimization Strategies
I haven't stored any static data such as a list of models on the client side. Instead, all data is retrieved from the Node.js server, hosted on DigitalOcean. Additionally, I've integrated **Lazy Loading** on the main Explore Page to fetch only the necessary data, thereby reducing the overall load on the user's device.

## ScreenShots
![image](https://github.com/sratslla/atlan-assignment/assets/93277471/eb6de555-8583-4836-b46b-bd7d1dd46300)
![image](https://github.com/sratslla/atlan-assignment/assets/93277471/a4f33304-6e3a-4644-b6df-500c183055cc)
