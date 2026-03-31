# Use official Node image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose port (your app runs on 3000 by default)
EXPOSE 3000

# Start app
CMD ["node", "server.js"]
