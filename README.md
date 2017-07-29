# Pawsies Director
## Contracts

## USER ENDPOINTS

### REGISTER_USER
#### Payload
```javascript
{
  name: <String>,
  email: <String>,
  password: <String>
}
```
#### Response
```javascript
{
  token: <String>
}
```

### AUTHENTICATE_USER
#### Payload
```javascript
{
  email: <String>,
  password: <String>
}
```
#### Response
```javascript
{
  token: <String>
}
```

### USER_SESSION
#### Payload
```javascript
{
  token: <String>
}
```
#### Response
```javascript
{
  user: {
    userId: <String>,
    name: <String>,
    email: <String>
  }
}
```

### UPDATE_USER_SESSION
#### Payload
```javascript
{
  token: <String>,
  name: <String>,
  email: <String>,
  password: <String>
}
```
#### Response
```javascript
{
  userId: <String>
}
```

### UPSERT_PET
#### Payload
```javascript
{
  token: <String>,
  pet: {
    petId: <String>,
    name: <String>,
    birthdate: <Timestamp>,
    weight: <Number>,
    type: 'cat'|'dog'|'other'
  }
}
```
#### Response
```javascript
{
  petId: <String>
}
```

### PET_LIST
#### Payload
```javascript
{
  token: <String>,
  search: <String> (Optional)
}
```
#### Response
```javascript
{
  pets: [{
    petId: <String>,
    name: <String>,
    birthdate: <Timestamp>,
    weight: <Number>,
    type: 'cat'|'dog'|'other'
  }]
}
```

### PET_DETAIL
#### Payload
```javascript
{
  token: <String>,
  petId: <String>
}
```
#### Response
```javascript
{
  pet: {
    petId: <String>,
    name: <String>,
    birthdate: <Timestamp>,
    weight: <Number>,
    type: 'cat'|'dog'|'other'
  },
  activities: [{
    timestamp: <Timestamp>,
    type: <String>,
    payload: <Object>
  }]
}
```

### UPDATE_DEVICE
#### Payload
```javascript
{
  token: <String>,
  device: {
    deviceId: <String>,
    name: <String>,
    network: {
      ssid: <String>,
      password: <String>
    }
  }
}
```
#### Response
```javascript
{
  deviceId: <String>
}
```

### DEVICE_LIST
#### Payload
```javascript
{
  token: <String>,
  search: <String> (Optional)
}
```
#### Response
```javascript
{
  devices: [{
    deviceId: <String>,
    name: <String>,
    network: {
      ssid: <String>,
      password: <String>
    },
    serialKey: <String>
  }]
}
```

### DEVICE_DETAIL
#### Payload
```javascript
{
  token: <String>,
  deviceId: <String>
}
```
#### Response
```javascript
{
  device: {
    deviceId: <String>,
    name: <String>,
    network: {
      ssid: <String>,
      password: <String>
    },
    serialKey: <String>,
    userId: <String>
  },
  activities: [{
    timestamp: <Timestamp>,
    type: <String>,
    payload: <Object>
  }]
}
```

## DEVICE ENDPOINTS

### REGISTER_DEVICE
#### Payload
```javascript
{
  device: {
    name: <String>,
    network: {
      ssid: <String>,
      password: <String>
    },
    serialKey: <String>,
    userId: <String>
  }
}
```
#### Response
```javascript
{
  deviceId: <String>,
  token: <String>,
  rtmGatewayUrl: <String>
}
```

### AUTHENTICATE_DEVICE
#### Payload
```javascript
{
  serialKey: <String>
}
```
#### Response
```javascript
{
  token: <String>,
  rtmGatewayUrl: <String>
}
```

### RELEASE_FOOD
#### Payload
```javascript
{
  token: <String>
}
```
#### Response
```javascript
{
  success: <Boolean>
}
```

### RELEASE_WATER
#### Payload
```javascript
{
  token: <String>
}
```
#### Response
```javascript
{
  success: <Boolean>
}
```

### DETECT_PET_FEED
#### Payload
```javascript
{
  token: <String>
}
```
#### Response
```javascript
{
  success: <Boolean>
}
```

### DETECT_PET_DRANK
#### Payload
```javascript
{
  token: <String>
}
```
#### Response
```javascript
{
  success: <Boolean>
}
```
