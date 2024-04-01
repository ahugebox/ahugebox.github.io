---
sidebar_position: 4
---

# Pet Endpoint

The pet endpoint allows you to access pet objects.
This is the backbone of our API.
You can create, update, and delete pet objects which changes the current inventory in your store.

## The Pet object

### Sample Object

```
{
      "id": 0,
    "category": {
    "id": 0,
    "name": "string"
  },
    "name": "doggie",
    "photoUrls": [
    "string"
  ],
    "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
   "status": "available"
}
```

### Attributes

Pet objects contain six attributes. You can create pets with `POST/pet` and update them with `PUT/pet`.

| Attribute   | Type    | Description                                                                                   | Example Values              |
| ----------- | ------- | --------------------------------------------------------------------------------------------- | --------------------------- |
| `id`        | integer | The ID number of the pet. ID numbers are unique and assigned by employees on object creation. | 1                           |
| `category`  | array   | The category or type of animal of the pet. Available values: 1 for dogs, 2 for cats.          | 1, 2                        |
| `name`      | string  | The name of the specific pet.                                                                 | Doggie                      |
| `photoUrls` | string  | URLs of any images users uploaded of the pet.                                                 |                             |
| `tags`      | string  | Tags that describe each pet. Users can search by tags to find the right pet.                  | naughty, nice, brown, black |
| `status`    | string  | The status of the pet's availibility.                                                         | available, pending, sold    |

## Add Pet

`POST/pet` - Adds a new pet to the store.

### Parameters

| Attribute | Type   | Description                                                                             | Required? |
| --------- | ------ | --------------------------------------------------------------------------------------- | --------- |
| `body`    | string | All object information that must be added to the store information. Sample value below. | Required  |

Example body value:

```
{
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

### Returns

Returns the object uploaded into the database.

```
{
  "id": 842852750,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

## Update Pet

`PUT/pet` - Updates an existing pet.

### Parameters

| Attribute | Type   | Description                                                                             | Required? |
| --------- | ------ | --------------------------------------------------------------------------------------- | --------- |
| `body`    | string | All object information that must be added to the store information. Sample value below. | Required  |

Example body value:

```
{
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

### Returns

Returns the updated object uploaded into the database.

```
{
  "id": 842852750,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

## Find Pet

`GET/pet/{petId}` - Finds pet by ID.

### Parameters

| Attribute | Type    | Description                     | Required? | Example Value |
| --------- | ------- | ------------------------------- | --------- | ------------- |
| `petId`   | integer | ID of pet to return. Example: 2 | Required  | 2             |

### Returns

Returns a single pet.

```
{
  "id": 2,
  "category": {
    "id": 2,
    "name": "Cats"
  },
  "name": "Cat 2",
  "photoUrls": [
    "url1",
    "url2"
  ],
  "tags": [
    {
      "id": 1,
      "name": "tag2"
    },
    {
      "id": 2,
      "name": "tag3"
    }
  ],
  "status": "available"
}
```

## Find Pet by Status

`GET/pet/findByStatus` - Finds pet by status.

### Parameters

| Attribute | Type   | Description                                                                                                                               | Required? | Example Value |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------- |
| `status`  | string | Status values for filter. Multiple status values can be provided with comma separated strings. Available values: available, pending, sold | Required  | sold          |

### Returns

Returns all pets in inventory with filtered statuses.

```
[
  {
    "id": 3,
    "category": {
      "id": 2,
      "name": "Cats"
    },
    "name": "Cat 3",
    "photoUrls": [
      "url1",
      "url2"
    ],
    "tags": [
      {
        "id": 1,
        "name": "tag3"
      },
      {
        "id": 2,
        "name": "tag4"
      }
    ],
    "status": "pending"
  },
  {
    "id": 6,
    "category": {
      "id": 1,
      "name": "Dogs"
    },
    "name": "Dog 3",
    "photoUrls": [
      "url1",
      "url2"
    ],
    "tags": [
      {
        "id": 1,
        "name": "tag3"
      },
      {
        "id": 2,
        "name": "tag4"
      }
    ],
    "status": "pending"
  },
  {
    "id": 111,
    "category": {
      "id": 2,
      "name": "Dog"
    },
    "name": "Sasha",
    "photoUrls": [
      "C:\\Users\\Adi\\Desktop\\puppy-2785074_640.jpg"
    ],
    "tags": [
      {
        "id": 0,
        "name": "beagle"
      }
    ],
    "status": "pending"
  }
]
```
