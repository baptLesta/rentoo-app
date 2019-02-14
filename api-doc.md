# REST API DOC

# Get all categories

Get all categories of demographic datas.

**URL** : `/api/player/`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

## Success Responses


**Code** : `200 OK`

**Content example** : Response will be an array of all the player

```json
{
    "success": "true",
    "players": ["blabla", "blabla2"]
}
```

# List All The Demographic Datas

List all the demographic datas group by the categorie parameter with the average age and the total.

**URL** : `/api/demographic-data/`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints**

```json
{
    "categorie": string 
}
```

**Data examples**

```json
{
    "categorie": "education"
}
```

## Success Response

**Code** : `200 OK`

**Content examples**

For the categorie 'education'

```json
{
    "datas": [
        {
            "count": 42809,
            "age": 45.0525,
            "value": "High school graduate"
        },
        {
            "count": 41904,
            "age": 6.981,
            "value": "Children"
        }
        etc...
    ],
    "success": true
}
```
