---
sidebar_position: 2
---

# Petstore Overview

An introduction to the Petstore API.

## Why Petstore?

Petstore covers the basics of running a pet store.
You can use this API to create, manipulate, search, and sell pets using a basic interface.
The primary benefit of using Petstore is that it doesn't require any tooling or extra maintenance.
The simple interface takes a backseat so you and your employees can focus on what's important: pets.

## Key Concepts

Pets are the backbone of our API. Pets are objects in the Petstore database that store the name, ID, and image of a pet.
Once a pet is in the database, they can be returned for any users who check the inventory of the store
or search for a specific pet using ID numbers.

The store endpoint allows users to return pet inventories by status and check on their orders.
Our API stores purchase order information so users can check the status of their pet purchases.

## Architecture

Our API architecture uses three main endpoints.
![api architecture](/img/apiArchitecture.png)

## Workflows

All workflows can be found in the workflow diagram section. Our API workflows are simple.
Take our Add Pet workflow for example:
![pet workflow](/img/addPetWorkflow.png)
