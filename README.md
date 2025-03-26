# Eitan Medical Test

## Project Setup

### Clone the Repository
```sh
git clone https://github.com/haimtz/eitan-medical-test.git
cd eitan-medical-test
```

### Install Dependencies
```sh
npm install
```

### Run MySQL with Docker
```sh
docker compose up -d
```

## API Endpoints

### Add a Patient
**Endpoint:**
```http
POST http://localhost:3000/patient
```
**Body:**
```typescript
{
  "name": string,
  "age": number,
  "gender": number
}
```

### Add Heart Rate
**Endpoint:**
```http
POST http://localhost:3000/heart-rate
```
**Body:**
```ts
{
  "id": number,
  "heartRate": number
}
```

### Get High Heart Rate Records
**Endpoint:**
```http
GET http://localhost:3000/heart-rate/high/<num>
```
Replace `<num>` with the heart rate threshold.

### Get Summary Per Patient
**Endpoint:**
```http
GET http://localhost:3000/patient/summary/<id>
```
Replace `<id>` with patient ID.

## Notes
- Ensure that MySQL is running via Docker before making API requests.
- The application must be running for API endpoints to be accessible.

